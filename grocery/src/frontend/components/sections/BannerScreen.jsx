import React from "react";

// === IMPORTANT ===
// REPLACE THIS with the path to your wide banner image in the 'public' folder.
// This image should have the green bg, smoke, and products all in one.
const bannerImageUrl = "/blog/blog_1_1.jpg";

const PaanBanner = () => {
  const bannerStyle = {
    backgroundImage: `url('${bannerImageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    // 1. The main section is 'w-full' for the full-bleed effect.
    // It has a set height that changes responsively.
    <section className="w-full h-64 md:h-72 lg:h-80 mb-8" style={bannerStyle}>
      {/* 2. A 'container' div keeps the text content aligned 
             with the rest of your site's layout. */}
      <div className="container mx-auto px-4 h-full">
        {/* 3. This flex container positions your content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-start">
          {/* Text Content */}
          <h2
            className="text-6xl md:text-5xl font-bold text-white"
            // Added a text shadow for better readability on a busy image
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
          >
            Paan corner
          </h2>
          <p
            className="text-2xl md:text-4xl text-white mt-2"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}
          >
            Your favourite paan shop is now online
          </p>

          {/* Button: Styled to match your image */}
          <a
            href="/shop-paan" // Change this link to your paan category
            className="mt-6 px-6 py-2 bg-white text-green-700 font-semibold rounded-lg shadow-md transition-colors hover:bg-gray-100"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default PaanBanner;
