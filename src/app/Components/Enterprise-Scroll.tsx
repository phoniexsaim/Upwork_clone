"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react"; // npm install lucide-react or use emoji

export default function ScrollPopup({ triggerRef }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Check if already closed in this session
  useEffect(() => {
    const closed = sessionStorage.getItem("enterprisePopupClosed");
    if (closed === "true") {
      setIsClosed(true);
    }
  }, []);

  // Watch scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (triggerRef.current && !isClosed) {
        const triggerBottom = triggerRef.current.getBoundingClientRect().bottom + window.scrollY;
        const scrolledPosition = window.scrollY + window.innerHeight;

        setIsVisible(scrolledPosition >= triggerBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerRef, isClosed]);

  // Close handler
  const handleClose = () => {
    setIsClosed(true);
    sessionStorage.setItem("enterprisePopupClosed", "true");
  };

  if (!isVisible || isClosed) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-8 flex justify-between items-center z-50">
      <span className="text-[24px] font-[500]">Learn more about Enterprise Suite</span>
      <div className="flex items-center gap-3">
        <button className="bg-[#95df00] text-black px-8 py-2 curor-pointer rounded-lg font-[500] transition">
          Let’s talk
        </button>
        <button
          onClick={handleClose}
          className="text-white hover:text-gray-400 transition cursor-pointer"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}
