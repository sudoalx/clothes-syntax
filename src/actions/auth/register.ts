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
        name: name.trim(),
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password, 10),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return {
      ok: true,
      status: "success",
      data: user,
      message: "User registered successfully!",
    };
  } catch (error) {
    console.error("Error registering user:", error);
    return {
      ok: false,
      status: "error",
      message: "Error registering user",
    };
  }
};
