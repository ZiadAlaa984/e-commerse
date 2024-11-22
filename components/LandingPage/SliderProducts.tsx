"use client";
import React, { useRef } from "react";
import { BsCartDash } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SpecialTitle from "../SpecialTitle";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";
import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa";
import product1 from "../../app/img/products/Frame2.png";
import product2 from "../../app/img/products/Frame.png";
import product3 from "../../app/img/products/Frame1.png";
import product5 from "../../app/img/products/Frame3.png";
import product6 from "../../app/img/products/Frame7.png";
import bus from "../../app/img/icons/bus.png";
import product7 from "../../app/img/products/Frame5.png";
import frame1 from "../../app/img/SliderProducts/frame1.png";
import frame2 from "../../app/img/SliderProducts/frame2.png";
import { motion, useInView } from "framer-motion";

export default function SliderProducts() {
  const frame1Ref = useRef(null);
  const frame2Ref = useRef(null);
  const sliderRef = useRef(null);

  const isFrame1InView = useInView(frame1Ref, { once: true });
  const isFrame2InView = useInView(frame2Ref, { once: true });
  const isSliderInView = useInView(sliderRef, { once: true });

  const products = [
    {
      id: 1,
      image: product1,
      price: "300$",
      originalPrice: "500$",
      rating: 4.5,
      reviews: "120k",
      title: "ماكينة القهوة الاحترافية لتحضير قهوة بجودة المقاهي Barista Pro",
      discount: "خصم 40% عند شراء 10 قطع",
    },
    {
      id: 2,
      image: product2,
      price: "250$",
      originalPrice: "400$",
      rating: 4.7,
      reviews: "100k",
      title: "ماكينة صنع القهوة المتقدمة Espresso Maker",
      discount: "خصم 30% عند شراء 5 قطع",
    },
    {
      id: 3,
      image: product3,
      price: "150$",
      originalPrice: "300$",
      rating: 4.2,
      reviews: "80k",
      title: "ماكينة تحضير القهوة الإيطالية Italian Coffee Maker",
      discount: "خصم 25% عند شراء 3 قطع",
    },
    {
      id: 4,
      image: product6,
      price: "150$",
      originalPrice: "300$",
      rating: 4.2,
      reviews: "80k",
      title: "ماكينة تحضير القهوة الإيطالية Italian Coffee Maker",
      discount: "خصم 25% عند شراء 3 قطع",
    },
    {
      id: 5,
      image: product5,
      price: "150$",
      originalPrice: "300$",
      rating: 4.2,
      reviews: "80k",
      title: "ماكينة تحضير القهوة الإيطالية Italian Coffee Maker",
      discount: "خصم 25% عند شراء 3 قطع",
    },
    {
      id: 6,
      image: product7,
      price: "150$",
      originalPrice: "300$",
      rating: 4.2,
      reviews: "80k",
      title: "ماكينة تحضير القهوة الإيطالية Italian Coffee Maker",
      discount: "خصم 25% عند شراء 3 قطع",
    },
    // Add more products as needed
  ];
  return (
    <section className="flex SliderProducts min-h-screen relative flex-col overflow-hidden mx-auto">
      <SpecialTitle
        rate={50}
        title=" ..استكشف أفضل المنتجات"
        par={`نوفر لك كل ما تحتاجه لتسوق ناجح وآمن. استمتع بتجربة تسوق استثنائية مع خدماتنا المصممة خصيصًا لتلبية احتياجاتك`}
      />

      {/* Frame 1 Animation */}
      <motion.div
        ref={frame1Ref}
        initial={{ x: "-100%", opacity: 0 }}
        animate={isFrame1InView ? { x: "0%", opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute right-0 translate-x-1/2"
      >
        <Image alt="frame1" src={frame1} />
      </motion.div>

      {/* Frame 2 Animation */}
      <motion.div
        ref={frame2Ref}
        initial={{ opacity: 0 }}
        animate={isFrame2InView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute left-0 bottom-0 -translate-y-96"
      >
        <Image alt="frame2" src={frame2} />
      </motion.div>

      {/* Slider Animation */}
      <motion.div
        ref={sliderRef}
        initial={{ y: 100, opacity: 0 }}
        animate={isSliderInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-screen relative z-20 product max-w-screen-xl mx-auto"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          navigation
          centeredSlides={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="pt-28 relative z-20">
                <div className="card shadow-md border rounded-2xl overflow-hidden flex flex-col">
                  <div className="bg-[#ECECEC] h-[200px] p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      className=" object-contain"
                    />
                  </div>
                  <div className="flex flex-col p-4 gap-3">
                    <div className="flex justify-between items-center">
                      <p className="flex text-[14px] gap-2">
                        <span>{product.price}</span>
                        <span className="opacity-75">
                          <del>{product.originalPrice}</del>
                        </span>
                      </p>
                      <p className="flex gap-2 items-center">
                        <span className="text-[9.6px]">
                          ({product.reviews})
                        </span>{" "}
                        <span className="flex text-[13px] items-center">
                          {product.rating}{" "}
                          <RiStarSFill className="text-yellow-500 text-[13px]" />
                        </span>
                      </p>
                    </div>
                    <p className="text-[15px] text-right font-bold">
                      {product.title}
                    </p>
                    <p className="text-xs text-right text-[#FF691F]">
                      {product.discount}
                    </p>
                    <div className="flex justify-between gap-1 items-center">
                      <Button className="rounded-xl">
                        <BsCartDash className="text-lg" />
                        إضافه
                      </Button>
                      <Button
                        variant="ghost"
                        className="rounded-xl text-[10px]"
                      >
                        توصيل مجاني{" "}
                        <Image src={bus} alt="bus" className="text-xs" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
