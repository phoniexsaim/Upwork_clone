 "use client";

import Link from "next/link";

export default function EnterpriseContactFooter() {
    return(
        <>
      <div className="flex flex-col sm:flex-row sm:justify-between text-[14px] py-8 px-4 sm:px-10 font-sans text-[#d9d9d9] gap-4 sm:gap-0">
  {/* Left Side */}
  <div>
    <p>2025© 2015 - Upwork® Global Inc.</p>
  </div>

  {/* Right Side */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
    <p className="hover:text-[#14a800] transition-all cursor-pointer">
      <Link href="/">Privacy Policy</Link>
    </p>
    <p className="hover:text-[#14a800] transition-all cursor-pointer">
      <Link href="/">Terms of Service</Link>
    </p>
    <p className="hover:text-[#14a800] transition-all cursor-pointer">
      <Link href="/">Cookie Settings</Link>
    </p>
  </div>
</div>

        </>
    )
}