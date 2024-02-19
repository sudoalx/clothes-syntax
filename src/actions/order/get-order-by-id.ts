"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";

export const getOrderById = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    return {
      ok: false,
      message: "You are not authenticated",
    };
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,
            quantity: true,
            size: true,

            product: {
              select: {
                name: true,
                slug: true,

                ProductImage: {
                  select: {
                    url: true,
                  },
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    if (!order) throw new Error(`${id} doesn't exist`);

    if (session.user.role === "USER") {
      if (session.user.id !== order.userId) {
        throw new Error(`${id} is not yours`);
      }
    }

    return {
      ok: true,
      order: order,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "Order not found",
    };
  }
};
