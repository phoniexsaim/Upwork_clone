"use client";

import Footer from "@/Footer";
import FilterSelect from "../Components/FilterSelect";
import ProductReleaseTimeline from "../Components/ProductReleaseTimeline";


export default function WhatsNewReleaseNotes() {
  return (
    <>
      <div className="max-w-7xl font-sans mx-auto px-6 py-16">
        <div className="bg-white mt-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-black text-[72px] font-[500]">Release notes</h1>
            <p className="text-black text-[20px] font-[400]">
              Upwork’s latest product news, additions, and updates.
            </p>
            <div className="mt-6 w-full max-w-md">
              <FilterSelect />
            </div>
          </div>
        </div>
      </div>
      <ProductReleaseTimeline></ProductReleaseTimeline>
      <Footer></Footer>
    </>
  );
}
