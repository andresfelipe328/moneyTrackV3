"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { FaSignInAlt, FaUnlockAlt } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";

const SignInForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      if (res.status.toString().startsWith("4"))
        setError("wrong email or password");
      if (res.status.toString().startsWith("5"))
        setError("there was a problem with the server, try again");
    }
    if (res?.ok) {
      redirect("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex items-center gap-2">
            <RiUserFill className="icon" />
            <small>Email:</small>
          </label>
          <input
            key={error}
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            required
            className={error && `bg-onFailure`}
            onChange={() => setError("")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex items-center gap-2">
            <FaUnlockAlt className="icon" />
            <small>Password:</small>
          </label>
          <input
            key={error}
            id="password"
            name="password"
            type="password"
            required
            className={error && `bg-onFailure`}
            onChange={() => setError("")}
          />
        </div>

        <button
          type="submit"
          className="justify-between w-1/2 mx-auto disabled:opacity-50"
        >
          <small>sign-in</small>
          <FaSignInAlt className="icon" />
        </button>
      </form>
      {error && <small className="mx-auto text-onFailure">{error}</small>}
    </>
  );
};

export default SignInForm;
