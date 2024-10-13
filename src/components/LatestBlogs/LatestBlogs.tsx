import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({blogs}:{blogs: Blog[]}) => {
    return (
        <div className="w-[90%] mx-auto">
            <h1 className="text-4xl text-center my-5">Latest Blogs From <span className="text-accent">Blogiz</span></h1>
            <p className="lg:text-xl md:text-xl text-md text-center text-gray-400 lg:w-2/4 md:w-2/4 w-3/4 mx-auto"><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-4 gap-8 lg:my-5 md:my-5 my-8">
                {
                    blogs.slice(0,2).map((blog) => <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard>)
                }
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-4 gap-8 my-5">
                {
                    blogs.slice(2,5).map((blog) => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default LatestBlogs;