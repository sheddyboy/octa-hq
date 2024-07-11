"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface FooterFormProps {}

export default function FooterForm({}: FooterFormProps) {
  return (
    <form
      className="relative flex items-center"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        type="email"
        className="h-[50px] rounded-[44px] bg-[#545353]/[0.11]"
      />
      <Button
        type="submit"
        className="bg-buttonGradient absolute right-[6px] h-auto rounded-[30px] px-[32px] py-[10px] text-[16px] font-normal leading-[20px] text-[#F7F7F7]"
      >
        Join waitlist
      </Button>
    </form>
  );
}
