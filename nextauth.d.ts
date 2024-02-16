import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified?: boolean;
      role: "USER" | "ADMIN";
      image?: string;
    } & DefaultSession["user"];
  }
}
