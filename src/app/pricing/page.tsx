"use client"

import Image from "next/image"
import Tag, { TagBig } from "../components/Tag"

import Tick from "@/app/assets/tick.png"
import Hand from "@/app/assets/hand.png"
import Acc from "@/app/assets/acc.png";

import InputCTA from "../components/InputCTA"
import ButtonPrimary from "../components/ButtonPrimary"

import Lightning from "@/app/assets/lightning.png"
import Under2 from "@/app/assets/under2.png"

import Conversation from "@/app/assets/conversation.png";
import Marq from "../components/Marq"

import Arrow1 from "@/app/assets/arrowb1.png";
import Arrow2 from "@/app/assets/arrowb2.png";
import { JoinProps } from "../page";
import Modal from "../components/Modal";
import { useState } from "react";
import { postEmail } from "../lib/api"

type PriceItemProps = {
  value: string
}

function PriceItem(props: PriceItemProps) {
  return (
    <div className="flex items-center gap-[8px]">
      <div>
        <Image src={Tick} alt="tick" />
      </div>
      <div>
        <p className="body0 text-[#7E8BA1]">{parseTextWithBold(props.value)}</p>
      </div>
    </div>
  );
}

type PriceCardProps = {
  tagValue: string,
  header: string,
  items: Array<string>
}

