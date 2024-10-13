"use client";

import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/api/baseApi";
import { Blog } from "@/types";

const BlogsPage = () => {
    // const res = await fetch("http://localhost:5000/blogs", { cache: "no-store" });
    // const blogs = await res.json();

    const { data: blogs, isLoading, isError, error } = useGetBlogsQuery("");
    // console.log(blogs);

    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-4xl text-center my-5">All Blogs From <span className="text-accent">Blogiz</span></h1>
            <p className="lg:text-xl md:text-xl text-md text-center text-gray-400 lg:w-2/4 md:w-2/4 w-3/4 mx-auto"><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-4 gap-8 my-5">
                {
                    blogs?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogsPage;