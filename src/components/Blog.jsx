import { blogs } from "../data/blogs";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section>
      <div className="space-y-8">
        <h1 className="text-center uppercase font-bold text-2xl tracking-wide">
          Popular Blogs
        </h1>

        <div className="flex justify-between overflow-x-auto space-x-4 px-6">
          {blogs.map((b) => (
            <BlogCard
              id={b.id}
              image={b.image}
              authorImg={b.authorImg}
              title={b.title}
              description={b.description}
              author={b.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
