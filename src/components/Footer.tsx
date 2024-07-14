"use client";
import FooterForm from "@/components/FooterForm";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-[148px] pt-[60px] max-md:pb-[60px] max-md:pt-0"
    >
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
              <Image alt="twitter" src="/twitter.svg" width={28} height={28} />
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
          <div className="flex flex-col gap-2.5 font-poppins text-[15px] font-normal leading-[22px] text-[#3D3D3D]">
            <span>Explore</span>
            <span>Connect wallet</span>
            <span>FAQ</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-md:-order-2 max-md:gap-2 max-md:text-center">
          <h5 className="font-poppins text-[20px] font-semibold leading-[30px] text-[#3D3D3D]">
            CONTACT US
          </h5>
          <div className="flex flex-col gap-2.5 font-poppins text-[15px] font-normal leading-[22px] text-[#3D3D3D]">
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
          <Image alt="instagram" src="/instagram.svg" width={28} height={28} />
        </div>
      </div>
    </motion.footer>
  );
}
