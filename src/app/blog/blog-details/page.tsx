import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import BlogDetails from "@/components/Blog/BlogDetails";

const BlogDetailPage = () => {
  return (
    <>
      <Breadcrumb title="Blog Details" />
      <BlogDetails />
    </>
  );
};

export default BlogDetailPage;
