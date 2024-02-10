"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./slideshow.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Thumbs, Pagination } from "swiper/modules";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const ProductMobileSildeshow = ({ images, title, className }: Props) => {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: "100%",
          height: "500px",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        modules={[FreeMode, Pagination, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image
              alt={title}
              width={600}
              height={500}
              src={`/products/${image}`}
              className="object-fit"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
