// src/components/ProductCarousel.jsx
import React, { useRef } from "react";
import ProductCard from "../common/ProductCard"; // Import the card
import { FiChevronRight } from "react-icons/fi"; // Icon for the arrow

// --- Mock Data: Replace this with data from your API ---
const dairyProducts = [
  {
    image: "/product/product_1_1.jpg",
    name: "Verka Standard Fresh Milk",
    deliveryTime: "15 MINS",
    size: "1 ltr",
    price: "63",
  },
  {
    image: "/img/products/amul-gold.png",
    name: "Amul Gold Full Cream Milk",
    deliveryTime: "15 MINS",
    size: "500 ml",
    price: "35",
  },
  {
    image: "/img/products/amul-shakti.png",
    name: "Amul Shakti Fresh Milk",
    deliveryTime: "15 MINS",
    size: "1 ltr",
    price: "63",
  },
  {
    image: "/img/products/verka-cup-curd.png",
    name: "Verka Cup Curd",
    deliveryTime: "15 MINS",
    size: "350 g",
    price: "33",
  },
  {
    image: "/img/products/amul-butter.png",
    name: "Amul Salted Butter",
    deliveryTime: "15 MINS",
    size: "100 g",
    price: "58",
  },
  {
    image: "/img/products/amul-masti-curd.png",
    name: "Amul Masti Pouch Curd",
    deliveryTime: "15 MINS",
    size: "1 kg",
    price: "77",
  },
  {
    image: "/img/products/verka-dahi.png",
    name: "Verka Dahi",
    deliveryTime: "15 MINS",
    size: "500 ml",
    price: "26",
  },
  // Add more products as needed
];

// --- The Main Component ---
const ProductCarousel = ({ title, seeAllLink = "#" }) => {
  const scrollRef = useRef(null);

  // Function to scroll the container
  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            {title}
          </h2>
          <a
            href={seeAllLink}
            className="text-green-600 font-semibold hover:text-green-700"
          >
            see all
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Product List: overflow-x-auto, gap, and scroll-smooth are key */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 py-4 scroll-smooth scrollbar-hide"
          >
            {dairyProducts.map((product) => (
              <ProductCard
                key={product.name}
                image={product.image}
                name={product.name}
                deliveryTime={product.deliveryTime}
                size={product.size}
                price={product.price}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scroll(300)} // Scroll right by 300px
            className="absolute top-1/2 -translate-y-1/2 right-0 
                       bg-white rounded-full h-10 w-10 
                       flex items-center justify-center 
                       shadow-md border border-gray-100 
                       hover:bg-gray-50 transition-transform 
                       translate-x-1/2" // Positions it half-way off-screen
            aria-label="Scroll right"
          >
            <FiChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
