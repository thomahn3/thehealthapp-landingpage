import Image from "next/image";
import Logo from "./ui/logo";

export default function Home() {
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
    <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center">
   
      <div className="space-y-8">
        <h1 className="text-white">
         
        </h1>
      </div>
    </div>
    </div>
  );
}
