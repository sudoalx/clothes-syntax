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
    console.log(error);
    return "CredentialsSignin";
  }
}

export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", {
      email,
      password,
    });

    return { ok: true, status: "success" };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      status: "error",
      message: "Error logging in",
    };
  }
};
