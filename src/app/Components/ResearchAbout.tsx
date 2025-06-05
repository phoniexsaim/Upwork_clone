"use client";

export default function ResearchAbout() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="flex w-full justify-center p-8 bg-[#f1f1f1] rounded-lg">
            <div className="w-[50%] flex flex-col justify-center">
                <h2 className="text-black font-[600] text-[48px] text-base/13 ">Work is changing fast. Let’s talk about it.</h2>
                <button className="text-white w-[40%] cursor-pointer mt-5 font-[500] bg-[#108a00] rounded-lg py-[8px] hover:bg-[#14a800] px-[21px]">Listen to the prodcast</button>
            </div>
            <div className="w-[50%]">
                <img className="aspect-[2.64]" src="Images/Work.png"/>
            </div>
        </div>
        <div className="mt-6">
            <h1 className="text-black text-[48px] font-[600] mb-6">About the Upwork Research Institute</h1>
            <p className="font-[400] text-[20px] text-[#181818]">The world of work is not the same as it was just a few years ago and leaders are facing brand new challenges as a result. The old work  playbook is gone, and in its place, there are debates and decisions around workforce location, worker arrangements, and flexibility. However, leaders do not need to navigate this new world of work on their own.</p>
        </div>
        <div className="mt-6">
            <p className="font-[400] text-[20px] text-[#181818]">The Upwork Research Institute is committed to studying the fundamental shifts in the workforce and providing business leaders with the tools and insights they need to navigate the here and now while preparing their organization for the future. Using our proprietary platform data, global survey research, partnerships, and academic collaborations, we will produce evidence-based insights to create the blueprint for the new way of work.</p>
        </div>
    </div>
    
    </>
  );
}