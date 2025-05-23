import { Swiper, SwiperSlide } from "swiper/react";
import Story from "../ui/Story";

import Story1Img from "../../assets/images/story-1.png";
import Story2Img from "../../assets/images/story-2.png";
import Story3Img from "../../assets/images/story-3.png";

import "swiper/swiper-bundle.css";

const Stories: React.FC = () => {
  return (
    <section aria-label="Stories" className="lg:py-[100px]">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white mb-10">Our Stories</h2>
        <Swiper
        slidesPerView={3.5}
        spaceBetween={80}
      >
        <SwiperSlide>
          <Story
            img={Story1Img}
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            img={Story2Img}
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            img={Story3Img}
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            img={Story1Img}
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            img={Story2Img}
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            img={Story3Img}
            title="Lorem ipsum dolor"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
  );
};

export default Stories;
