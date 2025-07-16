import Link from "next/link";
import { FaApple, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

export default function Footer() {
    return (
      <footer className="max-w-[1350px] bg-black text-white md:rounded-lg md:mb-8 mb-4 sm:rounded-none font-sans mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-4">For Youtubers</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">How to hire</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Talent Marketplace</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Project Catalog</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Hire an agency</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Enterprise</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Business Plus</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Any Hire</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Contract-to-hire</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Direct Contracts</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Hire worldwide</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Hire in the USA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-4">For Talent</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">How to find work</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Direct Contracts</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Find business worldwide</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Find business in the USA</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Win work with ads</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Exclusive resources with business Plus</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-4">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Help & support</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Success stories</Link></li>
              <li className="hover:underline mb-2 text-[14px]"><Link href="#">Upwork reviews</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Resources</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Blog</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Affiliate programme</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Free Business Tools</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Release notes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-4">Company</h4>
            <ul className="space-y-1 text-sm ">
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">About us</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Leadership</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Investor relations</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Careers</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Our impact</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Press</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="/Enterprise/ContactEnterprise">Contact us</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Partners</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Trust, safety & security</Link></li>
              <li className="hover:underline mb-3 text-[14px]"><Link href="#">Modern slavery statement</Link></li>
            </ul>
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pt-6">
          <div className="flex items-center text-[14px] gap-6 text-sm text-[#A5A5A5]">Follow us
            <div className="flex items-center gap-7 text-white text-lg">
            <FaFacebook className="w-[24px] h-[24px]"/>
            <FaLinkedin className="w-[24px] h-[24px]"/>
            <FaXTwitter className="w-[24px] h-[24px]"/>
            <FaYoutube className="w-[24px] h-[24px]"/>
            <FaInstagram className="w-[24px] h-[24px]"/>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0 text-sm">
            <span className="text-[#A5A5A5]">Mobile app</span>
            <FaApple className="w-[24px] h-[24px]"/>
            <IoLogoAndroid className="w-[24px] h-[24px]"/>
          </div>
        </div>
  
        <div className="mt-6 border-t border-[#333] pt-5 flex flex-col md:flex-row items-center text-sm text-[#A5A5A5]">
          <p className="mb-3 md:mb-0">© 2015 - 2025 Upwork® Global Inc.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-white ml-[30px]">
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">CA Notice at Collection</Link>
            <Link href="#" className="hover:underline">Cookie Settings</Link>
            <Link href="#" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </footer>
    );
  }