import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-blue-700 rounded-lg text-white">
          Ground
        </span>
        Thoughts
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search for a topic"
          rightIcon={FcSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-11 h-9 lg:hidden" color="gray" pill>
        <FcSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        <Button className="w-11 h-9 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button color="blue" outline>Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/learning"} as={"div"}>
          <Link to="/learning">Learning</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
