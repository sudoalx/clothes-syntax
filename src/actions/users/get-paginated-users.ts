import { auth } from "@/auth.config";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export const getPaginatedUsers = async () => {
  const session = await auth();
  if (session?.user.role !== "ADMIN") {
    redirect("/auth/login");
    return {
      ok: false,
      message: "Unauthorized",
    };
  }
  const users = await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return {
    ok: true,
    users,
  };
};
