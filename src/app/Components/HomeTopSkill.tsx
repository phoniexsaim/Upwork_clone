"use client";

export default function HomeTopSkill() {

  return (
<>
<div className="min-h-screen bg-white">
  <main className="max-w-7xl font-sans mx-auto px-4 sm:px-6 py-12">
    <div className="flex flex-col lg:flex-row justify-between gap-y-8">
      <div className="cursor-pointer">
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] text-[#108a00]">Top skills</h1>
        <h1 className="text-[#d9d9d9] text-[28px] sm:text-[32px] lg:text-[40px] hover:text-[#108a00]">Treanding skills</h1>
        <h1 className="text-[#d9d9d9] text-[28px] sm:text-[32px] lg:text-[40px] hover:text-[#108a00]">Top skills in US</h1>
        <h1 className="text-[#d9d9d9] text-[28px] sm:text-[32px] lg:text-[40px] hover:text-[#108a00]">
          Project Catalog <sup className="text-[12px] ml-0">TM</sup>
        </h1>
      </div>

      <div className="cursor-pointer">
        {[
          "Generative AI Specialists",
          "Data Entry Specialists",
          "Video Editors",
          "Data Analyst",
          "Shopify Developer",
          "Ruby on Rails Developer",
          "Android Developer",
          "Bookkeeper",
          "Content Writer",
          "Copywriter",
          "Data Scientist",
          "Front-End Developer",
          "Game Developer",
          "Graphic Designer",
          "iOS Developer",
          "Java Developer",
        ].map((item, idx) => (
          <h3
            key={idx}
            className="text-[#676767] text-lg sm:text-xl lg:text-[24px] hover:text-[#108a00] font-[400]"
          >
            {item}
          </h3>
        ))}
      </div>

      <div className="cursor-pointer">
        {[
          "JavaScript Developer",
          "Logo Designer",
          "Mobile App Developer",
          "PHP Developer",
          "Python Developer",
          "Resume Writer",
          "SEO Expert",
          "Social Media Manager",
          "Software Developer",
          "Software Engineer",
          "Technical Writer",
          "UI Designer",
          "UX Designer",
          "Virtual Assistant",
          "Web Designer",
          "Wordpress Developer",
        ].map((item, idx) => (
          <h3
            key={idx}
            className="text-[#676767] text-lg sm:text-xl lg:text-[24px] hover:text-[#108a00] font-[400]"
          >
            {item}
          </h3>
        ))}
      </div>
    </div>
  </main>
</div>
</>
  ); 
}
