"use client";

import BlogMarketPlace from "@/app/Components/BlogMarketPlace";
import BlogNews from "@/app/Components/BlogNews";
import BlogTopMenu from "@/app/Components/BlogTopMenu";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";




export default function WhatsNewBlog() {
  return (
    <>
    <Navbar/>
    <BlogTopMenu></BlogTopMenu>
    <BlogNews></BlogNews>
    <BlogMarketPlace></BlogMarketPlace>
    <Footer></Footer>
    </>
  );
}