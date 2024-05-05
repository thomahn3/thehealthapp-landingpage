'use client';

import Subscribe from "./subscribe";
import { useState } from "react";

export default function UpdateUI() {
    const [subscribe, setSubscribe] = useState(true)

    return (
     <>
        {subscribe ? ( // determining the boolean of the variable and outputing the html based on the queary - true first then flase
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
        <Subscribe setSubscribe={setSubscribe} />
      </div>
      )}
     </>
    );
}