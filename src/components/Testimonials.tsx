import React from "react";
import Typography from "@/components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import testDefault1 from "@/assets/images/Mask group (1).png";
import testDefault2 from "@/assets/images/Mask group (2).png";
import testDefault3 from "@/assets/images/Mask group (3).png";
import leftArrow from "@/assets/svg/leftSideArrow.svg";
import rightArrow from "@/assets/svg/rightSideArrow.svg";
import quotesImg from "@/assets/images/quotes.png";

type Testimonial = {
  id: number;
  name: string;
  text: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sitanchu",
    text:
      "Partnering with Gupio solved our Daily parking challenges. Their valet service and smart parking solutions made a huge difference. We’re truly happy and satisfied with the seamless experience. Thank you!",
    avatar: testDefault1,
  },
  {
    id: 2,
    name: "Manoj KL",
    text:
      "I used to spend so much time looking for parking in the city center. Thanks to Gupio, it’s now quick and easy. Their reliable and secure services saves my time, reduce stress and make my daily routine much better",
    avatar: testDefault2,
  },
  {
    id: 3,
    name: "Mahesh",
    text:
      "Gupio has transformed my daily commute! I can now secure a parking spot near my office in advance and never have to worry about being late again. The ease of use and security they offer is priceless. Thanks, Gupio!",
    avatar: testDefault3,
  },
  {
    id: 4,
    name: "Abhishek",
    text:
      "Partnering with Gupio solved our Daily parking challenges. Their valet service and smart parking solutions made a huge difference. We’re truly happy and satisfied with the seamless experience. Thank you!",
    avatar: testDefault1,
  },
  {
    id: 5,
    name: "Ashwini",
    text:
      "I used to spend so much time looking for parking in the city center. Thanks to Gupio, it’s now quick and easy. Their reliable and secure services saves my time, reduce stress and make my daily routine much better",
    avatar: testDefault2,
  },
  {
    id: 6,
    name: "Vaibhav",
    text:
      "Gupio has transformed my daily commute! I can now secure a parking spot near my office in advance and never have to worry about being late again. The ease of use and security they offer is priceless. Thanks, Gupio!",
    avatar: testDefault3,
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className="shadow-2xl relative mx-auto hover:scale-[1.02] transition-transform duration-300 overflow-visible"
      style={{
        maxWidth: 348,
        height: 620,
        backgroundColor: "#FFBF00",
        borderRadius: 21,
      }}
    >
      {/* Avatar overlapping top */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: -95 }}
      >
        <img
          src={item.avatar || testDefault1}
          alt={item.name}
          className="w-[190px] h-[190px] rounded-full object-cover"
        />
      </div>

      <div className="p-8 pt-[120px] relative h-full">
        {/* Quote mark */}
        <img
          src={quotesImg}
          alt="quote"
          className="absolute left-8 top-8 w-10 opacity-50"
        />

        <Typography
          variant="p"
          style={{
            fontFamily: "Manrope",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: "167%",
            color: "#000000",
            textAlign: "left",
          }}
        >
          {item.text}
        </Typography>

        <div className="absolute bottom-8 left-0 right-0 pr-8">
          <Typography
            variant="h3"
            className="text-right"
            style={{
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: 32,
              color: "#191919",
            }}
          >
            -{item.name}
          </Typography>
        </div>
      </div>
    </div>
  );
}

const Testimonials: React.FC = () => {
  const [api, setApi] = React.useState<any>(null);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="bg-[#0A0A1A] text-white py-16 sm:py-18 lg:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-3xl sm:text-5xl lg:text-6xl font-semibold capitalize text-[#FFBF00]"
            style={{ fontFamily: "Poppins" }}
          >
            TESTIMONIALS
          </Typography>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Custom navigation arrows to match design */}
          <button
            aria-label="Previous"
            onClick={scrollPrev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <img src={leftArrow} alt="prev" className="w-6 h-6" />
          </button>
          <button
            aria-label="Next"
            onClick={scrollNext}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <img src={rightArrow} alt="next" className="w-6 h-6" />
          </button>

          <Carousel
            className="px-6"
            setApi={setApi}
            opts={{ align: "start", loop: false, skipSnaps: false }}
          >
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="flex justify-center pt-28">
                    <TestimonialCard item={item} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="text-center mt-16">
          <a href="/reviews">
            <button className="bg-yellow-400 text-black font-bold py-4 px-8 rounded-2xl hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Reviews
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

