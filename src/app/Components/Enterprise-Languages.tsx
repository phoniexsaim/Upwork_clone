"use client";

import { useEffect, useState } from "react";

const services = [
  { name: "Android", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "iOS", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Flutter", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "React Native", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Chatbot", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "Firebase", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Node.js", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "React", bgColor: "white", color: "#0e0e0e", borderColor: "white" },
  { name: "Angular", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Vue.js", bgColor: "white", color: "#0e0e0e", borderColor: "white" },
  { name: "Next.js", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "React", bgColor: "white", color: "#0e0e0e", borderColor: "white" },
  { name: "MongoDB", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "TypeScript", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "PostgreSQL", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Android", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "iOS", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Flutter", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "React Native", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Chatbot", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 


  { name: "Android", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "iOS", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Flutter", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "React Native", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Chatbot", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "Firebase", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "GraphQL", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "Python", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "AWS", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "React", bgColor: "white", color: "#0e0e0e", borderColor: "white" },
  { name: "Angular", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Vue.js", bgColor: "white", color: "#0e0e0e", borderColor: "white" },
  { name: "Next.js", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "React", bgColor: "white", color: "#0e0e0e", borderColor: "white" },
  { name: "PostgreSQL", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Android", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "iOS", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Flutter", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
  { name: "React Native", bgColor: "#0e0e0e", color: "white", borderColor: "white" },
  { name: "Chatbot", bgColor: "white", color: "#0e0e0e", borderColor: "white" }, 
];


export default function EnterpriseLanguages() {
    const [stopAnimation, setStopAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStopAnimation(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const topRow = services.slice(0, 9);
  const bottomRow = services.slice(9, 18);

    return(
        <>
  <div className="relative w-full bg-black flex justify-center items-center flex-col py-16 font-sans overflow-hidden space-y-6">
  <div className="relative w-full max-w-7xl mx-auto px-6 py-16 overflow-hidden">
    
    <div className="pointer-events-none absolute top-0 left-0 h-full w-1 z-10 bg-gradient-to-r from-white to-transparent" />
    <div className="pointer-events-none absolute top-0 right-0 h-full w-1 z-10 bg-gradient-to-l from-white to-transparent" />

    <div className="flex flex-col space-y-4 overflow-hidden">
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 transition-transform duration-1000 ${
          stopAnimation ? "translate-x-0" : "animate-slide-left"
        }`}
      >
        {topRow.map((service, index) => (
          <button
            key={`top-${index}`}
            className="px-6 py-2 rounded-full text-[24px] font-medium whitespace-nowrap border"
            style={{
              backgroundColor: service.bgColor,
              color: service.color,
              borderColor: service.borderColor
            }}
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>

    <div className="overflow-hidden">
      <div
        className={`flex gap-6 transition-transform duration-1000 ${
          stopAnimation ? "translate-x-0" : "animate-slide-right"
        }`}
      >
        {bottomRow.map((service, index) => (
          <button
            key={`bottom-${index}`}
            className="px-4 py-2 rounded-full text-[24px] font-medium whitespace-nowrap border"
            style={{
              backgroundColor: service.bgColor,
              color: service.color,
              borderColor: service.borderColor
            }}
          >
            {service.name}
          </button>
        ))}
      </div>
    </div>
    </div>

    <style jsx>{`
      @keyframes slide-left {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0%);
        }
      }

      @keyframes slide-right {
        0% {
          transform: translateX(100%);
        }
        100% {
          transform: translateX(0%);
        }
      }

      .animate-slide-left {
        animation: slide-left 5s ease-out forwards;
      }

      .animate-slide-right {
        animation: slide-right 5s ease-out forwards;
      }
    `}</style>
  </div>
</div>

        </>
    )
}
