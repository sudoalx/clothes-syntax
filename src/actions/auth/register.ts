"use server";
import bcryptjs from "bcryptjs";
import prisma from "@/lib/prisma";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    console.log("Registering:", { name, email, password });

    const user = await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password, 10),
      },
    });

    return {
      status: "success",
      data: user,
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      status: "error",
      error: "Error registering user",
    };
  }
};
