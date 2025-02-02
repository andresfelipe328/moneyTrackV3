"use client";
import { useState } from "react";
import { register } from "@/lib/actions/authentication/register";

import { redirect } from "next/navigation";
import { FaSignInAlt, FaUnlockAlt } from "react-icons/fa";
import { RiUserFill } from "react-icons/ri";

const RegisterForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const r = await register({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    if (r?.error) {
      setError(r.error);
      return;
    } else {
      return redirect("/sign-in");
    }
  };

  return (
    <>
      <form action={handleSubmit} className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="flex items-center gap-2">
            <RiUserFill className="icon" />
            <small>name:</small>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="name"
            className={error && `bg-onFailure`}
            onChange={() => setError("")}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex items-center gap-2">
            <RiUserFill className="icon" />
            <small>Email:</small>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="example@email.com"
            className={error && `bg-onFailure`}
            onChange={() => setError("")}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="flex items-center gap-2">
            <FaUnlockAlt className="icon" />
            <small>Password:</small>
          </label>
          <input
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
          <small>sign-up</small>
          <FaSignInAlt className="icon" />
        </button>
      </form>
      {error && <small className="mx-auto text-onFailure">{error}</small>}
    </>
  );
};

export default RegisterForm;
