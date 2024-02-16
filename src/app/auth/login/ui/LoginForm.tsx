"use client";

import { authLogin } from "@/actions";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [state, dispatch] = useFormState(authLogin, undefined);

  return (
    <form action={dispatch}>
      <label htmlFor="email">Email</label>
      <br />
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        placeholder="example@example.com"
        name="email"
      />

      <label htmlFor="password">Password</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        placeholder="*********"
        name="password"
      />

      <button type="submit" className="btn-primary">
        Sign in
      </button>
    </form>
  );
};
