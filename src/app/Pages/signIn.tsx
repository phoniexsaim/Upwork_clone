"use client";

import Image from "next/image";
import { Briefcase, User } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SigIn() {
  const [userType, setUserType] = useState<"youtuber" | "buisness" | null>(null);
  const router = useRouter();

  const getButtonLabel = () => {
    if (userType === "youtuber") return "Join as a Youtuber";
    if (userType === "buisness") return "Apply as a Buisness";
    return "Create Account";
  };

  const handleButtonClick = () => {
    if (userType === "youtuber") {
      router.push("/ClientSignup.tsx"); 
    } else if (userType === "buisness") {
      router.push("/BuisnessSignupForm.tsx");
    } else {
      router.push("/signIn.tsx");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="absolute top-6 left-6">
        <Image src="/images.png" alt="Upwork Logo" width={80} height={20} />
      </div>

      <h1 className="text-2xl md:text-4xl font-[500] text-black mb-10 text-center">
        Join as a Youtuber or Buisness
      </h1>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <label
          className={`border-2 rounded-md p-6 w-72 cursor-pointer flex flex-col gap-4 transition ${
            userType === "youtuber" ? "border-black" : "border-gray-300 hover:border-black"
          }`}
        >
          <div className="flex justify-between items-center w-full">
            <User className="w-6 h-6 text-gray-600" />
            <input
              type="radio"
              name="userType"
              checked={userType === "youtuber"}
              onChange={() => setUserType("youtuber")}
              className="accent-[#108a00] h-6 w-6 cursor-pointer"
            />
          </div>
          <p className="text-2xl font-[500] text-black">
            I am a client, hiring for a project
          </p>
        </label>

        <label
          className={`border-2 rounded-md p-6 w-72 cursor-pointer flex flex-col gap-4 transition ${
            userType === "buisness" ? "border-black" : "border-gray-300 hover:border-black"
          }`}
        >
          <div className="flex justify-between items-center w-full">
            <Briefcase className="w-6 h-6 text-gray-600" />
            <input
              type="radio"
              name="userType"
              checked={userType === "buisness"}
              onChange={() => setUserType("buisness")}
              className="accent-[#108a00] h-6 w-6 cursor-pointer"
            />
          </div>
          <p className="text-2xl font-[500] text-black">
            I am a freelancer, looking for work
          </p>
        </label>
      </div>

      <button
        onClick={handleButtonClick}
        className="bg-[#108a00] cursor-pointer text-white font-medium py-2 px-6 rounded-md transition hover:bg-[#0d7a00]"
      >
        {getButtonLabel()}
      </button>

      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <a href="#" className="text-[#108a00] underline hover:text-[#108a00]">
          Log In
        </a>
      </p>
    </div>
  );
}
