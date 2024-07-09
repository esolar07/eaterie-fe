"use client";
import React, { useState } from "react";
import { register } from "../services/create-restaurant";
import { useFormState, useFormStatus } from "react-dom";

const RegistrationForm = () => {
  const [errorMessage, dispatch] = useFormState(register, undefined);

  return (
    <div>
    <div className="errors">
          <div id="status-error" aria-live="polite" aria-atomic="true">
              {errorMessage &&
                  <p className="mt-2 text-sm text-red-500">
                    {errorMessage.message}
                  </p>}
            </div>
        </div>
    <form action={dispatch} className="space-y-6 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h4>Business Information</h4>        
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            className="input-style"
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone
          </label>
          <input
            className="input-style"
            type="tel"
            name="phone"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Company Address
          </label>
          <input
            className="input-style"
            type="text"
            name="address"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            City
          </label>
          <input
            className="input-style"
            type="text"
            name="city"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            State
          </label>
          <input
            className="input-style"
            type="text"
            name="state"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Zip Code
          </label>
          <input
            className="input-style"
            type="text"
            name="zip"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Industry
          </label>
          <input
            className="input-style"
            type="text"
            name="industry"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Image
          </label>
          <input
            type="file"
            name="image"
            accept="image/*"
          />
        </div>
      </div>
      <LoginButton />
      
    </form>
    </div> 
  );
};

function LoginButton() {
  const { pending } = useFormStatus();
 
  return (
    <button type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
  );
}

export default RegistrationForm;
