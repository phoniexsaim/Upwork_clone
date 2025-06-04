'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { FiChevronDown, FiUsers, FiBriefcase, FiFileText } from 'react-icons/fi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isEnterpriseClicked, setIsEnterpriseClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Talent');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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

  const handleSubMenuHover = (submenu: string) => {
    setActiveSubMenu(submenu);
  };

  const handleEnterpriseClick = () => {
    setIsEnterpriseClicked(true);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeAllMenus = () => {
    setActiveMainMenu(null);
    setActiveSubMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`bg-white fixed w-full z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
        <div className="md:mx-[1rem] px-4">
          <div className="flex items-center justify-between h-16">
          
            <div className="flex just items-center gap-[9px]">
            <button
                className="md:hidden text-gray-800 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
              <Link href="/" className="flex items-center">
              <img src="/Images/UpWorkNavbarLogo.png" alt="UpworkLogo" className='w-[95px] h-[95px]' />
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
            <div className="fixed left-0 right-0 mt-5.5 bg-white border-t border-gray-200 shadow-md z-10 p-6 animate-fade">
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
                      <div className={`${activeSubMenu === 'catalog' ? 'bg-[#f5f5f5]' : 'bg-white'} hover:bg-[#f5f5f5] px-6 py-8 rounded-lg w-[320px] h-[60px] flex justify-between items-center transition-colors duration-200`}>
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
                  <div className='fixed left-0 right-0 mt-5.5 bg-white border-t border-gray-200 shadow-md z-10 p-6'>
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
                  <div className="fixed left-0 right-0 mt-5.5 bg-white border-t border-gray-200 shadow-md z-10 p-6">
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
                    <div className="fixed left-0 right-0 mt-5.5 bg-white border-t border-gray-200 shadow-md z-10 p-6">
                      <div className="flex flex-row gap-20 p-[35px]">
                        <div className="w-[250px] h-[90px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="#">Upwork Updates</Link></h4>
                          <p className="text-gray-600 text-[12px]">Check out our latest products, partners, and enhancements.</p>
                          <div className="mt-1 h-0.5 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>
                        
                        <div className="w-[250px] h-[90px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="#">Blog</Link></h4>
                          <p className="text-gray-600 text-[12px]">News and stories from the world's work <br/> marketlists.</p>
                          <div className="mt-1 h-0.5 w-0 group-hover:w-full transition-all duration-300"></div>
                        </div>
                        
                        <div className="w-[250px] h-[90px] hover:bg-[#c3c3c3] rounded-[8px] p-[8px]">
                          <h4 className="font-normal text-[14px] text-gray-800 mb-[8px]"><Link href="#">Research Institute</Link></h4>
                          <p className="text-gray-600 text-[12px]">Inquiries and tools for business leaders <br/> navigating a new world of work.</p>
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
                <Link href="#" className="font-medium text-sm text-gray-800 hover:text-green-600">
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
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign Up
                </Link>
              </div>
              {/* Mobile Menu Button */}
             
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 mt-16 overflow-y-auto text-black">
          <div className="px-4 py-6">
            
            {/* Mobile Search */}
            {/* <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 mb-6">
              <CiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="text-sm outline-none flex-1"
              />
            </div> */}

            {/* Mobile Menu Items */}
            <div className="space-y-4">
              <div className=" pb-4">
                <button
                  className="flex items-center justify-between w-full text-left font-medium"
                  onClick={() => setActiveMainMenu(activeMainMenu === 'talent' ? null : 'talent')}
                >
                  Find Talent
                  <FiChevronDown className={`transition-transform ${activeMainMenu === 'talent' ? 'rotate-180' : ''}`} />
                </button>
                {activeMainMenu === 'talent' && (
                  <div className="mt-2 pl-4 space-y-3">
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <p className="text-sm text-gray-600">Post a job and hire a pro</p>
                      <p className="text-xs text-green-600 font-medium">Talent Marketplace</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <p className="text-sm text-gray-600">Browse and buy projects</p>
                      <p className="text-xs text-green-600 font-medium">Project Catalog</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <p className="text-sm text-gray-600">Get advice from an industry expert</p>
                      <p className="text-xs text-green-600 font-medium">Consultations</p>
                    </div>
                  </div>
                )}
              </div>

              <div className=" pb-4">
                <button
                  className="flex items-center justify-between w-full text-left font-medium"
                  onClick={() => setActiveMainMenu(activeMainMenu === 'work' ? null : 'work')}
                >
                  Find Work
                  <FiChevronDown className={`transition-transform ${activeMainMenu === 'work' ? 'rotate-180' : ''}`} />
                </button>
                {activeMainMenu === 'work' && (
                  <div className="mt-2 pl-4 space-y-3">
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">Ways to earn</h4>
                      <p className="text-xs text-gray-600">Learn why Upwork has the right opportunities for you.</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">Find work for your skills</h4>
                      <p className="text-xs text-gray-600">Explore the kind of work available in your field.</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">Win work with ads</h4>
                      <p className="text-xs text-gray-600">Get noticed by the right client.</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">Join freelancer Plus</h4>
                      <p className="text-xs text-gray-600">Access more Connects, get strategic insights on competitors, and try out the latest tools.</p>
                    </div>
                  </div>
                )}
              </div>

              <div className=" pb-4">
                <button
                  className="flex items-center justify-between w-full text-left font-medium"
                  onClick={() => setActiveMainMenu(activeMainMenu === 'why' ? null : 'why')}
                >
                  Why Upwork
                  <FiChevronDown className={`transition-transform ${activeMainMenu === 'why' ? 'rotate-180' : ''}`} />
                </button>
                {activeMainMenu === 'why' && (
                  <div className="mt-2 pl-4 space-y-3">
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">Success stories</h4>
                      <p className="text-xs text-gray-600">Discover how teams work strategically and grow together.</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">Reviews</h4>
                      <p className="text-xs text-gray-600">See what it's like to collaborate on Upwork.</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">How to hire</h4>
                      <p className="text-xs text-gray-600">Learn about the different ways to get work done.</p>
                    </div>
                    <div className="p-2 hover:bg-gray-100 rounded">
                      <h4 className="text-sm font-medium">How to find work</h4>
                      <p className="text-xs text-gray-600">Learn about how to grow your independent career.</p>
                    </div>
                  </div>
                )}
              </div>

              {!isEnterpriseClicked && (
                <>
                  <div className=" pb-4">
                    <button
                      className="flex items-center justify-between w-full text-left font-medium"
                      onClick={() => setActiveMainMenu(activeMainMenu === 'whatsNew' ? null : 'whatsNew')}
                    >
                      What's new
                      <FiChevronDown className={`transition-transform ${activeMainMenu === 'whatsNew' ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMainMenu === 'whatsNew' && (
                      <div className="mt-2 pl-4 space-y-3">
                        <div className="p-2 hover:bg-gray-100 rounded">
                          <h4 className="text-sm font-medium">Upwork Updates</h4>
                          <p className="text-xs text-gray-600">Check out our latest products, partners, and enhancements.</p>
                        </div>
                        <div className="p-2 hover:bg-gray-100 rounded">
                          <h4 className="text-sm font-medium">Blog</h4>
                          <p className="text-xs text-gray-600">News and stories from the world's work marketplace.</p>
                        </div>
                        <div className="p-2 hover:bg-gray-100 rounded">
                          <h4 className="text-sm font-medium">Research Institute</h4>
                          <p className="text-xs text-gray-600">Inquiries and tools for business leaders navigating a new world of work.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className=" pb-4">
                    <Link href="#" className="block font-medium" onClick={closeAllMenus}>
                      Enterprise
                    </Link>
                  </div>

                  <div className=" pb-4">
                    <Link href="#" className="block font-medium" onClick={closeAllMenus}>
                      Pricing
                    </Link>
                  </div>
                  <div>
                      <Link
                        href="/login"
                        className="block font-medium mb-4"
                        onClick={closeAllMenus}
                      >
                        Log In
                       </Link>
                  </div>
                </>
              )}

              <div className="pt-4">
             
                <Link
                  href="/signup"
                  className="block bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-md font-medium"
                  onClick={closeAllMenus}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



//   return (
//     <nav className="bg-white border border-b-gray-200 fixed w-full">
//       <div className="mx-[1rem] px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <img src={"/Images/UpWorkNavbarLogo.png"} alt='UpWorkLogo' className='w-[100px] h-[100px]'/>
//             <div className="hidden md:flex ml-10 space-x-6">
//               {/* Find Talent */}
           
              
              
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className='hidden md:flex ml-[5rem] rounded-[8px] border flex-row justify-center items-center border-gray-500 px-[8px] py-[3px]'>
//                 <CiSearch className='text-black text-[22px]' />
//                 <input 
//                     type='text'
//                     placeholder='Search'
//                     className='text-gray-900 text-[14px] p-[5px] outline-none'/>
//                 <span className='text-gray-500 mr-[10px]'>|</span>

//                 <button
//         onClick={toggleDropdown}
//         className="flex items-center text-[#181818] text-[14px] font-medium"
//       >
//         <span>{selectedOption}</span>
//         <FiChevronDown className={`ml-1 h-3 w-3 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
//       </button>

//       {dropdownOpen && (
//         <div className="fixed right-8 top-15 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-10">
//           <div className="p-4 space-y-4">
//             <div
//               className="flex items-start space-x-3 cursor-pointer"
//               onClick={() => handleOptionClick('Talent')}
//             >
//               <FiUsers className="h-5 w-5 text-gray-500 mt-0.9" />
//               <div>
//                 <h3 className="font-medium text-gray-500 hover:text-green-600">Talent</h3>
//                 <p className="text-[12px] text-gray-500">Hire professionals and agency...</p>
//               </div>
//             </div>

//             <div
//               className="flex items-start space-x-3 cursor-pointer"
//               onClick={() => handleOptionClick('Projects')}
//             >
//               <FiBriefcase className="h-5 w-5 text-gray-500 mt-0.5" />
//               <div>
//                 <h3 className="font-medium text-gray-500 hover:text-green-600">Projects</h3>
//                 <p className="text-[12px] text-gray-500">Buy ready-to-start services</p>
//               </div>
//             </div>

//             <div
//               className="flex items-start space-x-3 cursor-pointer"
//               onClick={() => handleOptionClick('Jobs')}
//             >
//               <FiFileText className="h-5 w-5 text-gray-500 mt-0.5" />
//               <div>
//                 <h3 className="font-medium text-gray-500 hover:text-green-600">Jobs</h3>
//                 <p className="text-[12px] text-gray-500">Apply to jobs posted by clients...</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
          
//             <Link href="/Login" className="text-[#181818] hover:text-green-600 text-[14px]">Log in</Link>
//             <Link href="/signin" className="bg-green-700 text-white px-6 py-2 rounded-[10px] hover:bg-green-600 text-[14px]">Sign up</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };