
"use client"
import Link from 'next/link';
import { FaApple, FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Head from 'next/head';
import { LuUserRound } from 'react-icons/lu';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Login() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>
      <Head>
        <style>
          {`
            :root {
              --font-family-base: 'Neue Montreal', sans-serif;
            }
          `}
        </style>
      </Head>
      <div
      className={`w-full p-[16px] fixed bg-white z-10 transition-all ${
        isScrolled ? 'border-b border-b-[#d9d9d9]' : ''
      }`}
    >
      <Link href="/home">
      <Image src="/images.png" alt="Upwork Logo" width={80} height={20} />
      </Link>
    </div>

      <div
        className="pt-[5rem] flex flex-col items-center justify-between bg-white"
        style={{
          fontFamily:
            'var(--font-family-base), "neue-montreal-fallback", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        <main className="flex flex-1 items-center justify-center">
          <div className="border border-gray-200 rounded-[8px] shadow-sm p-10 w-[510px] h-[637px] flex flex-col items-center gap-4">
            <h1 className="text-[28px] font-medium text-center mb-2 text-black">Log in to Upwork</h1>

            <div className="relative w-[350px] ">
              <LuUserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black text-lg" />
              <input
                type="text"
                placeholder="Username or Email"
                className="w-[350px] pl-12 mx-auto py-2 border rounded-[8px] text-gray-900 focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <button className="w-[350px] mx-auto bg-green-700 text-white py-2 rounded-[8px] font-normal hover:bg-green-600 cursor-pointer">
              Continue
            </button>

            <div className="flex items-center gap-2 my-2 w-[350px]">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-gray-500 text-sm">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <button className="w-[350px] mx-auto bg-[#4285F4] text-white flex items-center justify-between pl-1 pr-6 rounded-[8px] mb-[6px] cursor-pointer">
              <FcGoogle className="w-8 h-8  bg-white rounded-[5px] p-[6px] "/>
              <span className="text-sm font-medium mx-auto py-2.5">Continue with Google</span>
            </button>

            <button className="w-[350px] mx-auto border border-black text-black flex items-center justify-center py-2 pl-4 pr-6 rounded-[8px] hover:bg-gray-100 cursor-pointer">
              <FaApple className="w-4 h-4 mr-4" />
              <span className="text-sm font-medium">Continue with Apple</span>
            </button>

            <div className="flex items-center justify-center text-sm text-gray-500 mt-auto mb-2">
              <hr className="w-10 border-gray-300" />
              <span className="px-2">Don't have an Upwork account?</span>
              <hr className="w-10 border-gray-300" />
            </div>

            <Link href="/signup">
              <button className="border border-green-600 text-green-600 py-2 rounded-[10px] hover:bg-green-50 w-[200px] mx-auto cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>
        </main>

        <div className="w-[80%] bg-black text-white text-center px-6 py-[50px] rounded-[10px] mt-[20px] mb-[24px] mx-auto max-w-screen-xl">
            <p className="text-[14px]">
                © 2015 - 2025 Upwork® Global Inc. ·{' '}
                <Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Privacy Policy</Link> ·{' '}
                <Link href="#" className="hover:text-gray-300 text-[14px] font-normal">Cookie Settings</Link>
            </p>
            </div>
      </div>
    </>
  );
}
