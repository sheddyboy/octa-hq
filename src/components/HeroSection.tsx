"use client";
import Image from "next/image";
import HeroForm from "@/components//HeroForm";
import { motion } from "framer-motion";

interface HeroSectionProps {}

export default function HeroSection({}: HeroSectionProps) {
  return (
    <section className="mb-[22px] grid grid-cols-[1.25fr,1fr] max-lg:grid-cols-1">
      <div className="flex flex-col">
        <div className="mb-[36px] flex flex-col gap-2">
          <motion.span
            initial={{ opacity: 0, y: "-50%" }}
            animate={{
              opacity: 1,
              y: "0%",
              transition: { delay: 0.3, duration: 0.7 },
            }}
            className="font-madeOuterSansAlt text-[56px] font-normal leading-[75px] text-[#CB37B4] max-lg:text-center max-md:text-[36px] max-md:leading-[43px]"
          >
            Free Event <br className="max-lg:hidden" /> Hosting,{" "}
            <span className="text-[#232529]">Instant Ticket Sales</span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: "50%" }}
            animate={{
              opacity: 1,
              y: "0%",
              transition: { delay: 0.4, duration: 0.7 },
            }}
            className="max-w-[636px] text-[24px] font-medium leading-[30.24px] text-[#292626] max-lg:mx-auto max-lg:text-center max-md:max-w-[362px] max-md:text-[14px] max-md:leading-[18px]"
          >
            Create events at no cost. Sell tickets in minutes and engage your
            audience with our intuitive platform.
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "50%" }}
          animate={{
            opacity: 1,
            y: "0%",
            transition: { delay: 0.4, duration: 0.7 },
          }}
          className="drop-shadow-ticketCard mb-[53px] mr-auto flex items-center rounded-[17px] bg-[#222529] px-[36px] max-lg:hidden"
        >
          <HeroForm />
          <div className="relative mx-[30px] flex h-full flex-col justify-between">
            <svg
              width="26"
              height="23"
              viewBox="0 0 26 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative top-[-4px]"
            >
              <path
                d="M5.91726 15.0619C8.97311 20.0686 10.501 22.572 12.7459 22.572C14.9907 22.572 16.5186 20.0686 19.5744 15.0619L21.3408 12.1678C24.6297 6.77911 26.2742 4.08479 25.128 2.04239C23.9818 0 20.8253 0 14.5122 0H10.9795C4.66641 0 1.50989 0 0.363694 2.04239C-0.782503 4.08479 0.861959 6.77912 4.15088 12.1678L5.91726 15.0619Z"
                fill="#FFFFFF"
              />
            </svg>
            <div className="flex flex-col items-center gap-[13px]">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-[19px] w-[5px] rounded-[4px] bg-white"
                ></div>
              ))}
            </div>
            <svg
              width="27"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative bottom-[-5px]"
            >
              <path
                d="M20.3286 8.18814C17.2727 3.18135 15.7448 0.67796 13.5 0.67796C11.2552 0.67796 9.72726 3.18135 6.67141 8.18815L4.90503 11.0822C1.61611 16.4709 -0.0283542 19.1652 1.11784 21.2076C2.26404 23.25 5.42057 23.25 11.7336 23.25H15.2664C21.5794 23.25 24.736 23.25 25.8822 21.2076C27.0284 19.1652 25.3839 16.4709 22.095 11.0822L20.3286 8.18814Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>

          <Image
            alt="barcode"
            src="/barcode.svg"
            width={172}
            height={172}
            className="py-[36px]"
          />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, y: "50%" }}
          animate={{
            opacity: 1,
            y: "0%",
            transition: { delay: 0.4, duration: 0.7 },
          }}
          className="font-madeOuterSansAlt flex flex-col text-[48px] font-medium leading-[60px] text-[#292626] max-lg:hidden"
        >
          2000+ <br />{" "}
          <span className="custom-text-color text-[24px] font-normal leading-[30px]">
            Organizers
          </span>
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.8,
            delay: 0.7,
          },
        }}
        className="relative flex flex-col justify-center"
      >
        <div className="relative flex h-full justify-center">
          <Image
            alt="hero-icon"
            src="/hero-icon.svg"
            width={247}
            height={274}
            className="absolute ml-[9%] mt-[1%] max-md:ml-[5%] max-md:mt-0 max-md:w-[130px] max-[530px]:ml-[10%]"
          />
          <div className="absolute max-lg:relative max-lg:h-[400px] max-lg:overflow-hidden max-md:h-[250px] max-[350px]:h-[200px]">
            <Image
              alt="hero-image"
              src="/hero-image.webp"
              width={591}
              height={916}
              className="max-md:w-[305px]"
            />
          </div>
        </div>
        <div className="hidden text-center max-lg:block">
          <div className="drop-shadow-ticketCard mb-[53px] flex items-center rounded-[17px] bg-[#222529] px-[36px] max-lg:mb-[20px]">
            <HeroForm className="w-full items-center" />
          </div>
          <span className="font-madeOuterSansAlt flex flex-col text-[48px] font-medium leading-[60px] text-[#292626] max-lg:text-[28px] max-lg:leading-[35px]">
            2000+ <br />{" "}
            <span className="custom-text-color text-[24px] font-normal leading-[30px] max-lg:text-[14px] max-lg:leading-[14px]">
              Organizers
            </span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}
