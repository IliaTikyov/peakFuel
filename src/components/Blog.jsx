import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section>
      <div className="space-y-8">
        <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
          Popular Blogs
        </h1>

        <div className="flex gap-4 overflow-x-auto px-6 scrollbar-hide">
          {blogs.map((b) => (
            <BlogCard key={b.id} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
