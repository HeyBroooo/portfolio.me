"use client";
import Image from "next/image";
import React from "react";
import Gradient from "../../public/Gradient.svg";
import HeroImage from "../../public/phonelap.svg";
import { SiFirebase } from "react-icons/si";
import { FaCss3 } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";



export default function Hero() {
  return (
    <div className="pt-24 lg:pt-40">
      <div className="px-[20px] lg:px-[280px]">
      <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
      <TypeAnimation
        sequence={[
          'Welcome To the world of Tech',
          1000,
          'Welcome To the world of tech',
          1000,
          'Welcome To the world of tech',
          1000,
          'Welcome To the world of tech',
          1000,
        ]}
        speed={50} 
        style={{ fontSize: '2em' }}
        repeat={Infinity}
      />
    </h1>
        <p className="text-center pt-6 text-[#36485c] lg:text-[18px] lg:leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptate, voluptatumlestias fugit quibusdam consectetur adipisicing
          elit. Quisquam voluptate, voluptatumlestias fugit qu aperiam.
        </p>
        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 rounded-[4px] text-white lg:w-fit">
            Download
          </button>
          <button className="w-1/2 text-[#4328EB] lg:w-fit">Know more</button>
        </div>
      </div>

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
          <Image src={HeroImage} alt="Hero image " className="-ml-4 h-[310px] lg:-mb-28 lg:h-auto xl:w-[70%]"/>

          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
                <p className="text-[#FFFFFF] text-center">Project Which can change the world</p>

                <div className="grid grid-col-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-col-5">

                <SiFirebase />
                <FaCss3 />


                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
