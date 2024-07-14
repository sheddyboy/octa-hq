"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SuccessProps {}

export default function Success({}: SuccessProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-1 flex-col items-center justify-center"
    >
      <div className="container flex flex-col items-center justify-center gap-[50px]">
        <Image alt="success-icon" src="/success.svg" width={172} height={172} />
        <span className="text-center font-inter text-[40px] font-medium leading-[48px] text-black">
          Thank you for ordering a <br /> ticket from us
        </span>
      </div>
    </motion.main>
  );
}
