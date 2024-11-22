import React, { useRef } from "react";
import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import product1 from "../../app/img/products/Frame2.png";
import product2 from "../../app/img/products/Frame.png";
import product3 from "../../app/img/products/Frame1.png";
import product4 from "../../app/img/products/Frame6.png";
import product5 from "../../app/img/products/Frame3.png";
import product6 from "../../app/img/products/Frame7.png";
import product7 from "../../app/img/products/Frame5.png";
import product8 from "../../app/img/products/frame_8.png";
import product9 from "../../app/img/products/Frame8.png";
import product10 from "../../app/img/products/Frame4.png";
import img1 from "../../app/img/hero/046.png";
import img2 from "../../app/img/hero/078.png";
import img3 from "../../app/img/hero/087.png";
import img4 from "../../app/img/hero/101.png";
import bg from "../../app/img/hero/bg.png";
import { useInView, motion } from "framer-motion";
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView

  return (
    <section className="h-screen  relative overflow-hidden bg-gradient-to-b from-[rgba(160,160,160,0)] to-[rgba(81,81,81,0.37)]  pt-[211px] flex flex-col gap-10">
      <Image alt="bg" src={bg} className="absolute right-0 left-0 w-full " />
      <div className="flex relative z-10 justify-center gap-6 items-center flex-col">
        <div className="relative">
          <motion.div
            ref={ref}
            initial={{ x: -200, opacity: 0 }} // تتحرك من اليسار
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute -left-24 -translate-y-1/2 w-[59.09px] h-[58px]"
          >
            <Image alt="img1" src={img1} className="w-full" />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: 200, opacity: 0 }} // تتحرك من اليمين
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute -right-24 -translate-y-1/4 w-[71.38px] h-[100px]"
          >
            <Image alt="img2" src={img2} className="w-full" />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ x: -100, y: 128, opacity: 0 }} // تتحرك من اليسار
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute -left-24 translate-y-32 w-[100px] h-[43.69px]"
          >
            <Image alt="img4" src={img4} className="w-full" />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ x: 100, y: 110, opacity: 0 }} // تتحرك من اليمين
            animate={isInView ? { x: 20, y: 110, opacity: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="absolute -right-5 translate-y-32 h-[100px]"
          >
            <Image alt="img3" src={img3} className="w-full" />
          </motion.div>
          <motion.div
            ref={ref} // Attach ref to the motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}} // Animate when in view
            transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
            className="justify-center flex  gap-3   items-center flex-col"
          >
            <h1 className="font-extrabold relative text-[40px]">
              أفضل المنتجات بأسعار الجملة مباشرة من الموردين
            </h1>
            <p className="text-[16px] font-medium max-w-2xl text-center">
              اكتشف مجموعة واسعة من المنتجات عالية الجودة بأسعار تنافسية.سواء
              كنت تدير متجرًا أو تبحث عن صفقات مذهلة، لدينا كل ما تحتاجه لتلبية
              احتياجات
            </p>
            <Button className="flex  gap-2">
              <FaArrowLeft className="text-sm  text-white" />
              استكشف الآن
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={ref}
        initial={{ y: 300, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeIn" }}
        className="grid-cols-5 relative z-10    gap-x-6  grid mx-auto   "
      >
        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full " src={product1} />
          </div>
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full" src={product2} />
          </div>
        </div>
        <div className="col-span-1 pt-10 flex flex-col gap-6">
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full" src={product3} />
          </div>
          <div className="bg-[#ECECEC] shadow-md h-[250px] relative w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image
              alt="img1"
              className="w-full absolute top-0"
              src={product4}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full" src={product5} />
          </div>
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full" src={product6} />
          </div>
        </div>
        <div className="col-span-1 pt-10 flex flex-col gap-6">
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full" src={product7} />
          </div>
          <div className="bg-[#ECECEC] shadow-md h-[250px] relative w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image
              alt="img1"
              className="w-full absolute top-0"
              src={product8}
            />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full" src={product9} />
          </div>
          <div className="bg-[#ECECEC] shadow-md h-[250px] w-[250px] flex justify-center items-center  rounded-[36px]">
            <Image alt="img1" className="w-full" src={product10} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
