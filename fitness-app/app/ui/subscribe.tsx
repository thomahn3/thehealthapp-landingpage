'use client';

import { useState } from "react";
import { z } from "zod";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const emailSchema = z.string().email();

export default function Subscribe({ setSubscribed }: { setSubscribed: any }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // Validate email format using Zod
      const validatedEmail = emailSchema.parse(email);

      // Make the API request
      const response = await fetch('api/updateNotion', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email: validatedEmail }),
      });

      if (!response.ok) {
        setError('Error, please try again later.');
        return;
      }

      setSubscribed(true);
      setError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError('Email format error, failed to submit.');
      } else {
        console.error('Error:', err);
        setError('Error, please try again later.');
      }
    }
  }

  return (
    <form
      className="font-secondary flex flex-shrink w-full px-2 max-w-xl mx-auto justify-center"
      onSubmit={handleSubmit}
    >
      <input
        className="font-secondary px-1 border border-r-0 rounded-l-lg w-2/3 focus:outline-none focus:ring-1 focus:ring-red-400"
        type="email"
        required
        placeholder="Your email here"
        onChange={(e) => setEmail(e.target.value)}
        aria-describedby="email-error"
      />
      <button
        type="submit"
        className="py-3 px-4 text-secondary text-white rounded-r-lg bg-red-400 hover:bg-red-500"
      >
        Subscribe
      </button>
      {error && (
        <div className="flex flex-row" id="email-error" aria-live='polite' aria-atomic='true'>
          <ExclamationCircleIcon />
          <p className="mt-2 text-red-500 font-secondary">
          {error}
          </p>
        </div>
      )}
    </form>
  );
}
