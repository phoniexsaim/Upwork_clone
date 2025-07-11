"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    type: "testimonial",
    image: "/Images/Tas1 .svg",
    quote: `If we didn’t have Upwork...the quality of talent wouldn’t be as easy to measure, and we wouldn’t have the incredible support we get from the Upwork team`,
    author: "Jessica Khawaja, VP of People Operations",
    stats: [
      {
        label: "11 Days",
        desc: "to post a job, hire, classify, and onboard selected talent",
      },
      {
        label: "Nearly Doubled",
        desc: "the support hours for a project",
      },
    ],
  },
  {
    type: "testimonial",
    image: "/Images/Tas2.png",
    quote: `One of the greatest advantages of utilizing freelancers is finding a great variety of talent with different skills`,
    author: "Carol Taylor, Director of Content Experience",
    stats: [
      {
        label: "50% Faster",
        desc: "launch of projects",
      },
      {
        label: "10,000",
        desc: "projects completed",
      },
    ],
  },
  {
    type: "logoCard",
    leftImage: "/Images/PIC1.png",
    logos: [
      "/Images/PIC2.png",
      "/Images/PIC3.png",
      "/Images/PIC4.png",
      "/Images/PIC5.png",
      "/Images/PIC6.png",
    ],
    heading: "and many more",
  },
];

export default function EnterpriseSlider() {
  return (
    <>
      <div className="bg-black font-sans text-white py-16 px-4 flex justify-center">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-center text-white text-[48px] font-semibold mb-12 max-md:text-[32px] max-md:leading-[1.1] max-md:text-left">
            Trusted by leading brands and startups
          </h2>

          <div className="relative w-full">
           <Swiper
  modules={[Pagination, Autoplay]}
  pagination={{
    el: ".custom-pagination",
    clickable: true,
  }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  speed={1000}
  loop={true}
  spaceBetween={30}
  slidesPerView={1}
  className="rounded-2xl w-full"
>

              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  {item.type === "testimonial" ? (
                    <div className="bg-[#0e0e0e] border border-[#3c3c3c] p-8 rounded-3xl shadow-lg min-h-[700px] max-w-5xl flex flex-col w-full mx-auto max-md:min-h-[auto]">
                      <img
                        src={item.image}
                        alt="Logo"
                        className="h-[34px] w-auto mb-8 object-contain"
                      />
                      <p className="text-[56px] font-[500] mb-6 text-base/16 max-md:text-[20px] max-md:leading-[1.5] max-md:mb-4">
                        {item.quote}
                      </p>
                      <p className="text-[24px] font-medium text-white mt-10 mb-10 max-md:text-[16px] max-md:mt-4 max-md:mb-4">
                        {item.author}
                      </p>
                      <div className="flex gap-4 max-md:flex-col max-md:gap-4">
                        {item.stats.map((stat, i) => (
                          <div
                            key={i}
                            className="bg-[#1c1c1c] rounded-xl mt-6 px-4 py-3 w-full text-left"
                          >
                            <h4 className="text-[34px] text-white max-md:text-[20px]">{stat.label}</h4>
                            <p className="text-[20px] text-white max-md:text-[14px]">{stat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="bg-[#0e0e0e] border border-[#3c3c3c] rounded-3xl shadow-lg max-w-5xl flex w-full mx-auto overflow-hidden min-h-[700px] max-md:flex-col max-md:min-h-[auto]">
                      <div className="w-[40%] max-md:w-full max-md:h-[200px]">
                        <img
                          src={item.leftImage}
                          alt="Company Logos"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-[60%] p-10 flex flex-col items-center justify-center gap-6 max-md:w-full max-md:py-6 max-md:px-4">
                        <h3 className="text-white text-[24px] font-[500] max-md:text-[18px]">
                          {item.heading}
                        </h3>
                        <div className="flex flex-col justify-center items-center gap-6 w-full max-md:gap-3">
                          {item.logos.map((logo, i) => (
                            <img
                              key={i}
                              src={logo}
                              alt="Brand Logo"
                              className="w-[136px] h-[40px] object-contain max-md:w-[100px] max-md:h-[32px]"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-pagination mt-8 flex justify-center gap-2 w-full" />
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </>
  );
}
