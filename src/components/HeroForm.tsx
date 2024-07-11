"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface HeroFormProps extends HTMLAttributes<HTMLFormElement> {}

const HeroForm = forwardRef<HTMLFormElement, HeroFormProps>(
  ({ className, ...props }, ref) => {
    return (
      <form
        className={cn("flex flex-col py-[36px]", className)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        {...props}
        ref={ref}
      >
        <Input
          type="email"
          className="mb-[12px] h-auto rounded-[7px] border-none bg-[#7A7A7D]/[0.39] px-[23px] py-[13px] text-[14px] leading-[18px] text-white placeholder:text-[#C6C1C1]"
          placeholder="Email Address"
        />
        <Button
          type="submit"
          className="bg-buttonGradient mb-[17px] h-auto w-full rounded-[30px] py-[16.5px] text-[14px] font-semibold leading-[16px]"
        >
          Join waitlist
        </Button>
        <span className="text-[16px] font-normal leading-[20px] text-[#DDDDDD]">
          Join the list of event organisers from around Nigeria
        </span>
      </form>
    );
  },
);
HeroForm.displayName = "HeroForm";

export default HeroForm;
