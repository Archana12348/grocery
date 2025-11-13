import React from "react";

const mediaItems = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/z1Um2KVwc6c?si=Yp-yUKibVDZ75CTr",
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/MAm0RLQpYas",
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/abcd1234",
  },
];

const MediaCoverage = () => {
  const getGridCols = () => {
    if (mediaItems.length === 1) return "grid-cols-1 justify-center";
    if (mediaItems.length === 2) return "grid-cols-1 sm:grid-cols-2";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <section className="py-8 md:py-12 px-4 sm:px-8 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-black dark:text-white">
        Our Media Coverage
      </h2>

      <div className={`grid ${getGridCols()} gap-6 w-full`}>
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className={`flex justify-center w-full ${
              mediaItems.length === 1
                ? "max-w-4xl mx-auto"
                : mediaItems.length === 2
                ? "max-w-lg"
                : "max-w-md"
            } aspect-video`}
          >
            <iframe
              src={item.videoUrl}
              title={`Media Video ${item.id}`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-2xl w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaCoverage;
