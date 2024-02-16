"use client";

import { authLogin } from "@/actions";
import { useFormState } from "react-dom";

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
        />
      </fieldset>

      <button type="submit" className="btn-primary" aria-label="Sign in">
        Sign in
      </button>
    </form>
  );
};
