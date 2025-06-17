'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FiChevronDown, FiUsers, FiBriefcase, FiFileText, FiArrowLeft, FiX, FiChevronLeft } from 'react-icons/fi';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaAngleLeft, FaBars, FaSearch, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isEnterpriseClicked, setIsEnterpriseClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Talent');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedTab, setSelectedTab] = useState('Talent');

  const tabs = ['Talent', 'Projects', 'Jobs'];
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menusOpen, setMenusOpen] = useState(false);

  const toggleMenusOpen = () => {
    setMenusOpen(prev => !prev);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMobileMenuOpen(false);
  };

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setActiveMainMenu(null);
    setActiveSubMenu(null);
    setShowFullscreen(false);
  };

  const handleSubMenuHover = (menu:any) => {
    setActiveSubMenu(menu);
  };




  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMainMenuHover = (menu: string) => {
    setActiveMainMenu(menu);
    setActiveSubMenu(null);
  };

  const handleEnterpriseClick = () => {
    setIsEnterpriseClicked(true);
  };

  return (
    <>
      <nav className={`bg-white fixed w-full z-50 ${isScrolled ? '' : ''}`}>
        <div className="md:mx-[1rem] px-4">
          <div className="flex items-center justify-between h-16">
          
            <div className="flex just items-center gap-[9px]">

              <Link href="/home" className="flex items-center">
              <img src="/Images/UpWorkNavbarLogo.png" alt="UpworkLogo" className='w-[95px] h-[95px] md:flex hidden' />
              </Link>
           

            {/* Desktop Menu */}
            <div className="hidden md:flex ml-10 space-x-6">
              {/* Find Talent */}
              <div 
          className="relative"
          onMouseEnter={() => {
            handleMainMenuHover('talent');

            if (activeMainMenu !== 'talent') {
              handleSubMenuHover('marketplace');
            }
          }}
          onMouseLeave={() => setActiveMainMenu(null)}
        >
          <button className="group flex font-[500] text-[14px] items-center text-[#181818] hover:text-[#14a800]">
            Find Talent
            <svg
              className={`ml-1 h-3 w-3 transition-transform duration-500 ${
                activeMainMenu === 'talent' ? 'rotate-180 text-black' : 'rotate-0 text-black'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
                  
          {activeMainMenu === 'talent' && (
            <div className="fixed left-0 right-0 mt-5 bg-white border-t border-gray-200 shadow-md z-10 p-6 animate-fade">
              <div className="mx-auto">
                <div className="flex flex-row gap-20 px-[20px] pb-[20px]">

                  <div className="space-y-6 my-[30px]">
                  <div 
                      className="group"
                      onClick={() => handleSubMenuHover('marketplace')}
                      onMouseEnter={() => handleSubMenuHover('marketplace')}  
                    >
                      <div className={`${activeSubMenu === 'marketplace' ? 'bg-[#f5f5f5]' : 'bg-white'} hover:bg-[#f5f5f5] px-6 py-8 rounded-lg w-[320px] h-[60px] flex justify-between items-center transition-colors duration-200`}>
                        <div>
                          <h3 className="font-normal text-sm text-[#181818]">Post a job and hire a pro</h3>
                          <p className="text-xs md:text-[#14a800] leading-8">Talent Marketplace</p>
                        </div>
                        <MdKeyboardArrowRight className='text-[#14a800] text-xl' />
                      </div>
                    </div>
                    
                    <div 
                      className="group"
                      onClick={() => handleSubMenuHover('catalog')}
                      onMouseEnter={() => handleSubMenuHover('catalog')}
                    >
                      <div className={`${activeSubMenu === 'catalog' ? 'bg-[#341f1f]' : 'bg-white'} hover:bg-[#f5f5f5] px-6 py-8 rounded-lg w-[320px] h-[60px] flex justify-between items-center transition-colors duration-200`}>
                        <div>
                          <h3 className="font-normal text-sm text-[#181818]">Browse and buy projects</h3>
                          <p className="text-xs text-[#14a800] leading-8">Project Catalog</p>
                        </div>
                        <MdKeyboardArrowRight className='text-[#14a800] text-xl' />
                      </div>
                    </div>
                    
                        <div 
                          className="group"
                          onClick={() => handleSubMenuHover('consultations')}
                          onMouseEnter={() => handleSubMenuHover('consultations')}
                        >
                          <div className={`${activeSubMenu === 'consultations' ? 'bg-[#f5f5f5]' : 'bg-white'} hover:bg-[#f5f5f5] px-6 py-8 rounded-lg w-[320px] h-[60px] flex justify-between items-center transition-colors duration-200`}>
                            <div>
                              <h3 className="font-normal text-sm text-[#181818]">Get advice from an industry expert</h3>
                              <p className="text-xs text-[#14a800] leading-8">Consultations</p>
                            </div>
                            <MdKeyboardArrowRight className='text-[#14a800] text-xl' />
                          </div>
                        </div>
                      </div>
                      <div className='bg-[#676767] w-[1px] h-[400px] mt-[2px]'></div>
          
                          <div className="">
                            {activeSubMenu === 'marketplace' && (
                              <div className='flex justify-between flex-row'>
                                <div>
                                  <div className='bg-[#14a800] w-[50px] h-[3px] mb-[23px]'></div>
                                  <h3 className="text-[16px] font-normal mb-[10px] text-[#181818]">Talent Marketplace™</h3>
                                  <p className="text-[13px] text-[#181818] leading-[21px] mb-[10px]">Learn about working with talent or explore your specific <br /> hiring needs.</p>
                                  <Link href="#" className="text-[#14a800] font-normal mb-b underline text-[13px] leading-[21px] flex items-center">Hire on Talent Marketplace <HiOutlineArrowRight className='ml-[1rem] mt-[3px] text-[16px]'/></Link>
                                </div>
                                <div className='ml-[163px]'>
                                  <ul className="mt-[43px]">
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Development & IT</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Design & Creative</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Sales & Marketing</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Writing & Translation</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Admin & Customer Support</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Finance & Accounting</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">HR & Training</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Legal</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Engineering & Architecture</Link></li>
                                    <li className='py-[6px] pl-[10px] pr-[30px] rounded-[8px] hover:bg-[#c3c3c3]'><Link href="#" className="text-[14px] text-[#181818]">Hire freelancers</Link></li>
                                  </ul>
                                </div>
                              </div>
                            )}
                            
                            {activeSubMenu === 'catalog' && (
                              <div className='flex flex-row gap-18'>
                                <div className='flex-col flex'>
                                <div className='bg-[#14a800] w-[50px] h-[3px] mb-[23px]'></div>
                                <h3 className="text-[16px]  font-normal mb-[10px] text-[#181818]">Project Catalog™</h3>
                                <p className="text-[13px] text-[#181818] leading-[21px] mb-[10px]">Browse and buy projects that <br/>have a clear scope and price.</p>
                                <Link href="#" className="text-[#14a800] font-normal mb-b underline text-[13px] leading-[21px] flex justify-center">Browse Project Catalog<HiOutlineArrowRight className='ml-[1rem] mt-[3px] text-[16px]'/></Link>
                                </div>
                                
                                <div className="flex flex-col gap-4 pt-[60px]">
                                  <div className='text-[#181818] flex flex-row gap-8'>
                                    <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                                      <img src="/Images/Logo-Design.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                                      <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Logo Design</Link></h4>
                                    </div>

                                    <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                                      <img src="/Images/Articles-Catalog.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                                      <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Articles & Blog Posts</Link></h4>
                                    </div>

                                    <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                                    <img src="/Images/Wordpress-Catalog.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                                    <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">WordPress</Link></h4>
                                    </div>
                                  </div>

                            <div className='flex flex-row text-[#181818] gap-8'>
                              <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                                <img src="/Images/Social-Media-Catalog.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                                <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Social Media <br/> Management</Link></h4>
                              </div>

                              <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                                <img src="/Images/Video-Editing-Catalog.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                                <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Video Editing</Link></h4>
                              </div>

                              <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                                <img src="/Images/SEO-Catalog.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                                <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">SEO</Link></h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeSubMenu === 'consultations' && (
                        <div className='flex flex-row gap-18'>
                          <div className='flex flex-col'>
                          <div className='bg-[#14a800] w-[50px] h-[3px] mb-[23px]'></div>
                          <h3 className="text-[16px]  font-normal mb-[10px] text-[#181818]">Consultations™</h3>
                          <p className="text-[13px] text-[#181818] leading-[21px] mb-[10px]">Explore what is possible with an industry expert. See their availability and book a time that works for you.</p>
                          <Link href="#" className="text-[#14a800] font-normal underline text-[13px] leading-[21px] flex">Explore all categories <HiOutlineArrowRight className='ml-[1rem] mt-[3px] text-[16px]'/></Link>
                          </div>
                          
                          <div className="flex flex-col gap-4 pt-[60px] pr-[12.5rem]">
                            <div className='text-[#181818] flex flex-row gap-8'>
                              
                            <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                              <img src="/Images/web-programming.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                              <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Web Programming</Link></h4>
                            </div>

                            <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                              <img src="/Images/AI-&-Machine.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                              <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">AI & Machine Learning</Link></h4>
                            </div>

                            <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                              <img src="/Images/Marketing-Strategy.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                              <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Marketing Strategy</Link></h4>
                            </div>
                            </div>

                            <div className='text-[#181818] flex flex-row gap-8'>
                            <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                              <img src="/Images/Social-Media-Marketing.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                              <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Social Media Marketing</Link></h4>
                            </div>

                              <div className='flex justify-center items-center flex-col border rounded-[8px] w-[168px] h-auto hover:bg-[#c3c3c3]'>
                                <img src="/Images/Website-Builders-&-CMS.jpg" alt="LogoDesign" className='w-[100%] bg-cover h-[105px] rounded-tr-[8px] rounded-tl-[8px]'/>
                                <h4 className="font-normal text-[14px] text-[#181818] h-[65px] flex justify-center items-center"><Link href="#">Website Builders & CMS</Link></h4>
                              </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

              {/* Find Work */}
              <div 
                onMouseEnter={() => handleMainMenuHover('work')}
                onMouseLeave={() => setActiveMainMenu(null)}
                className="relative"
              >
                <button className="group flex text-[14px] items-center text-[#181818] hover:text-[#14a800]">
                  Find Work
                  <svg
                    className={`ml-1 h-3 w-3 transition-transform duration-500 ${
                      activeMainMenu === 'work' ? 'rotate-180 text-black' : 'rotate-0 text-black'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                              
                {activeMainMenu === 'work' && (
                  <div className='fixed left-0 right-0 mt-5 bg-white border-t border-gray-200 shadow-md z-10 p-6'>
                    <div className="mx-auto">
                      <div className="flex flex-row gap-10 p-[30px]">
                        <div className="w-[280px] h-[80px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h3 className="font-normal text-[14px] text-gray-800 mb-[8px]">Ways to earn</h3>
                          <p className="mb-6 text-gray-600 text-[12px]">Learn why Upwork has the right opportunities<br/> for you.</p>
                        </div>
                        <div className="w-[280px] h-[70px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="#">Find work for your skills</Link></h4>
                          <p className="text-gray-600 text-[12px]">Explore the kind of work available in your field.</p>
                        </div>
                        
                        <div className="w-[280px] h-[70px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="#">Win work with ads</Link></h4>
                          <p className="text-gray-600 text-[12px]">Get noticed by the right client.</p>
                        </div>
                        
                        <div className="w-[280px] h-[80px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="#">Join freelancer Plus</Link></h4>
                          <p className="text-gray-600 text-[12px]">Access more Connects, get strategic insights<br/> on competitors, and try out the latest tools.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Why Upwork */}
              <div 
                className="relative group"
                onMouseEnter={() => handleMainMenuHover('why')}
                onMouseLeave={() => setActiveMainMenu(null)}
              >
                <button className="flex text-[14px] items-center text-[#181818] hover:text-[#14a800]">
                  Why Upwork
                  <svg
                    className={`ml-1 h-3 w-3 transition-transform duration-500 ${
                      activeMainMenu === 'why' ? 'rotate-180 text-black' : 'rotate-0 text-black'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeMainMenu === 'why' && (
                  <div className="fixed left-0 right-0 mt-5 bg-white border-t border-gray-200 shadow-md z-10 p-6">
                    <div className="grid grid-cols-2 gap-8 p-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="group order-1 rounded-[8px] w-[250px] p-[10px] h-[100px] hover:bg-[#c3c3c3]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]">
                            <Link href="#">Success stories</Link>
                          </h4>
                          <p className="text-gray-600 text-[13px]">Discover how teams work strategically <br/> and grow together.</p>
                          {/* <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-green-600 transition-all duration-300"></div> */}
                        </div>

                        <div className="group order-2 rounded-[8px] w-[250px] p-[10px] h-[100px] hover:bg-[#c3c3c3]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]">
                            <Link href="#">Reviews</Link>
                          </h4>
                          <p className="text-gray-600 text-[13px]">See what it's like to collaborate on <br/> Upwork.</p>
                          {/* <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-green-600 transition-all duration-300"></div> */}
                        </div>

                        <div className="group order-3 rounded-[8px] w-[250px] p-[10px] h-[100px] hover:bg-[#c3c3c3] mb-[4rem]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]">
                            <Link href="#">How to hire</Link>
                          </h4>
                          <p className="text-gray-600 text-[13px]">Learn about the different ways to get <br/> work done.</p>
                          {/* <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-green-600 transition-all duration-300"></div> */}
                        </div>

                        <div className="group order-4 rounded-[8px] w-[250px] p-[10px] h-[100px] hover:bg-[#c3c3c3]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]">
                            <Link href="#">How to find work</Link>
                          </h4>
                          <p className="text-gray-600 text-[13px]">Learn about how to grow your <br/> independent career.</p>
                          {/* <div className="mt-1 h-0.5 w-0 group-hover:w-full bg-green-600 transition-all duration-300"></div> */}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-normal text-gray-800 mb-4 text-[14px]">Where work gets done</h4>
                        <ul className="space-y-4">
                          <li className='border border-[#c3c3c3] p-[8px] rounded-[8px] w-[300px] hover:bg-[#c3c3c3]'>
                            <span className="text-[13px] text-gray-600">Guides</span>
                            <p className='text-gray-800 text-[14px]'><Link href="#">Getting Started as a Freelancer</Link></p>
                          </li>
                          <li className='border border-[#c3c3c3] p-[8px] rounded-[8px] w-[300px] hover:bg-[#c3c3c3]'>
                            <span className="text-[13px] text-gray-600">Guides</span>
                            <p className='text-gray-800 text-[14px]'><Link href="#">Growing Your Freelance Career</Link></p>
                          </li>
                          <li className='border border-[#c3c3c3] p-[8px] rounded-[8px] w-[300px] hover:bg-[#c3c3c3] mb-[1rem]'>
                            <span className="text-[13px] text-gray-600">Guides</span>
                            <p className='text-gray-800 text-[14px]'><Link href="#">Hiring & Working with Independent Talent</Link></p>
                          </li>
                        </ul>
                        <Link href="#" className=" text-green-600 font-normal text-[13px] underline">See Resources →</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* What's New */}
              {!isEnterpriseClicked && (
               <div 
               className="relative group"
               onMouseEnter={() => handleMainMenuHover('whatsNew')}
               onMouseLeave={() => setActiveMainMenu(null)}
             >
               <button className="flex items-center text-[#181818] hover:text-[#14a800] text-[14px]">
                 What's new
                 <svg
                   className={`ml-1 h-3 w-3 transition-transform duration-500 ${
                     activeMainMenu === 'whatsNew' ? 'rotate-180 text-black' : 'rotate-0 text-black'
                   }`}
                   fill="none"
                   stroke="currentColor"
                   viewBox="0 0 24 24"
                   strokeWidth="2"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                 >
                   <path d="M19 9l-7 7-7-7" />
                 </svg>
               </button>
             
                  {activeMainMenu === 'whatsNew' && (
                    <div className="fixed left-0 right-0 mt-5 bg-white border-t border-gray-200 shadow-md z-10 p-6">
                      <div className="flex flex-row gap-20 p-[35px]">
                        <div className="w-[250px] h-[90px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="/">Upwork Updates</Link></h4>
                          <p className="text-gray-600 text-[12px]">Check out our latest products, partners, and enhancements.</p>
                          <div className="mt-1 h-0.5 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>
                        
                        <div className="w-[250px] h-[90px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="/whatsnew/blog">Blog</Link></h4>
                          <p className="text-gray-600 text-[12px]">News and stories from the world's work <br/> marketlists.</p>
                          <div className="mt-1 h-0.5 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>
                        
                        <div className="w-[250px] h-[90px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="/whatsnew/research">Research Institute</Link></h4>
                          <p className="text-gray-600 text-[12px]">Inquiries and tools for business leaders <br/> navigating a new world of work.</p>
                          <div className="mt-1 h-0.5 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>

                        <div className="w-[250px] h-[90px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="/whatsnew/releasenote">Release notes</Link></h4>
                          <p className="text-gray-600 text-[12px]">Our latest product news, additions, and improvements.</p>
                          <div className="mt-1 h-0.5 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Enterprise */}
              <Link
                href="#"
                className="font-medium text-sm text-gray-800 hover:text-green-600"
                onClick={handleEnterpriseClick}
              >
                Enterprise
              </Link>

              {/* Pricing */}
              {!isEnterpriseClicked && (
                <Link href="/pricing" className="font-medium text-sm text-gray-800 hover:text-green-600">
                  Pricing
                </Link>
              )}
            </div>
            </div>

              {/* Search Bar */}
            <div className="flex items-center space-x-4">
              <div className='hidden md:flex ml-[5rem] rounded-[8px] border flex-row justify-center items-center border-gray-500 px-[8px] py-[3px]'>
                <CiSearch className='text-black text-[22px]' />
                <input 
                    type='text'
                    placeholder='Search'
                    className='text-gray-900 text-[14px] p-[5px] outline-none'/>
                <span className='text-gray-500 mr-[10px]'>|</span>

                <button
                onClick={toggleDropdown}
                className="flex items-center text-[#181818] text-[14px] font-medium"
              >
                <span>{selectedOption}</span>
                <FiChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {dropdownOpen && (
                <div className="fixed right-8 top-15 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="p-4 space-y-4">
                    <div
                      className="flex items-start space-x-3 cursor-pointer"
                      onClick={() => handleOptionClick('Talent')}
                    >
                      <FiUsers className="h-5 w-5 text-gray-500 mt-0.9" />
                      <div>
                        <h3 className="font-medium text-gray-500 hover:text-green-600">Talent</h3>
                        <p className="text-[12px] text-gray-500">Hire professionals and agency...</p>
                      </div>
                    </div>

                    <div
                      className="flex items-start space-x-3 cursor-pointer"
                      onClick={() => handleOptionClick('Projects')}
                       >
                      <FiBriefcase className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                    <h3 className="font-medium text-gray-500 hover:text-green-600">Projects</h3>
                    <p className="text-[12px] text-gray-500">Buy ready-to-start services</p>
                    </div>
                   </div>

                    <div
                      className="flex items-start space-x-3 cursor-pointer"
                      onClick={() => handleOptionClick('Jobs')}
                    >
                      <FiFileText className="h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-500 hover:text-green-600">Jobs</h3>
                        <p className="text-[12px] text-gray-500">Apply to jobs posted by clients...</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
             </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-4 ">
                <Link href="/login" className="text-sm font-medium text-gray-800 hover:text-green-600 hidden md:flex">
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-[12px] text-sm font-medium md:flex hidden"
                >
                  Sign Up
                </Link>
              </div>
             
            </div>

          </div>
        </div>
      </nav>

  <div className="fixed top-0 z-50 bg-white w-full mx-auto md:hidden">
     {!searchOpen && (
        <div className="flex items-center justify-between px-4 bg-white border-b border-b-[#d9d9d9]">
          {/* Left - Menu & Logo */}
          <div className="flex items-center">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
            <Link href="/" className="flex items-center ml-2">
              <img 
                src="/Images/UpWorkNavbarLogo.png" 
                alt="UpworkLogo" 
                className='w-[95px] h-[95px]'
              />
            </Link>
          </div>

          {/* Right - Search & Sign Up */}
          <div className="flex items-center space-x-4">
            <button 
              className="text-gray-800 focus:outline-none"
              onClick={toggleSearch}
            >
              <FaSearch size={20} />
            </button>

            {/* Hide Sign Up button when menu is open */}
            {!mobileMenuOpen && (
            <Link 
            href="/signup" 
            className="bg-[#108a00] hover:bg-[#14a800] text-white px-[20px] py-[8px] rounded-[12px] text-sm font-medium"
            >
            Sign Up
            </Link>
            )}
          </div>
        </div>
      )}

        {/* Search Bar (Conditional) */}
        {searchOpen && (
  <div className="fixed inset-0 z-50 bg-white">
    {/* Back Button + Search */}
    <div className="flex items-center space-x-2 p-4">
      <button 
        className="text-xl text-gray-700"
        onClick={() => setSearchOpen(false)}
      >
        <FiChevronLeft />
      </button>
      <div className="flex flex-1 items-center border border-gray-400 rounded-lg px-3 py-2">
        <CiSearch className="text-gray-600 text-[18px]" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 text-gray-900 text-[14px] px-2 outline-none bg-transparent"
          autoFocus
        />
      </div>
    </div>

    {/* Tabs */}
    <div className="w-full flex justify-start space-x-6 px-4 mt-2 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 text-sm font-medium ${
            selectedTab === tab
              ? 'text-black border-b-2 border-black'
              : 'text-gray-500'
          }`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
)}
        {/* Mobile Menu (Conditional) - Your existing code exactly as provided */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 mt-16 overflow-y-auto text-black">
            <div className='flex justify-between flex-col w-full h-full'>
              <div className="space-y-4">
                <div className="px-[16px] py-[20px] my-[8px]">
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-[14px]"
                    onClick={() => setActiveMainMenu(activeMainMenu === 'talent' ? null : 'talent')}
                  >
                    Find Talent
                    <FiChevronDown className={`transition-transform ${activeMainMenu === 'talent' ? 'rotate-180' : ''}`} />
                  </button>

                  {activeMainMenu === 'talent' && (
                    <div className="left-0 right-0 bg-white z-10 animate-fade overflow-y-auto h-full">
                      {/* Full-screen view (shown when clicked) */}
                      {showFullscreen && (
                        <div className="fixed inset-0 bg-white z-50">
                          <div className="flex justify-between items-center mb-6">
                            <button 
                              onClick={() => setShowFullscreen(false)} 
                              className="text-2xl text-[#14a800] hover:bg-[#f5f5f5] p-2 rounded-full"
                            >
                              ←
                            </button>
                            <button 
                              onClick={() => {
                                setShowFullscreen(false);
                                setActiveMainMenu(null);
                              }} 
                              className="text-2xl text-gray-600 hover:bg-[#f5f5f5] p-2 rounded-full"
                            >
                              ×
                            </button>
                          </div>
                          <div>
                            {/* Dynamic content based on activeSubMenu */}
                            {activeSubMenu === 'marketplace' && (
                              <div className='flex flex-col md:flex-row'>
                                <div className="flex-1">
                                <div className="flex items-center justify-between border-b border-b-[#d9d9d9] py-[15px]">
                                  <button 
                                    onClick={() => {
                                      setShowFullscreen(false);
                                      setActiveSubMenu(null);
                                    }}
                                    className="text-[#181818] rounded-full hover:bg-[#f5f5f5] flex justify-center gap-[10px] px-[15px] text-[14px]"
                                  >
                                    <MdOutlineKeyboardArrowLeft size={20}/>Talent Marketplace™
                                  </button>
                                  <button 
                                    onClick={() => {
                                      setShowFullscreen(false);
                                      setActiveMainMenu(null);
                                    }}
                                    className="text-[#181818] rounded-full hover:bg-[#f5f5f5] px-[15px]"
                                  >
                                    <FiX size={20} />
                                  </button>
                                </div>
                                  <p className="text-sm text-[#181818] leading-5 my-[24px] px-6">
                                    Learn about working with talent or explore your specific hiring needs. 
                                    <span className="text-[#14a800] font-normal underline"> Hire on Talent Marketplace</span>
                                  </p>
                                </div>
                                <div className='md:ml-8 flex-1 px-6'>
                                  <ul className="flex flex-col flex-wrap">
                                    {['Development & IT', 'Design & Creative', 'Sales & Marketing', 'Writing & Translation', 
                                      'Admin & Customer Support', 'Finance & Accounting', 'HR & Training', 'Legal', 
                                      'Engineering & Architecture', 'Hire freelancers'].map((item) => (
                                      <li key={item} className='py-[20px] rounded hover:bg-[#c3c3c3]'>
                                        <Link href="#" className="text-[14px] text-[#181818]">{item}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            )}
                            
                            {activeSubMenu === 'catalog' && (
                              <div className='flex flex-col'>
                                <div>
                                <div className="flex items-center justify-between border-b border-b-[#d9d9d9] py-[15px]">
                                  <button 
                                    onClick={() => {
                                      setShowFullscreen(false);
                                      setActiveSubMenu(null);
                                    }}
                                    className="text-[#181818] rounded-full hover:bg-[#f5f5f5] flex justify-center gap-[10px] px-[15px] text-[14px]"
                                  >
                                    <MdOutlineKeyboardArrowLeft size={20} />Project Catalog™
                                  </button>
                                  <button 
                                    onClick={() => {
                                      setShowFullscreen(false);
                                      setActiveMainMenu(null);
                                    }}
                                    className="text-[#181818] rounded-full hover:bg-[#f5f5f5] px-[15px]"
                                  >
                                    <FiX size={20} />
                                  </button>
                                </div>
                                  <p className="text-sm text-[#181818] leading-5 my-[24px] px-6">
                                    Browse and buy projects that have a clear scope and price. 
                                    <span className="text-[#14a800] font-normal underline">Browse Project Catalog</span>
                                  </p>
                                </div>
                                <div className="flex flex-col gap-4 px-6">
                                  <div className="flex flex-row flex-wrap gap-4">
                                    {[
                                      {name: 'Logo Design', img: '/Images/Logo-Design.jpg'},
                                      {name: 'Articles & Blog Posts', img: '/Images/Articles-Catalog.jpg'},
                                      {name: 'WordPress', img: '/Images/Wordpress-Catalog.jpg'}
                                    ].map((item) => (
                                      <div key={item.name} className='w-full flex flex-row border-2 border-[#d9d9d9] rounded-lg hover:bg-[#c3c3c3]'>
                                        <img src={item.img} alt={item.name} className='w-[80px] h-[80px] object-cover rounded-tl-[6px] rounded-bl-[6px]'/>
                                        <h4 className="font-normal text-center text-[14px] text-[#181818] pl-[24px] flex justify-center items-center">
                                          <Link href="#">{item.name}</Link>
                                        </h4>
                                      </div>
                                    ))}
                                  </div>
                                  {[
                                    {name: 'Social Media Management', img: '/Images/Social-Media-Catalog.jpg'},
                                    {name: 'Video Editing', img: '/Images/Video-Editing-Catalog.jpg'},
                                    {name: 'SEO', img: '/Images/SEO-Catalog.jpg'}
                                  ].map((item) => (
                                    <div key={item.name} className='w-full flex flex-row border-2 border-[#d9d9d9] rounded-lg hover:bg-[#c3c3c3]'>
                                      <img src={item.img} alt={item.name} className='w-[80px] h-[80px] object-cover rounded-tl-[6px] rounded-bl-[6px]'/>
                                      <h4 className="font-normal text-center text-[14px] text-[#181818] pl-[24px] flex justify-center items-center">
                                        <Link href="#">{item.name}</Link>
                                      </h4>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {activeSubMenu === 'consultations' && (
                              <div className='flex flex-col'>
                                <div className="flex items-center justify-between border-b border-b-[#d9d9d9] py-[15px]">
                                  <button 
                                    onClick={() => {
                     
                                      setShowFullscreen(false);
                                      setActiveSubMenu(null);
                                    }}
                                    className="text-[#181818] rounded-full hover:bg-[#f5f5f5] flex justify-center gap-[10px] px-[15px] text-[14px]"
                                  >
                                   <MdOutlineKeyboardArrowLeft size={20} />Consultations™
                                  </button>
                                  <button 
                                    onClick={() => {
                                      setShowFullscreen(false);
                                      setActiveMainMenu(null);
                                    }}
                                    className="text-[#181818] rounded-full hover:bg-[#f5f5f5] px-[15px]"
                                  >
                                    <FiX size={20} />
                                  </button>
                                </div>
                                <div>
                                  <p className="text-sm text-[#181818] leading-5 my-[24px] px-6">
                                    Explore what is possible with an industry expert. See their availability and book a time that works for you.
                                    <span className="text-[#14a800] font-normal underline">Explore all categories</span>
                                  </p>
                                </div>
                                <div className="flex flex-col gap-4 px-6">
                                  <div className="flex flex-row flex-wrap gap-4">
                                    {[
                                      {name: 'Web Programming', img: '/Images/web-programming.jpg'},
                                      {name: 'AI & Machine Learning', img: '/Images/AI-&-Machine.jpg'},
                                      {name: 'Marketing Strategy', img: '/Images/Marketing-Strategy.jpg'}
                                    ].map((item) => (
                                      <div key={item.name} className='w-full flex flex-row border-2 border-[#d9d9d9] rounded-lg hover:bg-[#c3c3c3]'>
                                        <img src={item.img} alt={item.name} className='w-[80px] h-[80px] object-cover rounded-tl-[6px] rounded-bl-[6px]'/>
                                        <h4 className="font-normal text-center text-[14px] text-[#181818] pl-[24px] flex justify-center items-center">
                                          <Link href="#">{item.name}</Link>
                                        </h4>
                                      </div>
                                    ))}
                                  </div>
                                  {[
                                    {name: 'Social Media Marketing', img: '/Images/Social-Media-Marketing.jpg'},
                                    {name: 'Website Builders & CMS', img: '/Images/Website-Builders-&-CMS.jpg'}
                                  ].map((item) => (
                                    <div key={item.name} className='w-full flex flex-row border-2 border-[#d9d9d9] rounded-lg hover:bg-[#c3c3c3]'>
                                      <img src={item.img} alt={item.name} className='w-[80px] h-[80px] object-cover rounded-tl-[6px] rounded-bl-[6px]'/>
                                      <h4 className="font-normal text-[14px] text-[#181818] pl-[24px] flex justify-center items-center">
                                        <Link href="#">{item.name}</Link>
                                      </h4>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Original menu (shown when fullscreen is inactive) */}
                      {!showFullscreen && (
                        <div className="mx-auto">
                          <div className="flex flex-col md:flex-row gap-4 md:gap-20">
                            {/* Left column - main options */}
                            <div className="space-y-4 my-4">
                              {[
                                {
                                  id: 'marketplace',
                                  title: 'Post a job and hire a pro',
                                  subtitle: 'Talent Marketplace',
                                },
                                {
                                  id: 'catalog',
                                  title: 'Browse and buy projects',
                                  subtitle: 'Project Catalog',
                                },
                                {
                                  id: 'consultations',
                                  title: 'Get advice from an industry expert',
                                  subtitle: 'Consultations',
                                },
                              ].map((item) => (
                                <div
                                  key={item.id}
                                  className="group"
                                  onClick={() => {
                                    handleSubMenuHover(item.id);
                                    setShowFullscreen(true);
                                  }}
                                  onMouseEnter={() => handleSubMenuHover(item.id)}
                                >
                                  <div
                                    className={`${
                                      activeSubMenu === item.id ? 'bg-[#f5f5f5]' : 'bg-white'
                                    } hover:bg-[#f5f5f5] px-4 py-6 rounded-lg w-full md:w-[320px] h-auto md:h-[60px] flex justify-between items-center transition-colors duration-200`}
                                  >
                                    <div>
                                      <h3 className="font-normal text-[14px] text-[#181818]">{item.title}</h3>
                                      <p className="text-[13px] text-[#181818] leading-8">{item.subtitle}</p>
                                    </div>
                                    <MdKeyboardArrowRight className="text-[#181818] text-sm" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                <div className="px-[16px] py-[20px] my-[8px]">
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-[14px]"
                    onClick={() => setActiveMainMenu(activeMainMenu === 'work' ? null : 'work')}
                  >
                    Find Work
                    <FiChevronDown className={`transition-transform ${activeMainMenu === 'work' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMainMenu === 'work' && (
                    <div className="px-[16px]">
                      <div className="flex flex-col px-[16px] gap-[10px] py-[20px] mb-[15px] hover:bg-gray-100 rounded">
                        <h4 className="text-[14px] font-medium text-[#181818]">Ways to earn</h4>
                        <p className="text-[13px] text-[#181818]">Learn how to get started as an independent professional.</p>
                      </div>
                      <div className="flex flex-col px-[16px] gap-[10px] py-[20px] mb-[15px] hover:bg-gray-100 rounded">
                        <h4 className="text-[14px] font-medium text-[#181818]">Find work for your skills</h4>
                        <p className="text-[13px] text-[#181818]">Explore the kind of work available in your field.</p>
                      </div>
                      <div className="flex flex-col px-[16px] gap-[10px] py-[20px] mb-[15px] hover:bg-gray-100 rounded">
                        <h4 className="text-[14px] font-medium text-[#181818]">Win work with ads</h4>
                        <p className="text-[13px] text-[#181818]">Gain an edge. Get noticed by the right client.</p>
                      </div>
                      <div className="flex flex-col px-[16px] gap-[10px] py-[20px] mb-[15px] hover:bg-gray-100 rounded">
                        <h4 className="text-[14px] font-medium text-[#181818]">Join freelancer Plus</h4>
                        <p className="text-[13px] text-[#181818]">Access more Connects, get strategic insights on competitors, and try out the latest tools.</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="px-[16px] py-[20px] my-[8px]">
                  <button
                    className="flex items-center justify-between w-full text-left font-medium text-[14px]"
                    onClick={() => setActiveMainMenu(activeMainMenu === 'why' ? null : 'why')}
                  >
                    Why Upwork
                    <FiChevronDown className={`transition-transform ${activeMainMenu === 'why' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeMainMenu === 'why' && (
                  <div className="">
                  <div className="flex flex-col">
                
                    {/* Box List Section */}
                    <div className="flex flex-col items-start">
                      <div className="px-[16px] py-[20px] hover:bg-[#c3c3c3]">
                        <h4 className="font-normal text-[14px] text-[#181818] mb-[8px]">
                          <Link href="#">Success stories</Link>
                        </h4>
                      </div>
                
                      <div className="px-[16px] py-[20px] hover:bg-[#c3c3c3]">
                        <h4 className="font-normal text-[14px] text-[#181818] mb-[8px]">
                          <Link href="#">How to hire Reviews</Link>
                        </h4>
                      </div>
                
                      <div className="px-[16px] py-[20px] hover:bg-[#c3c3c3]">
                        <h4 className="font-normal text-[14px] text-[#181818] mb-[8px]">
                          <Link href="#">Reviews</Link>
                        </h4>
                      </div>
                
                      <div className="px-[16px] py-[20px] hover:bg-[#c3c3c3]">
                        <h4 className="font-normal text-[14px] text-[#181818]">
                          <Link href="#">How to find work</Link>
                        </h4>
                      </div>
                    </div>
                
                    {/* Guides Section */}
                    <div className="w-full flex flex-col items-start px-[16px]">
                      <h4 className="font-normal text-[#181818] py-[12px] mt-[8px] text-[14px]">Where work gets done</h4>
     
                      <ul className="space-y-4">
                        <li className="border border-[#c3c3c3] py-[8px] px-[24px] rounded-[8px] w-full hover:bg-[#c3c3c3] mt-[8px]">
                          <span className="text-[12px] text-[#1818181]">Guides</span>
                          <p className="text-gray-800 text-[14px]">
                            <Link href="#">Getting Started as a Freelancer</Link>
                          </p>
                        </li>
                        <li className="border border-[#c3c3c3] py-[8px] px-[24px] rounded-[8px] w-full hover:bg-[#c3c3c3] mt-[8px]">
                          <span className="text-[12px] text-[#181818]">Guides</span>
                          <p className="text-[#181818] text-[14px]">
                            <Link href="#">Growing Your Freelance Career</Link>
                          </p>
                        </li>
                        <li className="border border-[#c3c3c3] py-[8px] px-[24px] rounded-[8px] w-full hover:bg-[#c3c3c3] mt-[8px]">
                          <span className="text-[12px] text-[#181818]">Guides</span>
                          <p className="text-[#181818] text-[14px]">
                            <Link href="#">Hiring & Working with Independent Talent</Link>
                          </p>
                        </li>
                      </ul>
                      <Link href="#" className="text-[#108a00] font-normal text-[14px] underline mt-[12px] py-[20px]">See Resources</Link>
                    </div>
                
                  </div>
                  </div>
                
                     )}
                   </div>
     
                   {!isEnterpriseClicked && (
                     <>
                       <div className="px-[16px] py-[20px] my-[8px]">
                         <button
                           className="flex items-center justify-between w-full text-left font-medium text-[14px]"
                           onClick={() => setActiveMainMenu(activeMainMenu === 'whatsNew' ? null : 'whatsNew')}
                         >
                           What's new
                           <FiChevronDown className={`transition-transform ${activeMainMenu === 'whatsNew' ? 'rotate-180' : ''}`} />
                         </button>
                         {activeMainMenu === 'whatsNew' && (
                           <div>
                             <div className="flex flex-col px-[16px] gap-[10px] py-[20px] mb-[15px] hover:bg-gray-100 rounded">
                               <h4 className="text-[14px] font-medium text-[#181818]">Upwork Updates</h4>
                               <p className="text-[13px] text-[#181818]">Check out our latest products, partners, and enhancements.</p>
                             </div>
                             <div className="flex flex-col px-[16px] gap-[10px] py-[20px] mb-[15px] hover:bg-gray-100 rounded">
                               <h4 className="text-[14px] font-medium text-[#181818]">Blog</h4>
                               <p className="text-[13px] text-[#181818]">News and stories from the world's work marketplace.</p>
                             </div>
                             <div className="flex flex-col px-[16px] gap-[10px] py-[20px] mb-[15px] hover:bg-gray-100 rounded">
                               <h4 className="text-[14px] font-medium text-[#181818]">Research Institute</h4>
                               <p className="text-[13px] text-[#181818]">Inquiries and tools for business leaders navigating a new world of work.</p>
                             </div>
                           </div>
                         )}
                       </div>
     
                       <div className="px-[16px] py-[20px] my-[8px]">
                         <Link href="#" className="block font-medium text-[14px]" onClick={closeAllMenus}>
                           Enterprise
                         </Link>
                       </div>
     
                       <div className="px-[16px] py-[20px] my-[8px]">
                         <Link href="/pricing" className="block font-medium text-[14px]" onClick={closeAllMenus}>
                           Pricing
                         </Link>
                       </div>
                       <div className='px-[16px] py-[20px] my-[8px]'>
                           <Link
                             href="/login"
                             className="block font-medium text-[14px]"
                             onClick={closeAllMenus}
                           >
                             Log In
                            </Link>
                       </div>
                     </>
                   )}
              </div>
              <div className="fixed bottom-0 left-0 w-full bg-white border-t border-t-[#d9d9d9] py-[20px] px-[15px] z-50">
            
              <Link
                href="/signup"
                className="block bg-[#108a00] hover:bg-[#14a800] text-white text-center py-[11px] px-[24px] rounded-[12px] font-medium w-full"
                onClick={closeAllMenus}
              >
                Sign Up
              </Link>
            </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;