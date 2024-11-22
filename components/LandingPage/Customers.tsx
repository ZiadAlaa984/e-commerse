"use client";
import SpecialTitle from "../SpecialTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { IoStarSharp } from "react-icons/io5";
import Image from "next/image";
import icon1 from "../../app/img/customers/098.png";
import icon2 from "../../app/img/customers/99.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Customers() {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView

  return (
    <section className="flex Customers relative min-h-screen flex-col max-w-screen-xl bg-[#FFFFFF] mx-auto gap-20">
      <SpecialTitle
        rate={90}
        title=" ...تعرف علي آراء العملاء "
        par={`اطلع على تجارب عملائنا واستمع إلى آرائهم حول جودة منتجاتنا وخدماتنا. نلتزم بتقديم تجربة تسوق استثنائية، وهذا ما يعكسه رضا عملائنا.`}
      />
      <motion.div
        ref={ref} // Attach ref to the motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
        className="absolute  right-0     "
      >
        <Image alt="icon2" src={icon2} className="w-full" />
      </motion.div>
      <motion.div
        ref={ref} // Attach ref to the motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
        className="absolute left-0 -translate-y-1/2       "
      >
        <Image alt="icon1" src={icon1} className="w-full" />
      </motion.div>

      <motion.div
        ref={ref} // Attach ref to the motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}} // Animate when in view
        transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
      >
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="w-[854px] relative flex  justify-end p-3 bg-white border-[#DDDDDD] mx-auto min-h-[420px] border-4 border-dashed rounded-tl-3xl rounded-br-3xl">
                <div className="bg-[#F05B10] w-[385px] p-6 h-[352px] rounded-tl-3xl rounded-br-3xl">
                  <div className="flex justify-center gap-3 items-center">
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <h4 className="font-bold text-white">محمود الشربيني</h4>
                      <ul className="flex gap-1 justify-end items-center">
                        {[...Array(5)].map((_, starIndex) => (
                          <li key={starIndex}>
                            <IoStarSharp className="text-yellow-500" />
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                    </Avatar>
                  </div>
                </div>
                <div className="absolute w-[782px] p-6 shadow-xl border translate-x-1/2 right-1/2 top-1/2 -translate-y-1/2 h-[220px] bg-white rounded-2xl">
                  <p className="text-black text-right">
                    كانت تجربتي مع شركة [اسم الشركة] ممتازة. من أول ما تواصلت
                    معاهم لحد ما استلمت البضاعة، كان التعامل احترافي وسلس.
                    أسعارهم منافسة جدًا مقارنة بالسوق، وبيوفروا خيارات متنوعة من
                    المنتجات. كمان، خدمة العملاء كانوا متعاونين جدًا وردودهم
                    سريعة على أي استفسار. التوصيل كان أسرع مما توقعت، والمنتجات
                    وصلت بجودة عالية وتغليف ممتاز. أكيد هكرر التعامل معاهم
                    وأرشحهم لأي حد بيدور على مورد موثوق للشراء بالجملة.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}
