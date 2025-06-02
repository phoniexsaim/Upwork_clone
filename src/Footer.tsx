import { FaApple, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

export default function Footer() {
    return (
      <footer className="bg-[#1a1a1a] text-white mx-[24px] mb-[24px] py-[64px] px-[80px] rounded-[8px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-3">For Clients</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline"><a href="#">How to hire</a></li>
              <li className="hover:underline"><a href="#">Talent Marketplace</a></li>
              <li className="hover:underline"><a href="#">Project Catalog</a></li>
              <li className="hover:underline"><a href="#">Hire an agency</a></li>
              <li className="hover:underline"><a href="#">Enterprise</a></li>
              <li className="hover:underline"><a href="#">Business Plus</a></li>
              <li className="hover:underline"><a href="#">Any Hire</a></li>
              <li className="hover:underline"><a href="#">Contract-to-hire</a></li>
              <li className="hover:underline"><a href="#">Direct Contracts</a></li>
              <li className="hover:underline"><a href="#">Hire worldwide</a></li>
              <li className="hover:underline"><a href="#">Hire in the USA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-3">For Talent</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline"><a href="#">How to find work</a></li>
              <li className="hover:underline"><a href="#">Direct Contracts</a></li>
              <li className="hover:underline"><a href="#">Find freelance jobs worldwide</a></li>
              <li className="hover:underline"><a href="#">Find freelance jobs in the USA</a></li>
              <li className="hover:underline"><a href="#">Win work with ads</a></li>
              <li className="hover:underline"><a href="#">Exclusive resources with Freelancer Plus</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-3">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:underline"><a href="#">Help & support</a></li>
              <li className="hover:underline"><a href="#">Success stories</a></li>
              <li className="hover:underline"><a href="#">Upwork reviews</a></li>
              <li className="hover:underline"><a href="#">Resources</a></li>
              <li className="hover:underline"><a href="#">Blog</a></li>
              <li className="hover:underline"><a href="#">Affiliate programme</a></li>
              <li className="hover:underline"><a href="#">Free Business Tools</a></li>
              <li className="hover:underline"><a href="#">Release notes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-[#A5A5A5] mb-3">Company</h4>
            <ul className="space-y-1 text-sm ">
              <li className="hover:underline"><a href="#">About us</a></li>
              <li className="hover:underline"><a href="#">Leadership</a></li>
              <li className="hover:underline"><a href="#">Investor relations</a></li>
              <li className="hover:underline"><a href="#">Careers</a></li>
              <li className="hover:underline"><a href="#">Our impact</a></li>
              <li className="hover:underline"><a href="#">Press</a></li>
              <li className="hover:underline"><a href="#">Contact us</a></li>
              <li className="hover:underline"><a href="#">Partners</a></li>
              <li className="hover:underline"><a href="#">Trust, safety & security</a></li>
              <li className="hover:underline"><a href="#">Modern slavery statement</a></li>
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
  
        <div className="mt-6 border-t border-[#333] pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-[#A5A5A5]">
          <p className="mb-3 md:mb-0">© 2015 - 2025 Upwork® Global Inc.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-white">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">CA Notice at Collection</a>
            <a href="#" className="hover:underline">Cookie Settings</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>
      </footer>
    );
  }