import Link from "next/link";

export const metadata = {
  title: "Next.js | T-Shirt",
  description: "This is t-shirt page",
};

const fetchTShirt = async () => {
  const res = await fetch("http://localhost:5000/tshirts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch T-Shirt");
  }
  return res.json();
};

const AllProductPage = async () => {
  const tShirt = await fetchTShirt();

  return (
    <div>
      <h1 className="text-4xl text-center my-6">All T-Shirts</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center lg:gap-4 md:gap-4 gap-8 p-5 max-w-7xl mx-auto">
        {tShirt?.map((shirt, index) => (
          <div
            key={shirt?.id || index}
            className="card bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img src={shirt?.image} alt="Shirt" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {shirt?.title}
                <div className="badge badge-accent text-white">
                  $ {shirt?.price}
                </div>
              </h2>
              <p>{shirt?.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/tshirts/${shirt?.id}`}>
                  <button className="btn btn-outline btn-accent">
                    Buy Now
                  </button>
                </Link>
                <Link href={`/tshirts/${shirt?.id}`}>
                  <button className="btn btn-outline btn-accent">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductPage;
