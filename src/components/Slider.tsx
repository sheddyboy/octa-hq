"use client";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React, { forwardRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDotButton, SliderDots } from "@/components/SliderDots";
import Autoplay from "embla-carousel-autoplay";

interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Slider = forwardRef<HTMLDivElement, SliderProps>(({ ...props }, ref) => {
  const [sliderApi, setSliderApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(sliderApi);
  console.log("current", current);
  useEffect(() => {
    if (!sliderApi) {
      return;
    }
    sliderApi.on("select", () => {
      setCurrent(sliderApi.selectedScrollSnap());
    });
  }, [sliderApi]);

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      setApi={setSliderApi}
      {...props}
      ref={ref}
    >
      <CarouselContent className="-ml-8">
        <CarouselItem
          className={`basis-1/3 pl-8 max-md:basis-[28%] ${current === 0 && "z-[2]"}`}
        >
          <motion.div
            className={`${current === 0 && "border-gradient"} shadow-cardShadow rounded-[30px] max-md:rounded-[14px]`}
            initial={{ scale: current === 0 ? 1.4 : 1 }}
            animate={{
              scale: current === 0 ? 1.4 : 1,
              opacity: current === 4 || current === 2 ? 0 : 1,
            }}
          >
            <Card className="rounded-[30px] bg-[#FDFDFD] max-md:rounded-[14px]">
              <CardContent className="flex aspect-[1.04] flex-col items-center justify-center p-6 max-md:aspect-[1.026] max-md:p-5">
                <Image
                  alt="coin"
                  src="/coins.svg"
                  width={132}
                  height={118}
                  className="mb-[33px] max-md:mb-[15px] max-md:w-[46px]"
                />
                <h3 className="custom-text-color mb-[20px] max-w-[250px] text-center text-[20px] font-semibold leading-[25px] max-md:mb-[12px] max-md:text-[11px] max-md:leading-[14px]">
                  More tickets, more rewards & more customer retention
                </h3>
                <span className="max-w-[280px] text-center text-[13px] font-normal leading-[16px] text-[#312B2B]">
                  For every tickets purchased, your customers get rewarded,
                  building trust and retention
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
        <CarouselItem
          className={`basis-1/3 pl-8 max-md:basis-[28%] ${current === 1 && "z-[2]"}`}
        >
          <motion.div
            className={`${current === 1 && "border-gradient"} shadow-cardShadow rounded-[30px] max-md:rounded-[14px]`}
            initial={{ scale: current === 1 ? 1.4 : 1 }}
            animate={{
              scale: current === 1 ? 1.4 : 1,
              opacity: current === 5 || current === 3 ? 0 : 1,
            }}
          >
            <Card className="rounded-[30px] bg-[#FDFDFD] max-md:rounded-[14px]">
              <CardContent className="flex aspect-[1.04] flex-col items-center justify-center p-6 max-md:aspect-[1.026] max-md:p-5">
                <Image
                  alt="shield"
                  src="/shield.svg"
                  width={132}
                  height={118}
                  className="mb-[33px] max-md:mb-[15px] max-md:w-[46px]"
                />
                <h3 className="custom-text-color mb-[20px] max-w-[250px] text-center text-[20px] font-semibold leading-[25px] max-md:mb-[12px] max-md:text-[11px] max-md:leading-[14px]">
                  Secured and transparent transactions
                </h3>
                <span className="max-w-[280px] text-center text-[13px] font-normal leading-[16px] text-[#312B2B]">
                  We leverage on the power of blockchain technology to ensure a
                  secured and transparent transaction
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
        <CarouselItem
          className={`basis-1/3 pl-8 max-md:basis-[28%] ${current === 2 && "z-[2]"}`}
        >
          <motion.div
            className={`${current === 2 && "border-gradient"} shadow-cardShadow rounded-[30px] max-md:rounded-[14px]`}
            initial={{ scale: current === 2 ? 1.4 : 1 }}
            animate={{
              scale: current === 2 ? 1.4 : 1,
              opacity: current === 0 || current === 4 ? 0 : 1,
            }}
          >
            <Card className="rounded-[30px] bg-[#FDFDFD] max-md:rounded-[14px]">
              <CardContent className="flex aspect-[1.04] flex-col items-center justify-center p-6 max-md:aspect-[1.026] max-md:p-5">
                <Image
                  alt="time"
                  src="/time.svg"
                  width={132}
                  height={118}
                  className="mb-[33px] max-md:mb-[15px] max-md:w-[46px]"
                />
                <h3 className="custom-text-color mb-[20px] max-w-[250px] text-center text-[20px] font-semibold leading-[25px] max-md:mb-[12px] max-md:text-[11px] max-md:leading-[14px]">
                  24 hours pay-out withdrawal on the go
                </h3>
                <span className="max-w-[280px] text-center text-[13px] font-normal leading-[16px] text-[#312B2B]">
                  Begin withdrawal within 24 hrs of ticket purchase
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
        <CarouselItem
          className={`basis-1/3 pl-8 max-md:basis-[28%] ${current === 3 && "z-[2]"}`}
        >
          <motion.div
            className={`${current === 3 && "border-gradient"} shadow-cardShadow rounded-[30px] max-md:rounded-[14px]`}
            initial={{ scale: current === 3 ? 1.4 : 1 }}
            animate={{
              scale: current === 3 ? 1.4 : 1,
              opacity: current === 1 || current === 5 ? 0 : 1,
            }}
          >
            <Card className="rounded-[30px] bg-[#FDFDFD] max-md:rounded-[14px]">
              <CardContent className="flex aspect-[1.04] flex-col items-center justify-center p-6 max-md:aspect-[1.026] max-md:p-5">
                <Image
                  alt="coin"
                  src="/coins.svg"
                  width={132}
                  height={118}
                  className="mb-[33px] max-md:mb-[15px] max-md:w-[46px]"
                />
                <h3 className="custom-text-color mb-[20px] max-w-[250px] text-center text-[20px] font-semibold leading-[25px] max-md:mb-[12px] max-md:text-[11px] max-md:leading-[14px]">
                  More tickets, more rewards & more customer retention
                </h3>
                <span className="max-w-[280px] text-center text-[13px] font-normal leading-[16px] text-[#312B2B]">
                  For every tickets purchased, your customers get rewarded,
                  building trust and retention
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
        <CarouselItem
          className={`basis-1/3 pl-8 max-md:basis-[28%] ${current === 4 && "z-[2]"}`}
        >
          <motion.div
            className={`${current === 4 && "border-gradient"} shadow-cardShadow rounded-[30px] max-md:rounded-[14px]`}
            initial={{ scale: current === 4 ? 1.4 : 1 }}
            animate={{
              scale: current === 4 ? 1.4 : 1,
              opacity: current === 2 || current === 0 ? 0 : 1,
            }}
          >
            <Card className="rounded-[30px] bg-[#FDFDFD] max-md:rounded-[14px]">
              <CardContent className="flex aspect-[1.04] flex-col items-center justify-center p-6 max-md:aspect-[1.026] max-md:p-5">
                <Image
                  alt="shield"
                  src="/shield.svg"
                  width={132}
                  height={118}
                  className="mb-[33px] max-md:mb-[15px] max-md:w-[46px]"
                />
                <h3 className="custom-text-color mb-[20px] max-w-[250px] text-center text-[20px] font-semibold leading-[25px] max-md:mb-[12px] max-md:text-[11px] max-md:leading-[14px]">
                  Secured and transparent transactions
                </h3>
                <span className="max-w-[280px] text-center text-[13px] font-normal leading-[16px] text-[#312B2B]">
                  We leverage on the power of blockchain technology to ensure a
                  secured and transparent transaction
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
        <CarouselItem
          className={`basis-1/3 pl-8 max-md:basis-[28%] ${current === 5 && "z-[2]"}`}
        >
          <motion.div
            className={`${current === 5 && "border-gradient"} shadow-cardShadow rounded-[30px] max-md:rounded-[14px]`}
            initial={{ scale: current === 5 ? 1.4 : 1 }}
            animate={{
              scale: current === 5 ? 1.4 : 1,
              opacity: current === 3 || current === 1 ? 0 : 1,
            }}
          >
            <Card className="rounded-[30px] bg-[#FDFDFD] max-md:rounded-[14px]">
              <CardContent className="flex aspect-[1.04] flex-col items-center justify-center p-6 max-md:aspect-[1.026] max-md:p-5">
                <Image
                  alt="time"
                  src="/time.svg"
                  width={132}
                  height={118}
                  className="mb-[33px] max-md:mb-[15px] max-md:w-[46px]"
                />
                <h3 className="custom-text-color mb-[20px] max-w-[250px] text-center text-[20px] font-semibold leading-[25px] max-md:mb-[12px] max-md:text-[11px] max-md:leading-[14px]">
                  24 hours pay-out withdrawal on the go
                </h3>
                <span className="max-w-[280px] text-center text-[13px] font-normal leading-[16px] text-[#312B2B]">
                  Begin withdrawal within 24 hrs of ticket purchase
                </span>
              </CardContent>
            </Card>
          </motion.div>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute bottom-[-120px] flex items-center justify-center gap-3 max-md:bottom-[-80px]">
        {scrollSnaps
          .filter((_, index) => index < 3)
          .map((_, index) => (
            <SliderDots
              key={index}
              isActive={index === selectedIndex % 3}
              onClick={() => onDotButtonClick(index)}
            />
          ))}
      </div>
    </Carousel>
  );
});

Slider.displayName = "Slider";

export default Slider;
