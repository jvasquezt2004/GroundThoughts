import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-6 border-indigo-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-blue-700 rounded-lg text-white">
                Ground
              </span>
              Thoughts
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Explore" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/jvasquezt2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms and conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div>
          <Footer.Copyright
            href="#"
            by="Ground Thoughts"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={FaSquareFacebook} />
            <Footer.Icon href="#" icon={FaSquareInstagram} />
            <Footer.Icon href="#" icon={FaSquareXTwitter} />
            <Footer.Icon href="#" icon={FaSquareGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
