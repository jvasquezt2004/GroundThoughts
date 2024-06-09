import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <section className="max-w-lg mx-auto p-4 w-full">
      <h1 className="my-7 text-center font-bold text-3xl">Profile</h1>
      <form className="flex flex-col gap-5">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.profilePicture}
            alt="User"
            className="rounded-full w-full h-full object-cover border-8 border-gray-300"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />
        <TextInput type="password" id="password" placeholder="password" />
        <Button type="submit" color="blue" outline>
          Update Profile 
        </Button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="cursor-pointer text-red-500">Delete account</span>
        <span className="cursor-pointer text-gray-500">Sign Out</span>
      </div>
    </section>
  );
}
