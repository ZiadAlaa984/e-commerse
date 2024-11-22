"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa";
import logo from "../../app/img/logo.png";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
export default function Footer() {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView
  return (
    <footer className="bg-[#434343] overflow-hidden py-32 text-white  shadow-md">
      <div className="  py-6 max-w-screen-xl gap-16  mx-auto grid grid-cols-5">
        <motion.div
          ref={ref} // Attach ref to the motion.div
          initial={{ x: "-100%", opacity: 0 }} // Initial animation state
          animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
          transition={{ duration: 1, ease: "easeIn" }} // Smooth transition
          className="col-span-1  flex flex-col gap-6"
        >
          <h4 className="font-bold  text-xl">كن تاجر معانا</h4>
          <div>
            <Button className="flex gap-2">
              <FaArrowLeft className="text-sm text-white" />
              انضم الان
            </Button>
          </div>
        </motion.div>
        <motion.div
          ref={ref} // Attach ref to the motion.div
          initial={{ x: "-100%", opacity: 0 }} // Initial animation state
          animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
          transition={{ duration: 1, ease: "easeIn" }} // Smooth transition
          className="col-span-1  flex flex-col gap-6"
        >
          <h4 className="font-bold text-end  text-xl">حسابي</h4>
          <ul className="flex flex-col items-end  gap-3">
            <li>الطلبات</li>
            <li>قائمة المفضلة</li>
            <li>الخروج</li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref} // Attach ref to the motion.div
          initial={{ x: "100%", opacity: 0 }} // Initial animation state
          animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
          transition={{ duration: 1, ease: "easeIn" }} // Smooth transition
          className="col-span-1  flex flex-col gap-6"
        >
          <h4 className="font-bold text-end text-xl">بيانات التواصل</h4>
          <ul className="flex flex-col items-end gap-3">
            <li>العنوان : الرياض</li>
            <li>رقم الهاتف:</li>
            <li> info@ghith.sa : البريد الإلكتروني </li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref} // Attach ref to the motion.div
          initial={{ x: "100%", opacity: 0 }} // Initial animation state
          animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
          transition={{ duration: 1, ease: "easeIn" }} // Smooth transition
          className="col-span-2 items-end gap-6 flex flex-col"
        >
          <Link className="text-3xl" href="#">
            <Image src={logo} alt="logo" />
          </Link>
          <p>اسواق الجملة كلها في منصة واحدة</p>

          <form className="w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block placeholder:text-end w-full outline-none p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#FF691F] focus:border-[#FF691F] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF691F] dark:focus:border-[#FF691F]"
                placeholder="البريد الالكتروني"
                required
              />
              <button
                type="submit"
                className="text-white flex gap-2 items-center absolute start-2.5 bottom-2.5 bg-[#FF691F] hover:bg-[#FF691F] focus:ring-4 focus:outline-none focus:ring-[#FF691F] font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-[#FF691F] dark:focus:ring-[#FF691F]"
              >
                انضم الان
                <FaArrowLeft className="text-sm text-white" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </footer>
  );
}
