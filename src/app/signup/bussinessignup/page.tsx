"use client";

import Image from "next/image";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import Link from "next/link";

export default function BuisnessSignupForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white pb-8">
      
      <div className="w-full flex justify-between items-center px-10 py-6">
        <div>
          <Link href="/home">
          <Image src="/images.png" alt="Upwork Logo" width={80} height={20} />
          </Link>
        </div>
        <div className="text-sm text-black space-x-1">
          <span className="mr-8 text-[16px]">Looking for work?</span>
          <a href="/signup/youtubersignup" className="text-[#108a00]  hover:underline text-[16px] hover:text-black">Apply as a buisness</a>
        </div>
      </div>

      <div className="flex items-center justify-center px-4">
        <div className="w-full mt-6 max-w-md space-y-6">

          <h1 className="text-4xl font-[500] text-center text-black">Sign up to find work you love</h1>

          <div className="flex flex-col space-y-2">
            <button className="border px-4 py-2 cursor-pointer rounded flex items-center justify-center gap-2 text-sm text-black">
              <FaApple className="h-4 w-4" />
              <span>Continue with Apple</span>
            </button>

            <button className="border px-4 py-2 cursor-pointer rounded flex items-center justify-center gap-2 text-sm text-black">
              <FcGoogle className="h-4 w-4" />
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 bg-white">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form className="space-y-4 text-black">
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block mb-1 text-sm font-medium">First Name</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
              </div>
              <div className="w-1/2">
                <label className="block mb-1 text-sm font-medium">Last Name</label>
                <input type="text" className="w-full border rounded px-3 py-2" />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (8 or more characters)"
                  className="w-full border rounded px-3 py-2 pr-10"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Country</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Pakistan</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-[#108a00] cursor-pointer" />
              <span className="text-sm">
                Send me emails with tips on how to find talent that fits my needs.
              </span>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="accent-[#108a00] mt-1 cursor-pointer" />
              <span className="text-sm">
                Yes, I understand and agree to the
                <a href="#" className="text-[#108a00] underline"> Upwork Terms of Service</a>,
                including the <a href="#" className="text-[#108a00] underline">User Agreement</a> and
                <a href="#" className="text-[#108a00] underline"> Privacy Policy</a>.
              </span>
            </div>

            <button type="submit" className="w-full bg-[#108a00] cursor-pointer text-white py-2 rounded font-medium">
              Create my account
            </button>
          </form>

          <p className="text-center text-sm text-black">
            Already have an account? <a href="/login" className="text-[#108a00] underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
}
