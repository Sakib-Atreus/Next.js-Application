import Image from "next/image";
// import nextImage from "../../assets/nextjsimage.png"
import nextImage from "@/assets/nextjsimage.png";

export const metadata = {
  title: "Next.js | Gallery",
  description: "This is home page",
};

const GalleryPage = () => {
  return (
    <div className="bg-white text-black mb-4">
      <h1 className="text-4xl font-semibold text-center mt-1 py-4">Image Optimizations</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-2 lg:mx-0 md:mx-0 mx-2">
        <div>
          <h2 className="text-accent font-semibold text-center text-xl my-2">Using Regular Image Tag</h2>
          <img
            src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
            alt="next image"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
        <div>
          <h2 className="text-accent font-semibold text-center text-xl my-2 ">Using Next.js Image Component</h2>
          <Image
            src="https://nextjs.org/api/docs-og?title=Components:%20%3CImage%3E"
            alt="next image"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="my-6 lg:mx-0 md:mx-0 mx-2">
          <h2 className="text-accent font-semibold text-center text-xl my-2">Using Local Image</h2>
          <Image
            src={nextImage}
            alt="next image"
            width={600}
            height={600}
            className="mx-auto"
          />
        </div>
    </div>
  );
};

export default GalleryPage;
