import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "@/pages/blogs/blogs-data";
import Blog_Banner from "@/assets/images/blog_banner.png";
const Blog: React.FC = () => {
  // const blog = blogs[0];

  return (
    <section className="bg-[#00021a] min-h-screen w-full text-white">
        <div className="relative">
                <h1 className="absolute top-1/2 left-1/10 transform -translate-y-1/2 -translate-x-1/2  text-2xl sm:text-3xl md:text-4xl lg:text-6xl  z-10 px-4 text-[#ffbf00] font-light font-poppins">
                    Blog
                </h1>
                <img src={Blog_Banner} alt="Review Banner" className="w-full h-auto object-cover" />
            </div>



        {blogs && blogs.map((blog)=>(
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-16">
           <div className="space-y-6">
             <p className="text-[#c1c5d1]">{blog.dateFormatted}</p>
             <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
               {blog.title}
             </h1>
             <p className="text-[#c1c5d1] text-lg leading-8 max-w-2xl">
               {blog.excerpt}
             </p>
             <Link
               to={`/blogs/${blog.slug}`}
               className="inline-block mt-2 text-white border-b-1 border-[#ffbf00] hover:opacity-90 font-medium"
             >
               READ MORE
             </Link>
           </div>
   
           <div className="aspect-[16/10] w-full overflow-hidden rounded-md">
             <img
               src={blog.heroImage}
               alt={blog.title}
               className="w-full h-full object-cover"
             />
           </div>
         </div>
        ))}

     
      
    </section>
  );
};

export default Blog;
 