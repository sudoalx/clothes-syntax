"use client";

import { authLogin } from "@/actions";
import clsx from "clsx";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoInformationOutline, IoReloadCircle } from "react-icons/io5";

type FormInputs = {
  email: string;
  password: string;
};
export const LoginForm = () => {
  const [state, dispatch] = useFormState(authLogin, undefined);

  useEffect(() => {
    if (state === "Success") {
      window.location.replace("/");
    }
  }, [state]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { email, password } = data;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action={dispatch}
      className="flex flex-col"
    >
      <fieldset className="flex flex-col">
        <label htmlFor="email" id="emailLabel">
          Email
        </label>
        <input
          id="email"
          className={clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5 focus:border-blue-500 focus:outline-none",
            {
              "border-red-500": errors.email,
            }
          )}
          type="email"
          placeholder="example@example.com"
          {...register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          autoFocus
        />
        {errors.email && (
          <span className="text-red-500 text-sm mb-5">
            {errors.email.message}
          </span>
        )}

        <label htmlFor="password" id="passwordLabel">
          Password
        </label>
        <input
          id="password"
          className="px-5 py-2 border bg-gray-200 rounded mb-5 focus:border-blue-500 focus:outline-none"
          type="password"
          placeholder="*********"
          {...register("password", {
            required: true,
          })}
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
