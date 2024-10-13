import { Product } from "@/types";
import Link from "next/link";

const LatestProductCard = ({ shirt }: { shirt: Product }) => {
  return (
    <div key={shirt?.id} className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={shirt?.image} alt="Shirt"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {shirt?.title}
          <div className="badge badge-accent text-white">$ {shirt?.price}</div>
        </h2>
        <p>{shirt?.description}</p>
        <div className="card-actions justify-end">
          <Link href={`/tshirts/${shirt?.id}`}>
            <button className="btn btn-outline btn-accent">Buy Now</button>
          </Link>
          <Link href={`/tshirts/${shirt?.id}`}>
            <button className="btn btn-outline btn-accent">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProductCard;
