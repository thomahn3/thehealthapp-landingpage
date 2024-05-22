import Logo from "./ui/logo";
import Image from "next/image";
import xlogo from '@/public/xlogo.svg'
import redditlogo from '@/public/redditlogo.svg'
import BackgroundImage from "./ui/randomBackground";
import UpdateUI from "./ui/updateUI";
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "The Health App | Landing Page",
  description:
    'A health app to track all of your personal fitness needs from claorie intake to moods throughout your day.',
  keywords: [
    'health',
    'app',
    'startup',
    'fitness',
    'wellbeing',
  ],
  openGraph: {
    url: "https://thehealthapp.vercel.app/",
    type: "website",
    title: "The Health App | Landing Page",
    description:
      "A health app to track all of your personal fitness needs from claorie intake to moods throughout your day.",
    images: [
      {
        url: "https://thehealthapp.vercel.app/landing-page.png",
        width: 450,
        height: 800,
        alt: "Dashboard Interface on Mobile App"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Health App | Landing Page",
    description:
      "A health app to track all of your personal fitness needs from claorie intake to moods throughout your day.",
    creator: "@thomahn3",
    site: "@thomahn3",
    images: [
      {
        url: "https://thehealthapp.vercel.app/landing-page.png",
        width: 450,
        height: 800,
        alt: "Dashboard Interface on Mobile App"
      }
    ]
  },
  alternates: {
    canonical: "https://thehealthapp.vercel.app/"
  }
};

export default function Home() {

  return (
   <div className='bg-gradient-to-tr from-sky-400 to-purple-600 relative h-screen w-screen'>
    <BackgroundImage />
    
    <div className="absolute flex justify-center items-center w-screen py-4">
      <Logo />
    </div>
    <div className="absolute inset-0 flex flex-col justify-center items-center w-5/6 max-w-lg mx-auto text-center space-y-8">
      <UpdateUI />
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
