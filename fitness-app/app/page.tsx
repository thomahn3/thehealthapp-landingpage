'use client';

import Logo from "./ui/logo";
import Subscribe from "./ui/subscribe";
import { useState } from "react";
import Image from "next/image";
import xlogo from '@/public/xlogo.svg'
import redditlogo from '@/public/redditlogo.svg'
import BackgroundImage from "./ui/random-background";

export default function Home() {
  const [subscribed, setSubscribed] = useState(false)

  return (
   <div className='bg-gradient-to-tr from-sky-400 to-purple-600 relative h-screen w-screen'>
    <BackgroundImage />
    
    <div className="absolute flex justify-center items-center w-screen py-4">
      <Logo />
    </div>
    
    <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center space-y-8">
      {subscribed ? ( // determining the boolean of the variable and outputing the html based on the queary - true first then flase
        <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-snug">
         Thank you for subscribing to the future of <span className="text-red-400">health.</span>
      </h1>
      ) : (
      <div className="space-y-8">
        <h1 className="font-primary font-extrabold text-white text-3xl sm:text-4xl md:text-5xl md:leading-tight">
         Your <span className="text-red-400">health</span> in one place.
        </h1>
        <p className="text-white font-secondary font-bold">
          Never use more than one app ever again. 
        </p>
        <Subscribe setSubscribed={setSubscribed} />
      </div>
      )}
      <div className="flex flex-col space-y-2">
        <h1 className="text-white font-primary font-extrabold sm:text-xl md:text-2xl ">
          Want to Read more?
        </h1>
        <div className="flex flex-row justify-center space-x-8">
          <a href="https://twitter.com/thomahn3">
            <Image
            src={xlogo}
            alt='X (Twitter) Logo'
            width={32}
            />
          </a>
          <a href="">
            <Image
              src={redditlogo}
              alt="Reddit Logo"
              width={32}
            />
          </a>
        </div>
      </div>

    </div>
    
    </div>
  );
}
