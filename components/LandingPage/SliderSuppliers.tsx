"use client";
import React, { useRef } from "react";
import SpecialTitle from "../SpecialTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles

import supplay1 from "../../app/img/supplay/supplay1.png";
import supplay2 from "../../app/img/supplay/supplay2.png";
import supplay3 from "../../app/img/supplay/supplay4.png";
import supplay4 from "../../app/img/supplay/supplay5.png";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const images = [
  supplay1,
  supplay2,
  supplay3,
  supplay4,
  supplay1,
  supplay2,
  supplay3,
  supplay4,
  supplay3,
  supplay4,
  supplay1,
  supplay2,
  supplay3,
  supplay4,
]; // Array of images

export default function SliderSuppliers() {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView

  return (
    <section className="flex SliderSuppliers  overflow-hidden min-h-screen flex-col mx-auto gap-20">
      <div>
        <SpecialTitle
          rate={80}
          title=" ..أهم الموردين"
          par="نعمل مع نخبة من الموردين الموثوقين لضمان توفير منتجات عالية الجودة بأسعار تنافسية. شركاؤنا من الموردين يتم اختيارهم بعناية لضمان تنوع المنتجات وتلبية جميع احتياجاتك."
        />
      </div>
      <motion.div
        ref={ref} // Attach ref to the motion.div
        initial={{ x: "100%", opacity: 0 }} // Initial animation state
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
        className="slider-container overflow-hidden"
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={8}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            1024: {
              slidesPerView: 7,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="p-5 cursor-grab border-white w-full text-white">
                <Image
                  src={image}
                  className="rounded-3xl object-contain"
                  alt={`Supplier ${index}`}
                />
                <h1 className="mt-2 text-center font-bold text-lg text-black">
                  Nature
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
