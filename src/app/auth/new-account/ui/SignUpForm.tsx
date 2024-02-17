"use client";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { name, email, password } = data;
    console.log({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="name">Name</label>
      <input
        className={clsx(
          "px-5 py-2 border bg-gray-200 rounded mb-5 focus:border-blue-500 focus:outline-none",
          {
            "border-red-500": errors.name,
          }
        )}
        type="text"
        placeholder="John Doe"
        {...register("name", {
          required: true,
          pattern: {
            value: /^\p{L}+$/u,
            message: "Invalid name",
          },
        })}
        autoFocus
      />
      {errors.name && (
        <span className="text-red-500 text-sm mb-5">{errors.name.message}</span>
      )}

      <label htmlFor="email">Email</label>
      <input
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
      />
      {errors.email && (
        <span className="text-red-500 text-sm mb-5">
          {errors.email.message}
        </span>
      )}

      <label htmlFor="password">Password</label>
      <input
        className={clsx(
          "px-5 py-2 border bg-gray-200 rounded mb-5 focus:border-blue-500 focus:outline-none",
          {
            "border-red-500": errors.password,
          }
        )}
        type="password"
        placeholder="*********"
        {...register("password", {
          required: true,
          pattern: {
            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            message:
              "Password must contain at least 8 characters, including UPPER/lowercase and numbers",
          },
        })}
      />
      {errors.password && (
        <span className="text-red-500 text-sm mb-5">
          {errors.password.message}
        </span>
      )}

      <button className="btn-primary">Sign up</button>
    </form>
  );
};
