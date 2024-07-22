"use client";
import React, { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { registerUser } from "../services/create-user";
import RegistrationForm from "./signup-form";
interface ErrorMesage {[key: string]: any | undefined;}
interface User {[key: string]: any | undefined;}

const RegistrationUserForm = () => {
  const [result, dispatch] = useFormState(registerUser, undefined);
  const [errorMessage, setErrorMessage] = useState<ErrorMesage>();
  const [user, setUser] = useState<User>();
  const setValorUSer = () => {
    debugger;
    if (result?.userToken) {
      setUser(result);
    } else {
      setErrorMessage(result);
    }
  };

  useEffect(() => {
    setValorUSer();
  }, [result]);
  if (user?.isBusiness) {
    return(
      <RegistrationForm/>
    )
    
  } else {
    return (
    <div>
      <div className="errors">
        <div id="status-error" aria-live="polite" aria-atomic="true">
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">
              {errorMessage?.message}
              {errorMessage.errors && (<ul>
              {Object.keys(errorMessage?.errors).map((key) => (                
                  <li key={key}>{`${key} : ${errorMessage?.errors[key][0]}`}</li>
                ))}
              </ul>)}
            </p>
          )}
        </div>
      </div>
      <form action={dispatch} className="space-y-6 md:space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Firstname
            </label>
            <input className="input-style" type="text" name="firstname" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Lastname
            </label>
            <input className="input-style" type="text" name="lastname" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Gender
            </label>
            <input className="input-style" type="text" name="gender" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone
            </label>
            <input className="input-style" type="phone" name="phone" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input className="input-style" type="email" name="email" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <input className="input-style" type="password" name="password" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Repeat Password
            </label>
            <input className="input-style" type="password" name="password2" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Is Business?
            </label>
            <input type="checkbox" name="isBusiness" defaultValue={0} />
          </div>
        </div>
        <LoginButton />
      </form>
    </div>
  );
  }

  
};

function LoginButton() {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 text-white px-4 py-2 rounded"
    >
      Register
    </button>
  );
}

export default RegistrationUserForm;
