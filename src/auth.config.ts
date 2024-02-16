import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "@/lib/prisma";
import bcryptjs from "bcryptjs";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(8),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          throw new Error("Invalid credentials format");
        }

        const { email, password } = parsedCredentials.data;

        // Search for the user in the database
        const user = await prisma.user.findFirst({
          where: {
            email: email.toLowerCase(),
          },
        });

        if (!user) {
          throw new Error("User not found");
        }

        // Compare the password
        if (!bcryptjs.compareSync(password, user.password)) {
          throw new Error("Incorrect password");
        }

        // Return the user without the password
        const { password: _, ...rest } = user;

        console.log("User logged:", rest);

        return rest;
      },
    }),
  ],
};

export const { signIn, signOut, auth } = NextAuth(authConfig);
