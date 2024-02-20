"use server";

import { auth } from "@/auth.config";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const getPaginatedOrders = async () => {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    redirect("/");
    return {
      ok: false,
      message: "You are not authorized to access this resource",
    };
  }

  const orders = await prisma.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      OrderAddress: {
        select: {
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  return {
    ok: true,
    orders: orders,
  };
};
