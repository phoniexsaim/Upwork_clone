"use client";
import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { RiCloseFill } from "react-icons/ri";

const videoData = [
  {
    title: "Video No.1",
    thumb: "/Images/Shape1.svg",
    hoverThumb: "/Images/Shape2.svg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Video No.2",
    thumb: "/Images/Shape3.svg",
    hoverThumb: "/Images/Shape4.svg",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    title: "Video No.3",
    thumb: "/Images/Shape5.svg",
    hoverThumb: "/Images/Shape6.svg",
    videoUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
  },
  {
    title: "Video No.4",
    thumb: "/Images/Shape7.svg",
    hoverThumb: "/Images/Shape8.svg",
    videoUrl: "https://www.youtube.com/watch?v=H3GiqHm5V1E",
  },
  {
    title: "Video No.5",
    thumb: "/Images/Shape9.svg",
    hoverThumb: "/Images/Shape10.svg",
    videoUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "Video No.6",
    thumb: "/Images/Shape1.svg",
    hoverThumb: "/Images/Shape2.svg",
    videoUrl: "https://www.youtube.com/watch?v=2vjPBrBU-TM",
  },
];

export default function EnterpriseFeatureVideoSlider() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playHoverIndex, setPlayHoverIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);

  const handleScrollCheck = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atStart = el.scrollLeft === 0;
    const atEnd = Math.abs(el.scrollLeft + el.offsetWidth - el.scrollWidth) < 1;
    setShowLeft(!atStart);
    setShowRight(!atEnd);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScrollCheck);
    handleScrollCheck();
    return () => el.removeEventListener("scroll", handleScrollCheck);
  }, []);

  const scrollByCards = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 260 + 24;
    el.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-7xl py-16 font-sans mx-auto px-4">
      <div className="mb-8">
      <h1 className="text-[32px] leading-tight sm:text-[48px]  sm:leading-[1.0] font-semibold text-white">
          Explore how Upwork Enterprise works
        </h1>
      </div>

      <div className="relative w-full flex justify-center items-center">
{showLeft && (
  <button
    onClick={() => scrollByCards("left")}
    className="hidden sm:absolute sm:left-2 sm:top-1/2 sm:-translate-y-1/2 sm:z-10 sm:bg-black sm:bg-opacity-50 sm:p-2 sm:rounded-full sm:transition"
  >
    <SlArrowLeft className="text-white hover:text-lime-500 cursor-pointer w-6 h-6" />
  </button>
)}
        <div className="w-[1100px] overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4"
          >
            {videoData.map((video, index) => (
              <div
                key={index}
                className="w-[320px] h-[320px] bg-lime-500 rounded-xl p-3 relative flex-shrink-0 transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  setPlayHoverIndex(null);
                }}
              >
                <div className="relative">
                  <Image
                    src={
                      hoveredIndex === index
                        ? video.hoverThumb
                        : video.thumb
                    }
                    alt="Thumbnail"
                    width={260}
                    height={200}
                    className="w-full object-cover rounded-lg h-[83%]"
                  />
                  <div
                    onClick={() => setActiveVideo(video.videoUrl)}
                    onMouseEnter={() => setPlayHoverIndex(index)}
                    onMouseLeave={() => setPlayHoverIndex(null)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full w-24 h-24 flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src={
                        playHoverIndex === index
                          ? "/Images/Playbutton2.svg"
                          : "/Images/Playbutton1.svg"
                      }
                      alt="Play Button"
                      width={44}
                      height={44}
                      className="w-12 h-12"
                    />
                  </div>
                </div>
                <div className="absolute bottom-3 left-5 bg-black text-white text-sm px-4 py-2 rounded-full">
                  {video.title}
                </div>
              </div>
            ))}
          </div>
        </div>

{showRight && (
  <button
    onClick={() => scrollByCards("right")}
    className="hidden sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 sm:z-10 sm:bg-black sm:bg-opacity-50 sm:p-2 sm:transition"
  >
    <SlArrowRight className="text-white w-6 h-6 cursor-pointer hover:text-lime-500" />
  </button>
)}
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl aspect-video">
            <ReactPlayer
              url={activeVideo}
              width="100%"
              height="100%"
              controls
              playing={true}
            />
          </div>
         <button
        onClick={() => setActiveVideo(null)}
        className="absolute top-6 right-8 !cursor-pointer text-white text-2xl">
         <RiCloseFill className="!cursor-pointer" />
        </button>
        </div>
      )}
    </div>
  );
}
