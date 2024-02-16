"use client";

import { authLogin } from "@/actions";
import clsx from "clsx";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline, IoReloadCircle } from "react-icons/io5";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authLogin, undefined);

  return (
    <form action={dispatch} className="flex flex-col">
      <fieldset className="flex flex-col">
        <label htmlFor="email" id="emailLabel">
          Email
        </label>
        <input
          id="email"
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
          placeholder="example@example.com"
          name="email"
        />

        <label htmlFor="password" id="passwordLabel">
          Password
        </label>
        <input
          id="password"
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="password"
          placeholder="*********"
          name="password"
          autoComplete="current-password"
        />
      </fieldset>
      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state === "CredentialsSignin" && (
          <>
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{state}</p>
          </>
        )}
      </div>

      <LoginButton />
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx("flex justify-center items-center", {
        "btn-primary": !pending,
        "btn-loading": pending,
      })}
      aria-label="Sign in"
      aria-disabled={pending}
      disabled={pending}
    >
      Sign in
      {pending && (
        <IoReloadCircle className="h-5 w-5 animate-spin inline-block ml-1" />
      )}
    </button>
  );
}
