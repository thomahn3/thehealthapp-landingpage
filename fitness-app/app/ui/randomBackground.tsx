'use client';

import React from "react";

export default function BackgroundImage() {

const strings = [
  'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1440968872456-dec3196b9bee?q=80&w=2933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

  const [randomString, setRandomString] = React.useState<string>('');

  React.useEffect(() => {
    const getRandomString = () => {
      const randomIndex = Math.floor(Math.random() * strings.length);
      return strings[randomIndex];
    };
    setRandomString(getRandomString());
  }, [strings]);


  return (
    <img src={randomString} className="absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50" alt='Random fitness related image'/>
    );
}
  

  
