"use client";

import BlogMarketPlace from "../Components/BlogMarketPlace";
import BlogNews from "../Components/BlogNews";
import BlogTopMenu from "../Components/BlogTopMenu";
import Footer from "../Components/Footer";



export default function WhatsNewBlog() {
  return (
    <>
    <BlogTopMenu></BlogTopMenu>
    <BlogNews></BlogNews>
    <BlogMarketPlace></BlogMarketPlace>
    <Footer></Footer>
    </>
  );
}