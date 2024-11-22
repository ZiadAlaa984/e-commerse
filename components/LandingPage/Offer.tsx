import React, { useRef } from "react";
import SpecialTitle from "../SpecialTitle";
import Image from "next/image";
import img1 from "../../app/img/offer/img1.png";
import offer1 from "../../app/img/offer/offer1.png";
import offer2 from "../../app/img/offer/offer2.png";
import offerBG from "../../app/img/offer/offerBG.png";

import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
export default function Offer() {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView

  return (
    <section className="flex flex-col  min-h-screen overflow-hidden  mx-auto gap-20">
      <SpecialTitle
        rate={70}
        title=" ..عروض من أجلك "
        par="استمتع بتخفيضات حصرية ومميزة تم اختيارها بعناية لتناسب احتياجاتك. نوفر لك أفضل العروض على منتجاتك المفضلة بأسعار لا تُقاوم"
      />

      <div className="relative   z-10">
        <motion.div
          ref={ref} // Attach ref to the motion.div
          initial={{ opacity: 0 }} // Initial animation state
          animate={isInView ? { opacity: 1 } : {}} // Animate when in view
          transition={{ duration: 0.3, delay: 1.5, ease: "easeIn" }} // Smooth transition
          className="absolute right-0 left-0 w-full "
        >
          <Image alt="offerBG " className="w-full" src={offerBG} />
        </motion.div>

        <div className=" grid bg-[#FFFFFF] gap-6 relative z-20 max-w-screen-xl mx-auto grid-cols-2">
          <motion.div
            ref={ref} // Attach ref to the motion.div
            initial={{ x: "-100%", opacity: 0 }} // Initial animation state
            animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
            transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
            className="col-span-1 flex flex-col  gap-6  justify-between "
          >
            <div className="relative   overflow-hidden   rounded-3xl  gap-3 flex ">
              <Image
                src={offer1}
                alt="img1"
                className="w-full  object-cover  absolute"
              />
              <div className="p-12    overlay relative flex justify-between flex-col w-full h-full">
                <div className="flex flex-col justify-center h-full items-end  gap-3">
                  <h3 className="text-[40px] text-white font-bold"> 30%خصم</h3>
                  <p className="text-opacity-80 text-white uppercase leading-tight text-[14px]">
                    استمتع بألذ النكهات الصحية والطبيعية بأسعار لا تُقاوم اطلب
                    الآن ووفّر في كل وجبة!"
                  </p>
                  <div>
                    <Button>احصل علي العرض</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="   grid grid-cols-2 gap-6  ">
              <div className="  col-span-1  relative   overflow-hidden  rounded-3xl   flex ">
                <Image
                  src={img1}
                  alt="img1"
                  className="w-full h-full  object-cover  absolute"
                />
                <div className="p-12    overlay relative flex justify-between flex-col w-full h-full">
                  <div className="flex flex-col justify-center h-full items-center  ">
                    <h3 className=" text-white text-[80px] font-bold"> 50%</h3>
                    <div>
                      <Button>احصل علي العرض</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="  col-span-1  relative   overflow-hidden   rounded-3xl  flex ">
                <Image
                  src={img1}
                  alt="img1"
                  className="w-full h-full  object-cover  absolute"
                />
                <div className="p-12    overlay relative flex justify-between flex-col w-full h-full">
                  <div className="flex flex-col justify-center h-full items-center  gap-3">
                    <h3 className=" text-[80px] text-white font-bold"> 50%</h3>
                    <div>
                      <Button>احصل علي العرض</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref} // Attach ref to the motion.div
            initial={{ x: "100%", opacity: 0 }} // Initial animation state
            animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
            transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
            className="col-span-1     relative   overflow-hidden    rounded-3xl  gap-3 flex "
          >
            <Image
              src={offer2}
              alt="offer2"
              className="w-full h-full absolute"
            />
            <div className="p-12    overlay relative flex justify-between  flex-col w-full h-full">
              <div className="flex flex-col justify-end h-full items-end  gap-3">
                <h3 className="text-[40px] text-white font-bold"> 30%خصم</h3>
                <p className="text-opacity-80 text-white uppercase leading-tight text-[14px]">
                  استمتع بألذ النكهات الصحية والطبيعية بأسعار لا تُقاوم اطلب
                  الآن ووفّر في كل وجبة!"
                </p>
                <div>
                  <Button>احصل علي العرض</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
