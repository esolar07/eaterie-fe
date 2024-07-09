"use client";
import { useState } from "react";
import RegistrationUserForm from "../ui/signup-user-form";
import RegistrationForm from "../ui/signup-form";

export default function SingUpPage() {

  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-full">
      <div className="flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0">
        <div className="bg-icon">
          <a
            href="#"
            className=""
          >
            <img
              className="w-15 h-10 mr-2"
              src="https://eaterie.io/wp-content/uploads/2024/04/Eaterie.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-8 md:space-y-8 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create your profile
              </h1>
              <RegistrationUserForm  />
            </div>
          </div>
      </div>
    </section>
  );
}
