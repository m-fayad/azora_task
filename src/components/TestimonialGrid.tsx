import { useState, useEffect } from "react";
import { TestimonialCard, type TestimonialCardProps } from "./TestimonialCard";
import { SocialIcons } from "./common/SocialIcons";
import { PaginationDots } from "./common/PaginationDots";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials: TestimonialCardProps[] = [
  {
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    authorName: "Arash Pourhabibi",
    authorHandle: "@ArashPourhabibi",
    platform: "twitter",
    variant: "blue",
  },
  {
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    authorName: "Mauricio Sanchez",
    authorHandle: "@m741s",
    platform: "instagram",
    variant: "tan",
  },
  {
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    authorName: "Meredith Sweet",
    authorHandle: "@meredith.sweet.silberstein",
    platform: "facebook",
    variant: "purple",
  },
  {
    text: "Setapp is a game changer for my workflow. I found so many productivity apps I didn't even know I needed.",
    authorName: "John Doe",
    authorHandle: "@johndoe",
    platform: "twitter",
    variant: "blue",
  },
  {
    text: "The selection of apps is incredible. Worth every penny for a developer like me.",
    authorName: "Jane Smith",
    authorHandle: "@janesmith",
    platform: "instagram",
    variant: "tan",
  },
  {
    text: "Finally a subscription that actually provides value. CleanMyMac alone is worth it.",
    authorName: "Bob Wilson",
    authorHandle: "@bobwilson",
    platform: "facebook",
    variant: "purple",
  },
];

export const TestimonialGrid: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const handlePrevClick = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const handleNextClick = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <section className="pt-36 pb-14 px-6 bg-white border-b border-border">
      <div className="container max-w-7xl mx-auto md:px-10 lg:px-16">
        {/* Header Section */}
        <div className="text-background flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">
            Setapp in your words.
          </h2>
          <div className="flex items-center gap-12">
            <p className="text-sm max-md:hidden text-[#26262B]">
              What you say about how Setapp
              <br />
              powers you up.
            </p>
            <SocialIcons variant="testimonials" />
          </div>
        </div>

        {/* Arrows Section */}
        <div className="flex justify-end gap-6 mb-8 text-gray-500">
          <button
            onClick={handlePrevClick}
            className="hover:text-black transition-colors cursor-pointer p-1"
            aria-label="Previous testimonial"
          >
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11.5 21.5L1.5 11.5L11.5 1.5" />
            </svg>
          </button>
          <button
            onClick={handleNextClick}
            className="hover:text-black transition-colors cursor-pointer p-1"
            aria-label="Next testimonial"
          >
            <svg
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1.5 21.5L11.5 11.5L1.5 1.5" />
            </svg>
          </button>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={`${testimonial.authorHandle}-${idx}`}
                className="pl-6 md:basis-1/3"
              >
                <div className="h-full">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12">
          <PaginationDots
            count={testimonials.length}
            activeIndex={current}
            onClick={handleDotClick}
            activeColor="bg-black"
            inactiveColor="bg-[#D5D4D4]"
          />
        </div>
      </div>
    </section>
  );
};
