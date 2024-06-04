"use client";
import { Button } from "@/app/ui/button";
import { useFormStatus } from "react-dom";
import { authetication } from "../services/auth";

export default function LoginForm() {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
  };
  return (
    // <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
    <form className="space-y-6 md:space-y-10" action={authetication}>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      {/* <div className="flex items-center justify-between">
        <div className="flex items-start"></div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div> */}
      <button className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Sign in
      </button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <a
          href="signup"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>

    // <form action={authetication} className="space-y-3">
    //   <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
    //     <h1 className={` mb-3 text-2xl`}>
    //       Please log in to continue.
    //     </h1>
    //     <div className="w-full">
    //       <div>
    //         <label
    //           className="mb-3 mt-5 block text-xs font-medium text-gray-900"
    //           htmlFor="email"
    //         >
    //           Email
    //         </label>
    //         <div className="relative">
    //           <input
    //             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             id="email"
    //             type="email"
    //             name="email"
    //             placeholder="Enter your email address"
    //             required
    //           />
    //           {/* <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
    //         </div>
    //       </div>
    //       <div className="mt-4">
    //         <label
    //           className="mb-3 mt-5 block text-xs font-medium text-gray-900"
    //           htmlFor="password"
    //         >
    //           Password
    //         </label>
    //         <div className="relative">
    //           <input
    //             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
    //             id="password"
    //             type="password"
    //             name="password"
    //             placeholder="Enter password"
    //             required
    //             minLength={6}
    //           />
    //           {/* <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
    //         </div>
    //       </div>
    //     </div>
    //     <LoginButton />
    //     <div
    //       className="flex h-8 items-end space-x-1"
    //       aria-live="polite"
    //       aria-atomic="true"
    //     >
    //     </div>
    //   </div>
    // </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      Log in
      {/* <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
    </Button>
  );
}
