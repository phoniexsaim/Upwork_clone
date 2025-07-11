"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ScrollPopup({ triggerRef }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const closed = sessionStorage.getItem("enterprisePopupClosed");
    if (closed === "true") {
      setIsClosed(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current && !isClosed) {
        const triggerBottom = triggerRef.current.getBoundingClientRect().bottom + window.scrollY;
        const scrolledPosition = window.scrollY + window.innerHeight;

        setIsVisible(scrolledPosition >= triggerBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerRef, isClosed]);

  const handleClose = () => {
    setIsClosed(true);
    sessionStorage.setItem("enterprisePopupClosed", "true");
  };

  if (!isVisible || isClosed) return null;

 return (
  <div className="fixed bottom-0 font-sans left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 z-50">
    <span className="text-[16px] md:text-[24px] font-[500] text-center md:text-left">
      Learn more about Enterprise Suite
    </span>

    <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
      <button className="bg-[#95df00] font-sans text-black w-full md:w-auto px-6 py-2 cursor-pointer rounded-lg font-[500] transition text-[14px] md:text-[16px]">
        Let’s talk
      </button>
      <button
        onClick={handleClose}
        className="text-white hover:text-gray-400 transition cursor-pointer"
        aria-label="Close popup"
      >
        <X size={20} className="md:size-6" />
      </button>
    </div>
  </div>
);

}
