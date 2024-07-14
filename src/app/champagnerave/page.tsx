"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ChampagneraveProps {}

export default function Champagnerave({}: ChampagneraveProps) {
  const router = useRouter();
  const [earlyBirdForm, setEarlyBirdForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    numOfTickets: 0,
  });
  const [champagneDrum, setChampagneDrum] = useState({
    firstName: "",
    lastName: "",
    email: "",
    numOfTickets: 0,
  });

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-[40px] max-md:mb-8 max-md:pt-[18px]"
    >
      <div className="container grid grid-cols-[1fr,1.84fr] gap-[40px] max-md:grid-cols-1">
        <div className="flex flex-col gap-[48px]">
          <Image
            className="w-full"
            alt="champ"
            src="/champ.png"
            width={399}
            height={398}
          />
          <div className="flex flex-col gap-4">
            <span className="font-inter text-[20px] font-medium leading-[24px] text-black">
              About event
            </span>
            <p className="font-inter text-[16px] font-medium leading-[19px] text-[#646464]">
              Come and join us for an absolutely unforgettable night at the
              Champagne Rave with Twinkle! Immerse yourself in the sparkling
              vibes, groove to infectious beats, and bask in the effervescent
              charm of champagne. We&apos;ll be raving all night long, soaking
              in the atmosphere until the break of dawn. Italawa Mehn promises
              to be an experience you won&apos;t want to miss!
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[53px]">
          <div>
            <h1 className="mb-[24px] font-kumbhSans text-[36px] font-medium leading-[45px] text-black">
              The Champagne <br /> Rave
            </h1>
            <span className="mb-4 flex font-inter text-[24px] font-medium leading-[20px] text-black">
              Hosted By
            </span>
            <div className="flex items-center gap-4">
              <span className="font-inter text-[16px] leading-[19px] text-[#646464]">
                The Twinkle Brand
              </span>
              <Image
                alt="external-icon"
                src="/external-icon.svg"
                width={16}
                height={17}
              />
            </div>
          </div>
          <div className="flex items-center gap-[30px] max-sm:flex-col max-sm:items-start">
            <div className="flex items-center gap-4">
              <Image
                alt="calendar"
                src="/calendar.svg"
                width={32}
                height={33}
              />
              <div className="flex flex-col">
                <span className="font-kumbhSans text-[16px] font-medium leading-[20px] text-black">
                  Thurs, 25 July
                </span>
                <span className="font-kumbhSans text-[12px] font-medium leading-[15px] text-[#848484]">
                  7:00PM - 6:00AM
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                alt="location"
                src="/location.svg"
                width={32}
                height={33}
              />
              <div className="flex flex-col">
                <span className="font-kumbhSans text-[16px] font-medium leading-[20px] text-black">
                  The Patio Arena
                </span>
                <span className="font-kumbhSans text-[12px] font-medium leading-[15px] text-[#848484]">
                  Bashorun, Ibadan
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-[10px] bg-[#F7F7F7] p-4">
            <span className="font-inter text-[20px] font-medium leading-[24px] text-black max-sm:text-left">
              Ticket type
            </span>

            <div className="flex items-center justify-between gap-[100px] max-md:gap-[40px] max-sm:flex-col">
              <div className="flex flex-1 flex-col gap-2 max-sm:w-full max-sm:text-left">
                <span className="font-inter text-[16px] font-medium leading-[19px] text-[#646464]">
                  Early Bird
                </span>
                <span className="font-inter text-[24px] font-medium leading-[29px] text-black">
                  NGN 3,000
                </span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="h-auto rounded-[10px] bg-buttonGradient py-4 font-inter text-[16px] font-medium leading-[19px] text-white">
                      Buy tickets
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex max-w-[550px] flex-col gap-[32px] rounded-[10px] p-[32px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center justify-between font-inter text-[24px] font-medium leading-[29px] text-black">
                        Buy Ticket
                        <DialogClose className="over:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                          <Image
                            alt="dialog-close"
                            src="/dialog-close.svg"
                            width={24}
                            height={24}
                          />
                        </DialogClose>
                      </DialogTitle>
                    </DialogHeader>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        router.push("/success");
                      }}
                    >
                      <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col rounded-[10px] bg-[#F8F8F8] px-[16px] py-[8px]">
                          <span className="mb-2 block font-inter text-[16px] font-medium leading-[19px] text-black">
                            The Champagne Rave
                          </span>
                          <span className="mb-4 block font-inter text-[16px] font-medium leading-[19px] text-[#646464]">
                            Early Bird
                          </span>
                          <span className="block font-inter text-[24px] font-medium leading-[29px] text-black">
                            NGN 3,000
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                          <Input
                            placeholder="First name"
                            required
                            className="h-auto rounded-[8px] border border-[#64646433]/[0.2] p-4 font-kumbhSans text-[16px] font-medium leading-[18px] placeholder:text-black/50"
                            value={earlyBirdForm.firstName}
                            onChange={(e) =>
                              setEarlyBirdForm((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                              }))
                            }
                          />

                          <Input
                            placeholder="Last name"
                            required
                            className="h-auto rounded-[8px] border border-[#64646433]/[0.2] p-4 font-kumbhSans text-[16px] font-medium leading-[18px] placeholder:text-black/50"
                            value={earlyBirdForm.lastName}
                            onChange={(e) =>
                              setEarlyBirdForm((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                              }))
                            }
                          />
                          <Input
                            className="col-span-2 h-auto rounded-[8px] border border-[#64646433]/[0.2] p-4 font-kumbhSans text-[16px] font-medium leading-[18px] placeholder:text-black/50 max-sm:col-span-1"
                            required
                            placeholder="Email address"
                            value={earlyBirdForm.email}
                            onChange={(e) =>
                              setEarlyBirdForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            type="email"
                          />
                        </div>
                        <div className="flex flex-col gap-[32px]">
                          <div className="flex items-center justify-between">
                            <span className="font-inter text-[16px] font-medium leading-[19px] text-black">
                              Number of tickets
                            </span>
                            <div className="flex items-center gap-2">
                              <Button
                                className="h-[29px] min-h-[29px] w-[28px] min-w-[28px] rounded-[5px] bg-[#E2E2E2] p-0 text-black"
                                variant="ghost"
                                onClick={() =>
                                  setEarlyBirdForm((prev) => ({
                                    ...prev,
                                    numOfTickets:
                                      prev.numOfTickets === 0
                                        ? prev.numOfTickets
                                        : prev.numOfTickets - 1,
                                  }))
                                }
                              >
                                -
                              </Button>
                              <Input
                                type="number"
                                className="no-arrows h-[29px] min-h-[29px] w-[28px] min-w-[28px] rounded-[5px] p-0 text-center font-inter text-[16px] font-medium text-black"
                                value={earlyBirdForm.numOfTickets}
                                min={0}
                                onChange={(e) =>
                                  setEarlyBirdForm((prev) => ({
                                    ...prev,
                                    numOfTickets: +e.target.value,
                                  }))
                                }
                              />
                              <Button
                                className="h-[29px] min-h-[29px] w-[28px] min-w-[28px] rounded-[5px] bg-[#E2E2E2] p-0 text-black"
                                variant="ghost"
                                onClick={() =>
                                  setEarlyBirdForm((prev) => ({
                                    ...prev,
                                    numOfTickets: prev.numOfTickets + 1,
                                  }))
                                }
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <Button
                            type="submit"
                            className="h-auto rounded-[10px] bg-buttonGradient py-4 font-inter text-[16px] font-medium leading-[19px] text-white"
                          >
                            Pay NGN 3,000
                          </Button>
                        </div>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex flex-1 flex-col gap-2 max-sm:w-full max-sm:text-left">
                <span className="font-inter text-[16px] font-medium leading-[19px] text-[#646464]">
                  Champagne Drum
                </span>
                <span className="font-inter text-[24px] font-medium leading-[29px] text-black">
                  NGN 50,000
                </span>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="h-auto rounded-[10px] bg-[#F42166] py-4 font-inter text-[16px] font-medium leading-[19px] text-white">
                      Buy tickets
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="flex max-w-[550px] flex-col gap-[32px] rounded-[10px] p-[32px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center justify-between font-inter text-[24px] font-medium leading-[29px] text-black">
                        Buy Ticket
                        <DialogClose className="over:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                          <Image
                            alt="dialog-close"
                            src="/dialog-close.svg"
                            width={24}
                            height={24}
                          />
                        </DialogClose>
                      </DialogTitle>
                    </DialogHeader>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        router.push("/success");
                      }}
                    >
                      <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col rounded-[10px] bg-[#F8F8F8] px-[16px] py-[8px]">
                          <span className="mb-2 block font-inter text-[16px] font-medium leading-[19px] text-black">
                            The Champagne Rave
                          </span>
                          <span className="mb-4 block font-inter text-[16px] font-medium leading-[19px] text-[#646464]">
                            Champagne Drum
                          </span>
                          <span className="block font-inter text-[24px] font-medium leading-[29px] text-black">
                            NGN50,000
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                          <Input
                            placeholder="First name"
                            required
                            className="h-auto rounded-[8px] border border-[#64646433]/[0.2] p-4 font-kumbhSans text-[16px] font-medium leading-[18px] placeholder:text-black/50"
                            value={champagneDrum.firstName}
                            onChange={(e) =>
                              setChampagneDrum((prev) => ({
                                ...prev,
                                firstName: e.target.value,
                              }))
                            }
                          />

                          <Input
                            placeholder="Last name"
                            required
                            className="h-auto rounded-[8px] border border-[#64646433]/[0.2] p-4 font-kumbhSans text-[16px] font-medium leading-[18px] placeholder:text-black/50"
                            value={champagneDrum.lastName}
                            onChange={(e) =>
                              setChampagneDrum((prev) => ({
                                ...prev,
                                lastName: e.target.value,
                              }))
                            }
                          />
                          <Input
                            className="col-span-2 h-auto rounded-[8px] border border-[#64646433]/[0.2] p-4 font-kumbhSans text-[16px] font-medium leading-[18px] placeholder:text-black/50 max-sm:col-span-1"
                            required
                            placeholder="Email address"
                            value={champagneDrum.email}
                            onChange={(e) =>
                              setChampagneDrum((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                            type="email"
                          />
                        </div>
                        <div className="flex flex-col gap-[32px]">
                          <div className="flex items-center justify-between">
                            <span className="font-inter text-[16px] font-medium leading-[19px] text-black">
                              Number of tickets
                            </span>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="ghost"
                                className="h-[29px] min-h-[29px] w-[28px] min-w-[28px] rounded-[5px] bg-[#E2E2E2] p-0 text-black"
                                onClick={() =>
                                  setChampagneDrum((prev) => ({
                                    ...prev,
                                    numOfTickets:
                                      prev.numOfTickets === 0
                                        ? prev.numOfTickets
                                        : prev.numOfTickets - 1,
                                  }))
                                }
                              >
                                -
                              </Button>
                              <Input
                                type="number"
                                className="no-arrows h-[29px] min-h-[29px] w-[28px] min-w-[28px] rounded-[5px] p-0 text-center font-inter text-[16px] font-medium text-black"
                                value={champagneDrum.numOfTickets}
                                min={0}
                                onChange={(e) =>
                                  setChampagneDrum((prev) => ({
                                    ...prev,
                                    numOfTickets: +e.target.value,
                                  }))
                                }
                              />
                              <Button
                                className="h-[29px] min-h-[29px] w-[28px] min-w-[28px] rounded-[5px] bg-[#E2E2E2] p-0 text-black"
                                variant="ghost"
                                onClick={() =>
                                  setChampagneDrum((prev) => ({
                                    ...prev,
                                    numOfTickets: prev.numOfTickets + 1,
                                  }))
                                }
                              >
                                +
                              </Button>
                            </div>
                          </div>
                          <Button
                            type="submit"
                            className="h-auto rounded-[10px] bg-buttonGradient py-4 font-inter text-[16px] font-medium leading-[19px] text-white"
                          >
                            Pay NGN 50,000
                          </Button>
                        </div>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
