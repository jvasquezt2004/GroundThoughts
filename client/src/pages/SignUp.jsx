import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { IoEnterOutline } from "react-icons/io5";

export default function SignUp() {
  return (
    <section className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left part */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-blue-700 rounded-lg text-white">
              Ground
            </span>
            Thoughts
          </Link>
          <p className="text-sm mt-5">
            Create an account and start sharing your thoughts
          </p>
        </div>
        {/* Right part */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput
                type="text"
                placeholder="Enter your username"
                id="username"
              />
            </div>
            <div>
              <Label value="E-mail" />
              <TextInput
                type="text"
                placeholder="Enter your email address"
                id="email"
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="text"
                placeholder="Enter your password"
                id="password"
              />
            </div>
            <Button color="blue" type="submit" className="w-full rounded-lg">
              <IoEnterOutline className="mr-2 h-5 w-5" />
              Sign Up
            </Button>
          </form>
          <div className="flex gap-1 text-sm mt-5">
            <span className="text-gray-400">Already have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
