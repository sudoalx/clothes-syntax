"use server";

import { signIn } from "@/auth.config";

export async function authLogin(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return "Success";
  } catch (error) {
    console.error(error);
    return "CredentialsSignin";
  }
}
