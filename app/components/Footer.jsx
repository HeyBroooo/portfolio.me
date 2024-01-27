"use client";
import Image from 'next/image'
import React from 'react'
import {User} from "@nextui-org/react";

export default function Footer() {
  return (
    <div className='pt-[80px] pb-[40px]'>
        <div className='flex items-center justify-center gap-x-[12px]'>
        <User   
      name="Mohit Kumar"
      description="Web Developer"
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
           <p className='font-bold text-[#36485C] text-[17px]'>Mohit.Dev</p>
        </div>

        <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Git Hub</li>
            <li>Linkdin</li>

        </ul>

        <p className='pt-[56px] text-center text-[14px] font-medium text-[#5F7896] sm:pt-5'>© Copyright 2024. Your Site. All rights reserved</p>

   
      
    </div>
  )
}
