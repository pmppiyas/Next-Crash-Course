import assets from "@/assets/assets";
import Link from "next/link";
import React from "react";

function Blogs() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4 ">
        {assets.blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blogs;
