import React from "react";
import { Button } from "@/components/ui/button";
import Review_Banner from "../../assets/images/review_banner.png";
import { reviewsData, type Review } from "../../lib/reviews-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel.tsx";
import avtar from "../../assets/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg";
import Statistics from "@/components/Statistics.tsx";
import TrustedClients from "@/components/TrustedClients.tsx";
import PartnerBanner from "./PartnerBanner.tsx";

const Review: React.FC = () => {
  return (
    <div className="bg-[#00021b] min-h-screen w-full">
      <div className="relative">
        <h1 className="absolute top-1/2 left-1/5 transform -translate-y-1/2 -translate-x-1/2  text-2xl sm:text-3xl md:text-4xl lg:text-6xl  z-10 px-4 text-[#ffbf00] font-poppins">
          Reviews
        </h1>
        <img
          src={Review_Banner}
          alt="Review Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-[#ffbf00] text-center mb-12">
          What Our Clients Say
        </h2>

        <div className=" mx-auto w-[95%]">
          <Carousel
            className="w-full"
            autoplay={true}
            autoplayInterval={3000}
            buttonSize="custom"
            customButtonSize="w-14 h-14"
          >
            <CarouselContent>
              {reviewsData.map((review) => (
                <CarouselItem
                  key={review.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-6 bg-white rounded-lg shadow-lg h-64 flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <img
                        className="w-20 h-20 bg-gray-300 rounded-full mr-4"
                        src={avtar}
                        alt="avatar"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {review.author}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {review.position}, {review.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 flex ">
                      <p className="text-gray-700">"{review.text}"</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="ghost"
              className="bg-[#ffbf00] hover:bg-[#e6ac00] text-black border-none shadow-md p-0 left-4 md:left-6"
            />
            <CarouselNext
              variant="ghost"
              className="bg-[#ffbf00] hover:bg-[#e6ac00] text-black border-none shadow-md p-0 right-4 md:right-6"
            />
          </Carousel>
        </div>
      </div>

      <div className="text-center mt-6">
        <Button variant="yellow" size="lg" className="font-bold">
          EXPLORE OUR SERVICES
        </Button>
      </div>

      <Statistics />
      <TrustedClients />
      <PartnerBanner />
    </div>
  );
};

export default Review;
