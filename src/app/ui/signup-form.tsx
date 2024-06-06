"use client";
import React, { useState } from "react";
import { register } from "../services/create-restaurant";
import { useFormState } from "react-dom";

const RegistrationForm = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(register, initialState);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="errors">
          <div id="status-error" aria-live="polite" aria-atomic="true">
              {state.errors?.status &&
                state.errors.status.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                ))}
            </div>
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            className="input-style"
            type="email"
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Contact Phone
          </label>
          <input
            className="input-style"
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Address
          </label>
          <input
            className="input-style"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Contact Name
          </label>
          <input
            className="input-style"
            type="text"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            className="input-style"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Restaurant Name
          </label>
          <input
            className="input-style"
            type="text"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Restaurant Address
          </label>
          <input
            className="input-style"
            type="text"
            name="restaurantAddress"
            value={formData.restaurantAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Restaurant Phone
          </label>
          <input
            className="input-style"
            type="tel"
            name="restaurantPhone"
            value={formData.restaurantPhone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
