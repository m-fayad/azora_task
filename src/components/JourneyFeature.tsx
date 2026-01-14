import { useState } from "react";

const slides = [
  {
    image: "assets/images/jason-staczek.png",
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    bgColor: "bg-[#765070]",
  },
  {
    image: "assets/images/jason-staczek.png",
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    bgColor: "bg-[#765070]",
  },
  {
    image: "assets/images/jason-staczek.png",
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    bgColor: "bg-[#765070]",
  },
  {
    image: "assets/images/jason-staczek.png",
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    author: "Jason Staczek",
    bgColor: "bg-[#765070]",
  },
];

export const JourneyFeature: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="mx-auto px-6 md:px-11 split-gradient-reverse">
      <div
        className={`relative rounded-3xl min-h-125 lg:min-h-150 group ${currentSlide.bgColor} transition-colors duration-500`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute right-10 top-12 opacity-50 flex items-center gap-10 z-20">
          <button
            onClick={prevSlide}
            className="cursor-pointer hover:opacity-80 transition-opacity p-2"
          >
            <ChevonLeft />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer hover:opacity-80 transition-opacity p-2"
          >
            <ChevonRight />
          </button>
        </div>

        <img
          key={currentIndex}
          src={currentSlide.image}
          alt={currentSlide.author}
          className="opacity-10 lg:opacity-100 absolute end-8 bottom-0 h-[90%] group-hover:scale-105 transition-transform duration-700 ease-out animate-fade-in"
        />

        <div className="absolute left-6 lg:top-30 lg:left-18 z-20 flex flex-col justify-center py-4 md:py-6 lg:p-8 md:w-1/2">
          <h3 className="text-[26px] font-medium text-white leading-tight mb-6 animate-fade-in">
            {currentSlide.text}
          </h3>
          <p className="tracking-wide text-white animate-fade-in">
            {currentSlide.author}
          </p>
        </div>

        {/* Expanding Play Button / Video Container */}
        <div
          onClick={() => !isPlaying && setIsPlaying(true)}
          className={`absolute z-30 transition-all duration-500 ease-in-out bg-white flex items-center justify-center shadow-lg
            ${
              isPlaying
                ? "left-0 bottom-0 w-full h-full rounded-none"
                : "bottom-10 lg:bottom-25 left-6 lg:left-24 w-16 h-16 rounded-full hover:scale-110 cursor-pointer"
            }`}
        >
          {isPlaying ? (
            <div className="w-full h-full relative">
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPlaying(false);
                }}
                className="absolute top-10 right-10 z-50 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Video Placeholder */}
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay
                controls
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          ) : (
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-[#9D9CA2] border-b-8 border-b-transparent ml-1"></div>
          )}
        </div>

        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-5">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                index === currentIndex
                  ? "bg-black"
                  : "bg-[#D5D4D4] hover:bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChevonLeft = () => (
  <svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 21.5L1.5 11.5L11.5 1.5"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ChevonRight = () => (
  <svg
    width="14"
    height="24"
    viewBox="0 0 14 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 21.5L11.5 11.5L1.5 1.5"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
