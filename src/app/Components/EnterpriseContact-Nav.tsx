"use client";
import Link from "next/link";

export default function EnterpriseContactNav() {
    return(
<>
<div className="font-sans text-white flex justify-between items-center text-[14px] sm:text-[16px] py-6 px-4 sm:px-10">
 <Link href="/home">
  <div className="w-[120px] sm:w-auto">  
    <img
      src="/Images/ContactLogo.svg"
      alt="Logo"
      className="h-6 sm:h-auto w-auto object-contain"
    />
  </div>
  </Link>
  <div className="text-right">
    <label>
      Job seeker?{" "}
      <span className="text-[#95df02] underline hover:text-[#14a800] transition-all cursor-pointer">
        <Link href="/signup/youtubersignup">Join as a youtuber</Link>
      </span>
    </label>
  </div>
</div>
</>
    )
}