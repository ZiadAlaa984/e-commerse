"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../app/img/logo.png";
import { useInView, motion } from "framer-motion";
export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null); // Declare ref
  const isInView = useInView(ref, { once: true }); // Use the ref with useInView

  return (
    <motion.nav
      ref={ref}
      initial={{ y: "-100%", opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.3, ease: "easeIn" }}
      className="bg-[#434343] w-full fixed z-50  shadow-md"
    >
      <div className="  py-6 max-w-screen-xl  mx-auto flex justify-between items-center">
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="rounded-xl text-white border border-white"
          >
            {" "}
            انشاء الحساب
          </Button>
          <Button className="rounded-xl"> تسجيل الدخول</Button>
        </div>
        <div>
          <Link className="text-3xl" href="#">
            <Image src={logo} alt="logo" className="" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
