"use client";
import { Button } from "@/components/ui/button";
import Slider from "@/components/Slider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import HeroSection from "@/components/HeroSection";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const parentVariant: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.2 },
    },
  };
  const childrenVariant: Variants = {
    initial: { opacity: 0, y: "70px" },
    animate: {
      opacity: 1,
      y: "0px",
      transition: { duration: 0.7 },
    },
  };
  return (
    <main className="pt-[27px] max-md:pt-[18px]">
      <div className="container flex flex-col">
        <motion.span
          initial={{ opacity: 0, y: "-50%" }}
          animate={{
            opacity: 1,
            y: "0%",
            transition: { duration: 0.7, delay: 0.3 },
          }}
          className="custom-text-color-with-shadow mb-[32px] block text-center font-madeOuterSansAlt text-[20px] font-medium leading-[25px] max-md:mb-[23px] max-md:text-[14px] max-md:leading-[17.5px]"
        >
          Dropping Soon
        </motion.span>
        <HeroSection />

        <section className="-mx-8 flex flex-col overflow-hidden rounded-[30px] pb-[74px] pt-[44px] backdrop-blur-[35px] max-lg:backdrop-blur-none">
          <motion.h2
            initial={{ opacity: 0, y: "40px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-[104px] text-center text-[42px] font-medium leading-[75px] max-md:mb-[48px] max-md:text-[24px] max-md:font-normal max-md:leading-[75px]"
          >
            Why we are different
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: "40px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Slider className="mb-[160px] flex flex-col items-center justify-end max-md:mb-[102px]" />
          </motion.div>
          <Button className="mx-auto h-auto rounded-[30px] bg-[#353640] px-[32px] py-[16px] text-[16px] font-semibold leading-[20px] text-white">
            Get early access
          </Button>
        </section>
        <section className="flex flex-col gap-[43px] pb-[34px] pt-[16px] max-md:gap-[12px]">
          <motion.h2
            initial={{ opacity: 0, y: "40px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center font-aBeeZee text-[42px] leading-[75px] text-[#323131] max-md:text-[24px] max-md:font-normal max-md:leading-[28px]"
          >
            Frequently asked questions
          </motion.h2>
          <Accordion type="single" collapsible>
            <motion.div
              variants={parentVariant}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div variants={childrenVariant}>
                <AccordionItem
                  value="item-1"
                  className="w-full overflow-hidden rounded-[19px] border-none p-[3px] data-[state=open]:bg-buttonGradient"
                >
                  <div className="rounded-[16px] bg-white px-[26px]">
                    <AccordionTrigger className="pt-[40px] text-start text-[18px] font-normal leading-[23px] text-[#323131]">
                      What is Packet Real Estate Platform?
                    </AccordionTrigger>
                    <AccordionContent className="pb-[30px] text-[16px] font-normal leading-[20px] text-[#4D4949]">
                      The registration process is designed to be quick and
                      seamless. Real estate companies undergo advanced
                      authentication to ensure legitimacy, while investors and
                      end users can register using simple and secure wallet
                      authentication. This process eliminates the need for
                      extensive paperwork and ensures a smooth onboarding
                      experience.
                    </AccordionContent>
                  </div>
                </AccordionItem>
                <div className="mx-auto mb-[30px] mt-[30px] h-[1px] w-[97%] bg-[#323131]"></div>
              </motion.div>
              <motion.div variants={childrenVariant}>
                <AccordionItem
                  value="item-2"
                  className="w-full overflow-hidden rounded-[19px] border-none p-[3px] data-[state=open]:bg-buttonGradient"
                >
                  <div className="rounded-[16px] bg-white px-[26px]">
                    <AccordionTrigger className="pt-[40px] text-start text-[18px] font-normal leading-[23px] text-[#323131]">
                      What types of properties can I find on the platform?
                    </AccordionTrigger>
                    <AccordionContent className="pb-[30px] text-[16px] font-normal leading-[20px] text-[#4D4949]">
                      The registration process is designed to be quick and
                      seamless. Real estate companies undergo advanced
                      authentication to ensure legitimacy, while investors and
                      end users can register using simple and secure wallet
                      authentication. This process eliminates the need for
                      extensive paperwork and ensures a smooth onboarding
                      experience.
                    </AccordionContent>
                  </div>
                </AccordionItem>
                <div className="mx-auto mb-[30px] mt-[30px] h-[1px] w-[97%] bg-[#323131]"></div>
              </motion.div>
              <motion.div variants={childrenVariant}>
                <AccordionItem
                  value="item-3"
                  className="w-full overflow-hidden rounded-[19px] border-none p-[3px] data-[state=open]:bg-buttonGradient"
                >
                  <div className="rounded-[16px] bg-white px-[26px]">
                    <AccordionTrigger className="pt-[40px] text-start text-[18px] font-normal leading-[23px] text-[#323131]">
                      How does the registration process work?
                    </AccordionTrigger>
                    <AccordionContent className="pb-[30px] text-[16px] font-normal leading-[20px] text-[#4D4949]">
                      The registration process is designed to be quick and
                      seamless. Real estate companies undergo advanced
                      authentication to ensure legitimacy, while investors and
                      end users can register using simple and secure wallet
                      authentication. This process eliminates the need for
                      extensive paperwork and ensures a smooth onboarding
                      experience.
                    </AccordionContent>
                  </div>
                </AccordionItem>
                <div className="mx-auto mb-[30px] mt-[30px] h-[1px] w-[97%] bg-[#323131]"></div>
              </motion.div>
              <motion.div variants={childrenVariant}>
                <AccordionItem
                  value="item-4"
                  className="w-full overflow-hidden rounded-[19px] border-none p-[3px] data-[state=open]:bg-buttonGradient"
                >
                  <div className="rounded-[16px] bg-white px-[26px]">
                    <AccordionTrigger className="pt-[40px] text-start text-[18px] font-normal leading-[23px] text-[#323131]">
                      How are property transactions secured on the platform?
                    </AccordionTrigger>
                    <AccordionContent className="pb-[30px] text-[16px] font-normal leading-[20px] text-[#4D4949]">
                      The registration process is designed to be quick and
                      seamless. Real estate companies undergo advanced
                      authentication to ensure legitimacy, while investors and
                      end users can register using simple and secure wallet
                      authentication. This process eliminates the need for
                      extensive paperwork and ensures a smooth onboarding
                      experience.
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </motion.div>
            </motion.div>
          </Accordion>
          <div className="h-[1px] w-full bg-navBorder"></div>
        </section>
      </div>
    </main>
  );
}
