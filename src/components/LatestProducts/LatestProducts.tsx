import { Product } from "@/types";
import LatestProductCard from "../ui/LatestProductCard";
import Link from "next/link";

const LatestProducts = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-[90%] mx-auto  mt-24 mb-14">
      <h1 className="text-4xl text-center my-4 mb-8">
        Latest Products From <span className="text-accent">Blogiz</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:gap-4 md:gap-4 gap-8 my-5">
        {products.slice(0, 3).map((product) => (
          <LatestProductCard
            key={product.id}
            shirt={product}
          ></LatestProductCard>
        ))}
      </div>
      {/* <p className="text-xl text-center text-accent w-2/4 mx-auto">
        <i>See All</i>
      </p> */}
      <Link href={`/tshirts/`} className="flex justify-center mt-6">
        <button className="btn btn-accent text-white hover:text-black">See More</button>
      </Link>
    </div>
  );
};

export default LatestProducts;
