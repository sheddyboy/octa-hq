"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import HeroForm from "@/components/HeroForm";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { X } from "lucide-react";

interface NavProps {}

export default function Nav({}: NavProps) {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const childrenVariant: Variants = {
    initial: { opacity: 0, y: "70px" },
    animate: { opacity: 1, y: "0px", transition: { duration: 0.7 } },
  };
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <nav className="relative z-[1]">
      <div className="container relative z-[1] flex flex-col bg-white">
        <div className="flex items-center justify-between pb-[18px] pt-[20px] max-sm:grid max-sm:grid-cols-3 max-sm:justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.7 } }}
            className="hidden max-sm:block"
          >
            <Button
              variant="link"
              className="pl-0"
              onClick={() => {
                setMobileNavOpen((prev) => !prev);
              }}
            >
              {mobileNavOpen ? (
                <Image
                  alt="hamburger-icon"
                  src="/close-icon.svg"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  alt="hamburger-icon"
                  src="/hamburger-icon.svg"
                  width={25}
                  height={18}
                />
              )}
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-20px" }}
            animate={{ opacity: 1, x: "0px", transition: { duration: 0.7 } }}
          >
            <Link href="/" className="block max-sm:hidden">
              <Image alt="logo" src="/octa-logo.svg" width={158} height={36} />
            </Link>
            <Link
              href="/"
              className="hidden max-sm:flex max-sm:items-center max-sm:justify-center"
            >
              <Image
                alt="logo"
                src="/logo-mobile.svg"
                width={144}
                height={22}
              />
            </Link>
          </motion.div>
          <motion.div
            variants={parentVariant}
            initial="initial"
            animate="animate"
            className="flex items-center gap-1.5 max-sm:hidden"
          >
            <motion.div variants={childrenVariant}>
              <Button
                variant="link"
                className="px-5 py-2.5 text-[16px] font-normal"
              >
                Contact us
              </Button>
            </motion.div>
            <motion.div variants={childrenVariant}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-[30px] px-5 py-2.5 text-[16px] font-normal leading-[20.16px]">
                    Join waitlist
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-[17px] border-0 bg-[#222529]">
                  <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                    <X className="h-4 w-4 text-white" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                  <HeroForm />
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="h-[1px] w-full bg-navBorder"
        ></motion.div>
      </div>
      <motion.div
        initial={{ y: "-120%" }}
        animate={{ y: mobileNavOpen ? "0%" : "-120%" }}
        className="absolute hidden w-full flex-col items-center justify-center gap-[22px] bg-white py-[20px] text-center font-poppins text-[14px] font-medium leading-[21px] drop-shadow-navCard max-sm:flex"
      >
        <Dialog>
          <DialogTrigger asChild>
            <span className="custom-text-color">Join waitlist</span>
          </DialogTrigger>
          <DialogContent className="rounded-[17px] border-0 bg-[#222529]">
            <HeroForm />
          </DialogContent>
        </Dialog>

        <span className="text-[#8E8C8C]">Contact us</span>
      </motion.div>
    </nav>
  );
}
