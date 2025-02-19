import React from "react";

function BlogLayout({ children }) {
  return (
    <div className="bg-gray-300 h-[500px] w-full flex flex-col items-center">
      <h2 className="text-3xl font-medium my-4">Blog Page</h2>
      {children}
    </div>
  );
}

export default BlogLayout;
