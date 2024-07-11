"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/Slider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterForm from "@/components/FooterForm";
import Nav from "@/components/Nav";
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
    <>
      <Nav />
      <main className="pt-[27px] max-md:pt-[18px]">
        <div className="container flex flex-col">
          <motion.span
            initial={{ opacity: 0, y: "-50%" }}
            animate={{
              opacity: 1,
              y: "0%",
              transition: { duration: 0.7, delay: 0.3 },
            }}
            className="font-madeOuterSansAlt custom-text-color-with-shadow mb-[32px] block text-center text-[20px] font-medium leading-[25px] max-md:mb-[23px] max-md:text-[14px] max-md:leading-[17.5px]"
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
              className="font-aBeeZee text-center text-[42px] leading-[75px] text-[#323131] max-md:text-[24px] max-md:font-normal max-md:leading-[28px]"
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
                    className="data-[state=open]:bg-buttonGradient w-full overflow-hidden rounded-[19px] border-none p-[3px]"
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
                    className="data-[state=open]:bg-buttonGradient w-full overflow-hidden rounded-[19px] border-none p-[3px]"
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
                    className="data-[state=open]:bg-buttonGradient w-full overflow-hidden rounded-[19px] border-none p-[3px]"
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
                    className="data-[state=open]:bg-buttonGradient w-full overflow-hidden rounded-[19px] border-none p-[3px]"
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
            <div className="bg-navBorder h-[1px] w-full"></div>
          </section>
        </div>
      </main>
      <footer className="pb-[148px] pt-[60px] max-md:pb-[60px] max-md:pt-0">
        <div className="container grid grid-cols-4 gap-[82px] max-lg:grid-cols-2 max-lg:gap-[40px] max-md:grid-cols-1">
          <div className="flex flex-col gap-[24px] max-md:-order-3 max-md:gap-3.5 max-md:text-center">
            <Link href="/" className="flex max-md:justify-center">
              <Image
                alt="logo"
                src="/octa-logo.svg"
                width={158}
                height={36}
                className="block max-md:hidden"
              />
              <Image
                alt="logo"
                src="/footer-mobile-logo.svg"
                width={79}
                height={22}
                className="hidden max-md:block"
              />
            </Link>
            <span className="font-poppins text-[15px] font-normal leading-[22px] text-[#3d3d3d] max-md:mx-auto max-md:max-w-[151px]">
              Free Event Hosting, Instant Ticket Sales
            </span>
            <div className="flex flex-col gap-[22px]">
              <span className="font-poppins text-[15px] font-normal leading-[22px] text-[#3D3D3D] max-md:mx-auto max-md:max-w-[200px]">
                All Rights Reserved © 2024{" "}
                <strong className="max-md:font-normal">OCTA</strong>
              </span>
              <div className="flex items-center gap-[32px] max-md:hidden max-md:justify-center">
                <Image
                  alt="facebook"
                  src="/facebook.svg"
                  width={28}
                  height={28}
                />
                <Image
                  alt="twitter"
                  src="/twitter.svg"
                  width={28}
                  height={28}
                />
                <Image
                  alt="instagram"
                  src="/instagram.svg"
                  width={28}
                  height={28}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-md:-order-1 max-md:gap-2 max-md:text-center">
            <h5 className="font-poppins text-[20px] font-semibold leading-[30px] text-[#3D3D3D]">
              INFORMATION LINK
            </h5>
            <div className="font-poppins flex flex-col gap-2.5 text-[15px] font-normal leading-[22px] text-[#3D3D3D]">
              <span>Explore</span>
              <span>Connect wallet</span>
              <span>FAQ</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-md:-order-2 max-md:gap-2 max-md:text-center">
            <h5 className="font-poppins text-[20px] font-semibold leading-[30px] text-[#3D3D3D]">
              CONTACT US
            </h5>
            <div className="font-poppins flex flex-col gap-2.5 text-[15px] font-normal leading-[22px] text-[#3D3D3D]">
              <span className="custom-text-color">support@octahq.com</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 max-md:-order-4 max-md:text-center">
            <FooterForm />

            <span className="font-poppins text-[15px] font-normal leading-[22px] text-[#3D3D3D]">
              Don’t miss out on hot deals and latest updates
            </span>
          </div>
          <div className="hidden items-center gap-[32px] max-md:flex max-md:justify-center">
            <Image alt="facebook" src="/facebook.svg" width={28} height={28} />
            <Image alt="twitter" src="/twitter.svg" width={28} height={28} />
            <Image
              alt="instagram"
              src="/instagram.svg"
              width={28}
              height={28}
            />
          </div>
        </div>
      </footer>
    </>
  );
}
