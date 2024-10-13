"use client"; // Ensure this is a client-side component
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css"; 
import Image from "next/image";

const fetchProductById = async (tshirtId) => {
  const res = await fetch(`http://localhost:5000/tshirts/${tshirtId}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    return undefined;
  }
  return res.json();
};

const ProductDetailsPage = ({ params }) => {
  const { tshirtId } = params;
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductData = async () => {
      const productData = await fetchProductById(tshirtId);
      if (!productData) {
        return notFound();
      }
      setProduct(productData);
    };

    getProductData();
  }, [tshirtId]);

  if (!product) {
    return <div className="w-[90%] mx-auto">
    <Image
      src="https://i.stack.imgur.com/hzk6C.gif"
      width={500}
      height={500}
      alt="loading"
      className="w-96 mx-auto"
    />
  </div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size); 
  };

  const increaseQuantity = () => {
    setQuantity((prevQty) => prevQty + 1); 
  };

  const decreaseQuantity = () => {
    setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    showSuccessToast(`Added to Cart: ${quantity} x ${selectedSize}`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast.error("Please select a size", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    showSuccessToast(`Purchased Successfully: ${quantity} x ${selectedSize}`);
  };

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-10 flex flex-col lg:flex-row items-start gap-10">
      <div className="lg:w-1/2 w-full">
        <Zoom>
          <figure className="border rounded-lg shadow-md">
            <img
              src={product?.image || "https://via.placeholder.com/400"}
              alt={product?.title}
              className="rounded-lg"
            />
          </figure>
        </Zoom>
      </div>

      <div className="lg:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-6">{product?.title}</h1>
        <p className="text-gray-500 mb-4">SKU: {product?.sku || "N/A"}</p>

        <div className="flex items-center gap-4 mb-4">
          {product?.discountedPrice && (
            <p className="line-through text-gray-500">$ {product?.price}</p>
          )}
          <p className="text-2xl font-bold text-red-500">
            $ {product?.discountedPrice || product?.price}
          </p>
        </div>

        <p className="text-lg mb-4">
          <strong>Brand:</strong> {product?.brand || "N/A"}
        </p>

        <p className="text-lg mb-6">
          <strong>Status:</strong>{" "}
          <span className={`text-${product?.inStock ? "green" : "red"}-500`}>
            {product?.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>

        <div className="mb-6">
          <p className="text-lg font-semibold mb-2">T-Shirt Size</p>
          <div className="flex gap-4">
            {["M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => handleSizeClick(size)}
                className={`border px-4 py-2 ${
                  selectedSize === size
                    ? "bg-accent text-white"
                    : "hover:bg-gray-200"
                } focus:outline-none`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-lg font-semibold">Quantity:</label>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={decreaseQuantity}
              className="px-4 py-2 border hover:bg-gray-200 focus:outline-none"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border py-2"
            />
            <button
              onClick={increaseQuantity}
              className="px-4 py-2 border hover:bg-gray-200 focus:outline-none"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="btn btn-accent text-white hover:text-black py-2 px-8"
          >
            Add To Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="bg-black text-white py-2 px-10 rounded-lg hover:text-accent hover:bg-gray-800"
          >
            Buy now
          </button>
        </div>

        <div className="flex gap-4 mt-6">
          <a href="https://www.facebook.com/" className="hover:opacity-75 text-2xl">
            <IoLogoFacebook />
          </a>
          <a href="https://x.com/" className="hover:opacity-75 text-2xl">
            <IoLogoTwitter />
          </a>
          <a href="https://www.linkedin.com/" className="hover:opacity-75 text-2xl">
            <IoLogoLinkedin />
          </a>
          <a href="https://mail.google.com/" className="hover:opacity-75 text-2xl">
            <MdEmail />
          </a>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductDetailsPage;
