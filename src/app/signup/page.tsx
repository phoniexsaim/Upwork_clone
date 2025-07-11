
"use client";
import Image from "next/image";
import { Briefcase, User } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [userType, setUserType] = useState<"youtuber" | "buisness" | null>(null);
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false)
    
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0)
      }
  
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  

  const getButtonLabel = () => {
    if (userType === "youtuber") return "Apply as a Buisness";
    if (userType === "buisness") return "Join as a Youtuber";
    return "Create Account";
  };

    const handleButtonClick = () => {
      if (userType === "youtuber") {
        router.push("/signup/youtubersignup");
      } else if (userType === "buisness") {
        router.push("/signup/bussinessignup"); 
      } else {
        router.push("/Signup"); 
      }
    };
    
  return (
<>
     <div
            className={`w-full p-[16px] fixed bg-white z-10 transition-all ${
              isScrolled ? 'border-b border-b-[#d9d9d9]' : ''
            }`}
          >
            <Image src="/images.png" alt="Upwork Logo" width={80} height={20} />
          </div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">

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
            I am a buisness, hiring for a project
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
            I am a Youtuber, looking for work
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
        <a href="/login" className="text-[#108a00] underline hover:text-[#108a00]">
          Log In
        </a>
      </p>
    </div>
</>
  );
}
