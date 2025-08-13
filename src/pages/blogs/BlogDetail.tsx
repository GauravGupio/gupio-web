import React from "react";
import { useParams, Link } from "react-router";
import { blogs } from "@/pages/blogs/blogs-data";
import gupio_banner from '../../assets/images/slide_2.png'
const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#00021a] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="mb-4">Blog not found.</p>
          <Link to="/" className="text-[#ffbf00]">Go Home</Link>
        </div>
      </div>
    );
  }

  // Parse numbered sections from blog.content like:
  // "1. Title:\nParagraph...\n\n2. Next Title:\nParagraph..."
  const sections = React.useMemo(() => {
    const parsed: { number: string; title: string; body: string }[] = [];
    const regex = /(\d+)\.\s*([^\n:]+):\s*\n([\s\S]*?)(?=\n\s*\d+\.\s*[^\n:]+:|$)/g;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(blog.content)) !== null) {
      parsed.push({ number: match[1], title: match[2], body: match[3].trim() });
    }
    return parsed;
  }, [blog.content]);

  return (
    <section className="bg-[#00021a] min-h-screen w-full text-white">
        <div className="relative">
                <h1 className="absolute top-1/2  left-10 text-xl sm:text-3xl md:text-4xl lg:text-5xl  z-10 px-4 text-[#ffbf00] font-light font-poppins">
                {blog.title}
                </h1>
                <img src={gupio_banner} alt="Review Banner" className="w-full h-[400px] object-cover" />
            </div>
      <div className="max-w-5xl mx-10 px-6 py-16">
        <p className="text-[#c1c5d1] mb-4">Posted on:-{blog.dateFormatted}</p>
        {/* <h1 className="text-4xl md:text-5xl font-semibold mb-6">{blog.title}</h1> */}
        <div className="aspect-[16/10] w-full overflow-hidden rounded-md mb-8">
          <img src={blog.heroImage} alt={blog.title} className="w-full h-full object-cover" />
        </div>
        {sections.length > 0 ? (
          <div className="max-w-5xl space-y-10 md:space-y-14">
            {sections.map((section) => (
              <div key={section.number} className="space-y-4">
                <h2 className="text-white font-bold uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl">
                  {section.number}. {section.title}:
                </h2>
                <p className="text-[#c1c5d1] text-base sm:text-lg leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <article className="prose prose-invert max-w-none">
            <p>{blog.content}</p>
          </article>
        )}
        <div className="mt-8">
          <Link to="/blogs" className="text-[#ffbf00]">Back</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;

