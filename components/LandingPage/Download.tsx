import React, { useRef } from "react";

import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa";
import download from "../../app/img/dowload/download.png";
import icon1 from "../../app/img/dowload/icon1.png";
import icon2 from "../../app/img/dowload/icon2.png";
import icon3 from "../../app/img/dowload/icon3.png";
import Image from "next/image";
import SpecialTitle from "../SpecialTitle";
import { motion, useInView } from "framer-motion";

export default function Download() {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView

  return (
    <div className="bg-[#434343] overflow-hidden min-h-screen relative grid grid-cols-2  text-center">
      <Image alt="icon2" src={icon2} className="absolute top-0 left-0    " />
      <Image
        alt="icon1"
        src={icon1}
        className="absolute translate-y-1/2 right-0    "
      />
      <Image
        alt="icon3"
        src={icon3}
        className="absolute bottom-0 right-0    "
      />
      <motion.div
        ref={ref} // Attach ref to the motion.div
        initial={{ x: "-100%", opacity: 0 }} // Initial animation state
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 1, ease: "easeIn" }} // Smooth transition
        className="flex relative z-10 col-span-1 gap-6 flex-col justify-center items-center "
      >
        <div className="relative gap-6 flex flex-col mx-auto justify-center items-center">
          <h2 className={`relative z-10 font-extrabold text-white text-[32px]`}>
            <div className="w-[72px] h-[72px] absolute right-0 translate-x-1/2 -translate-y-1/4 rounded-full">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(#FF691F 0% 25%, #6b6b6b45 60% 100%)`,
                }}
              ></div>
              <div className="absolute inset-[2px] bg-white rounded-full"></div>
            </div>

            <div className="w-[68px] h-[69px] bg-[#434343] absolute translate-x-1/2 -translate-y-1/4 rounded-full right-0"></div>

            <span className="relative z-10">قم بتحميل التطبيق الخاص بنا"</span>
          </h2>
          <p className="text-[14px] text-white max-w-xl text-center font-light">
            حمّل تطبيقنا مجاناً الآن لتجربة تسوق مبتكرة وسهلة أينما كنت. استمتع
            بالعروض الحصرية والتنبيهات الفورية مباشرة على هاتفك.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <Button className="flex items-center gap-2  px-6 py-3 rounded-lg">
            <FaArrowLeft className="text-white" />
            تحميل الان من جوجل ستور
          </Button>
          <Button className="flex items-center gap-2 px-6 py-3 rounded-lg">
            <FaArrowLeft className="text-white" />
            تحميل الان من آب ستور
          </Button>
        </div>
      </motion.div>
      <motion.div
        ref={ref} // Attach ref to the motion.div
        initial={{ x: "100%", opacity: 0 }} // Initial animation state
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 1, ease: "easeIn" }} // Smooth transition
        className="flex relative z-10 col-span-1 justify-center items-center"
      >
        <Image
          src={download}
          alt=" تطبيق تحميل"
          className="max-w-full h-auto"
        />
      </motion.div>
    </div>
  );
}
