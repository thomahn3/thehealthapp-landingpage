'use client';

import { useState } from "react";



export default function Subscribe() {
    const [email, setEmail] = useState('')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement> ) {
        e.preventDefault()
        try {
            const response = await fetch('/api/update-notion', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (!response.ok) {
                throw new Error('Failed to subscribe'); // Handle non-200 status codes
            }
            // If successful, reset the email input
            setEmail('');
        } catch (error) {
            console.error('Error:', error);
            // Handle errors here, such as displaying an error message to the user
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
            />
            <button
            type="submit"
            className="py-3 px-4 text-secondary text-white rounded-r-lg bg-red-400 hover:bg-red-500"

            >
                Subscribe
            </button>
        </form>
    );
}