function parseTextWithBold(text: string) {
  const parts = text.split("$");

  return parts.map((part, index) => {
    // Odd indices are the text between $ signs (should be bold)
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-bold text-neutral-800">
          {part}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function PriceCard(props: PriceCardProps) {
  return (
    <div className="w-full bg-primary-100 p-[22px] rounded-[22px]">
      <div
        className={`
        bg-neutral-100 rounded-[22px] p-[32px]
        transition-shadow duration-500 pricing
      `}
      >
        <div className="border-b-2 border-dotted border-secondary-600 pb-[15px] flex flex-col items-center">
          <div>
            <TagBig value={props.tagValue} />
          </div>
          <div className="pt-[17px]">
            <h3 className="h3">{props.header}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-[30px] pt-[50px] pb-[10px]">
          {props.items.map((item, index) => (
            <div key={index}>
              <PriceItem value={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FirstSection() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto pt-[100px]">
        <div>
          <div>
            <h1>
              <span className="relative">
                Simple{" "}
                <Image
                  src={Acc}
                  alt="acc"
                  className="absolute left-[-40px] top-[-40px]"
                />{" "}
              </span>{" "}
              and transparent pricing
            </h1>
          </div>
          <div>
            <p className="body0 pt-[24px]">
              Start free. Pay 3% only while you grow. Switch to ₹3,999/month
              once you scale - no fees after that.
            </p>
          </div>
        </div>
        <div
          className={`
            flex justify-center pt-[50px] gap-[150px]
            max-[1540px]:gap-[100px]
            max-[1130px]:gap-[50px]
            max-[900px]:flex-col max-[900px]:items-center
          `}
        >
          <div className="relative">
            <div
              className={`
              w-[662px] rotate-[-0.68deg] relative top-[10%] transition-transform duration-800 hover:translate-y-[-8%]
              max-[1540px]:w-[500px]
              max-[1100px]:w-[400px]
              max-[900px]:w-[100%]
              max-[500px]:rotate-[0deg]
            `}
            >
              <PriceCard
                tagValue="always free"
                header="Free Community"
                items={[
                  "Create up to $10 free$ communities",
                  "$All$ features",
                  "$Unlimited$ courses",
                  "$Unlimited$ members",
                  "Custom URL",
                  "Analytics",
                ]}
              />
            </div>
          </div>
          <div className="relative">
            <div
              className={`
              w-[662px] rotate-[-0.68deg] relative top-[10%] transition-transform duration-800 hover:translate-y-[-8%]
              max-[1540px]:w-[500px]
              max-[1100px]:w-[400px]
              max-[900px]:w-[90%] max-[900px]:max-w-[500px] max-[900px]:top-0
              max-[500px]:rotate-[0deg] max-[500px]:w-[95%]
            `}
            >
              <PriceCard
                tagValue="3% Fee Per Paying Member"
                header="Paid Community"
                items={[
                  "Create up to $10 paid$ communities",
                  'Everything from $"Always Free"$ plan',
                  "$3%$ platform fee",
                  "Payment gateway charges",
                ]}
              />
            </div>
          </div>
          <div className="relative">
            <div
              className={`
                w-[662px] rotate-[-0.68deg] relative top-[10%] transition-transform duration-800 hover:translate-y-[-8%]
                max-[1540px]:w-[500px]
                max-[1100px]:w-[400px]
                max-[900px]:w-[90%] max-[900px]:max-w-[500px] max-[900px]:top-0
                max-[500px]:rotate-[0deg] max-[500px]:w-[95%]
              `}
            >
              <PriceCard
                tagValue="₹3999/month"
                header="Scale Unlimited"
                items={[
                  "Create up to $10 paid$ communities",
                  'Everything from $"Always Free"$ plan',
                  "$0%$ platform fee",
                  "Payment gateway charges",
                ]}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="relative pt-[182px] pb-[150px]">
            <h2 className="h2 text-center text-secondary-1000 px-4 mx-auto max-w-[1200px]">
              <span className="relative">
                2%{" "}
                <Image
                  src={Lightning}
                  alt="lightning"
                  className="absolute left-[-50px] top-[-40px] z-[-1]"
                />
              </span>{" "}
              per member who joins a paid community.
            </h2>
            <h2 className="h2 text-center text-secondary-1000 px-4 mx-auto max-w-[1400px]">
              We earn, only when you earn. We grow, only
              <span className="relative">
                {" "}
                when you grow.{" "}
                <Image
                  src={Under2}
                  alt="underline"
                  className={`
                absolute w-full right-[0px] bottom-[-16px] z-[-1]
              `}
                />{" "}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTASection(props: JoinProps) {
  return (
    <div>
      <div className="px-[16px]">
        <div className="flex justify-center">
          <Tag value="Join the waitlist" />
        </div>
        <div className="pt-4">
          <div className="flex justify-center items-center">
            <h2 className="h2 text-center pr-[10px]">If this feels fair, </h2>
            <Image src={Hand} alt="hand writing with pc infront" />
          </div>
          <div className="flex justify-center">
            <h2 className="h2 text-center">come build with us.</h2>
          </div>
        </div>
        <div className={`
          flex justify-center pt-[37px] gap-[10px]
          max-[760px]:flex-col max-[760px]:items-center unzoom
        `}>
          <div>
            <div className={`
                w-[397px] mx-auto
                max-[1300px]:w-[300px]
                max-[760px]:w-full
              `}>
              <InputCTA className="!h-[52px] input-cta" setHigherValue={props.setEmail} />
            </div>
          </div>
          <ButtonPrimary value="Join the waitlist" onClick={props.onJoin} />
        </div>
        <div className={`
          flex justify-center items-center pt-[39px] gap-[8px]
          max-[760px]:flex-col max-[760px]:items-center
        `}>
          <div className="flex items-center">
            <Image
              src={Conversation}
              alt="message bubble"
            />
            <p className="text-secondary-700 body1 pl-3">Questions?</p>
          </div>
          <div className="">
            <a
              href="mailto:ask@thecollege.co.in"
              className="text-secondary h6 pb-1 border-b-4 border-secondary hover:text-primary hover:border-primary transition-colors duration-500">
              ask@thecollege.co.in
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [showModal, setShowModal] = useState(false)
  const [shouldDisplay, setShouldDisplay] = useState(false)
  const [email, setEmail] = useState("")

  async function handleJoin() {
    try {
      await postEmail({ email })
  
      setShowModal(true)
      setShouldDisplay(true)
    }
    catch(error) {
      alert((error as any)?.message || "Something went wrong.")
    }
  }

  async function handleClose() {
    setShowModal(false)
    setTimeout(() => {
      setShouldDisplay(false)
    }, 1000)
  }

  return (
    <div>
      {shouldDisplay && <Modal onClose={() => handleClose()} shouldClose={!showModal} />}
      <section className={`
        max-w-[1560px] mx-auto
        max-[1560px]:max-w-[90%]
      `}>
        <FirstSection />
      </section>
      <section className="bg-[#F5F5F5] py-[100px]">
        <div className="max-w-[1560px] mx-auto">
          <CTASection onJoin={() => handleJoin()} setEmail={setEmail} />
        </div>
        <div className="pt-[90px]">
          <Marq />
        </div>
      </section>
    </div>
  )
}