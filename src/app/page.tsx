import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import LatestProducts from "@/components/LatestProducts/LatestProducts";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    // cache: "no-store",
    next : {
      revalidate: 30,
    }
  });
  const blogs = await res.json();
  // console.log(blogs)
  const response = await fetch("http://localhost:5000/tshirts", {
    // cache: "no-store",
    next : {
      revalidate: 30,
    }
  });
  const products = await response.json();

  return (
    <>
      <LatestBlogs blogs={blogs}/>
      <LatestProducts products={products}/>
    </>
  );
};

export default HomePage;
