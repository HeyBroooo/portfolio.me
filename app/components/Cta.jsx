"use client";
import { Input, Button } from "@nextui-org/react";
import React from "react";
import {Image} from "@nextui-org/react";


export default function Cta() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full rounded-[16px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-[56px] px-[32px] text-center max-w-md lg:max-w-2xl xl:max-w-3xl">
        <h1 className="text-white text-[32px] font-medium">Contact With Me</h1>
        
        <Input
          isClearable
          type="Name"
          label="Name"
          variant="bordered"
          placeholder="Enter your Name"
          onClear={() => console.log("input cleared")}
          className="max-w-md mx-auto mt-4 lg:max-w-xs xl:max-w-sm"
        />

        <Input
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          onClear={() => console.log("input cleared")}
          className="max-w-md mx-auto mt-4 lg:max-w-xs xl:max-w-sm"
        />

        <Input
          isClearable
          type="Message"
          label="Message"
          variant="bordered"
          placeholder="Enter your Message"
          onClear={() => console.log("input cleared")}
          className="max-w-md mx-auto mt-4 lg:max-w-xs xl:max-w-sm"
        />

        <Button variant="bordered" className="mt-4 px-8 py-3 text-[24px] lg:text-[20px] xl:text-[24px]">
          Submit
        </Button>
      </div>
    </div>
  );
}
