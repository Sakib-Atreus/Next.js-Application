import Link from "next/link";

export const metadata = {
  title: "Next.js | Shoes",
  description: "This is shoes page",
};

const fetchShoes = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch shoes");
  }
  return res.json();
};

const ShoesPage = async () => {
  const shoes = await fetchShoes();

  return (
    <div>
      <h1 className="text-4xl text-center my-6">All Shoes</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center lg:gap-4 md:gap-4 gap-8 p-5 max-w-7xl mx-auto">
        {shoes?.map((shoe, index) => (
          <div
            key={shoe?.id || index}
            className="card bg-base-100 w-96 shadow-xl"
          >
            <figure>
              <img
                src="https://media.architecturaldigest.com/photos/56f1b12edc71add34a9643d5/16:9/w_2560%2Cc_limit/nike-debuts-first-ever-self-lacing-shoe-01.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {shoe?.title}
                <div className="badge badge-accent text-white">
                  $ {shoe?.price}
                </div>
              </h2>
              <p>{shoe?.description}</p>
              <div className="card-actions justify-end">
                <Link href={`/shoes/${shoe?.id}`}>
                  <button className="btn btn-outline btn-accent">
                    Buy Now
                  </button>
                </Link>
                <Link href={`/shoes/${shoe?.id}`}>
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

export default ShoesPage;
