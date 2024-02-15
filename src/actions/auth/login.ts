"use server";

import { signIn } from "@/auth.config";

export async function authLogin(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log(Object.fromEntries(formData));
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    // if ((error as Error).message.includes("CredentialsSignin")) {
    // }
    // throw error;
    return "CredentialsSignin";
  }
}
