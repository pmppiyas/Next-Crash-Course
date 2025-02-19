import assets from "@/assets/assets";

function BlogDetails({ params }) {
  const { id } = params;
  const blogs = assets.blogs;
  const blog = blogs.find((blog) => blog.id == id);

  if (!blog || id > 4) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h2>Blog: {blog.title}</h2>
      <p>The blog id is: {id}</p>
      <p>Description: {blog.description}</p>
    </div>
  );
}

export default BlogDetails;
