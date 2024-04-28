'use client';

import Logo from "./ui/logo";
import Subscribe from "./ui/subscribe";
import { useState } from "react";

export default function Home() {
  const [subscribed, setSubscribed] = useState(false)

  return (
   <div className='bg-gradient-to-tr from-sky-400 to-purple-600 relative h-screen w-screen'>
    <img 
    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-[.30]"
    src="https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    alt="Gym room with benches, weights and various equaipment" 
    />
    
    <div className="absolute flex justify-center items-center w-screen py-4">
      <Logo />
    </div>
    
    # Div to center elemnts on the webpage
    <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
      {subscribed ? ( // determining the boolean of the variable and outputing the html based on the queary - true first then flase
        <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
         Thank you for subscribing to the future of <span className="text-red-400">health.</span>
      </h1>
      ) : (
      <div className="space-y-8">
        <h1 className="font-primary font-extrabold text-white sm:text-4xl md:text-5xl md:leading-tight">
         Your <span className="text-red-400">health</span> in one place.
        </h1>
        <p className="text-white font-secondary font-bold">
          Never use more than one app ever again. 
        </p>
        <Subscribe setSubscribed={setSubscribed} />
      </div>
      )}
      <div className="space-y-8">
        <h1 className="text-white">
          Want to Read more?
        </h1>
      </div>

    </div>
    
    </div>
  );
}
