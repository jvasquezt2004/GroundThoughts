import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  return (
    <section className="flex flex-col sm:flex-row p-3 border border-teal-400 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about nutrition?</h2>
        <p className="text-gray-500 my-2">Check these resources</p>
        <Button color="blue" className="rounded-tl-xl rounded-bl-none">
          {" "}
          <a
            href="https://www.healthline.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Access to the biggest Health Magazine
          </a>
        </Button>
      </div>
      <div className="p-6 flex-1">
        <img
          src="https://images.everydayhealth.com/homepage/health-topics-2.jpg?sfvrsn=757370ae_2"
          alt="Doctors"
        />
      </div>
    </section>
  );
}
