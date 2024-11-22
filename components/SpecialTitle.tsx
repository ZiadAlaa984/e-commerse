import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface SpecialTitleProps {
  title: string;
  par: string;
  rate: number;
  down?: boolean;
  titleClassName?: string;
  parClassName?: string;
  containerClassName?: string;
}

export default function SpecialTitle({
  title,
  down,
  par,
  rate,
  titleClassName = "",
  parClassName = "",
  containerClassName = "",
}: SpecialTitleProps) {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView

  return (
    <motion.div
      ref={ref} // Attach ref to the motion.div
      initial={{ y: -200, opacity: 0 }} // Initial animation state
      animate={isInView ? { y: 0, opacity: 1 } : {}} // Animate when in view
      transition={{ duration: 1.5, ease: "easeIn" }} // Smooth transition
      className={`flex flex-col mx-auto justify-center items-center relative ${containerClassName}`}
    >
      <div className="relative gap-6 flex flex-col mx-auto justify-center items-center">
        <h2
          className={`text-[32px] relative z-10 font-extrabold ${titleClassName}`}
        >
          <div className="w-[72px] h-[72px] absolute right-0 translate-x-1/2 -translate-y-1/4 rounded-full">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `conic-gradient(#FF691F 0% 25%, #6b6b6b45 ${rate}% 100%)`,
              }}
            ></div>
            <div className="absolute inset-[2px] bg-white rounded-full"></div>
          </div>
          {down && (
            <div className="w-[68px] h-[69px] bg-[#434343] absolute translate-x-1/2 -translate-y-1/4 rounded-full right-0"></div>
          )}
          <span className="relative z-10">{title}</span>
        </h2>
        <p
          className={`text-[14px] max-w-xl text-center font-light ${parClassName}`}
        >
          {par}
        </p>
      </div>
    </motion.div>
  );
}
