"use client";
import { Button } from "@/components/ui/button";
import { type EmblaCarouselType } from "embla-carousel";
import React, { forwardRef, useCallback, useEffect, useState } from "react";

interface SliderDotsProps extends React.HTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export const SliderDots = forwardRef<HTMLButtonElement, SliderDotsProps>(
  ({ isActive, ...props }, ref) => {
    return (
      <Button
        className={`${isActive ? "h-4 min-h-4 w-4 min-w-4 bg-[#0F1114]" : "h-3 min-h-3 w-3 min-w-3 bg-[#C1C1C1]"} rounded-full p-0`}
        {...props}
        ref={ref}
      />
    );
  },
);
SliderDots.displayName = "SliderDots";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  sliderApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!sliderApi) return;
      sliderApi.scrollTo(index);
    },
    [sliderApi],
  );

  const onInit = useCallback((sliderApi: EmblaCarouselType) => {
    setScrollSnaps(sliderApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((sliderApi: EmblaCarouselType) => {
    setSelectedIndex(sliderApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!sliderApi) return;

    onInit(sliderApi);
    onSelect(sliderApi);
    sliderApi
      .on("reInit", onInit)
      .on("reInit", onSelect)
      .on("select", onSelect);
  }, [sliderApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};
