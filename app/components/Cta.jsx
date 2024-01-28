"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
import { ValidationError, useForm } from '@formspree/react';
import {Textarea} from "@nextui-org/react";


export default function Cta() {
  const [state, handleSubmit] = useForm("meqyengn");


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full rounded-[16px] bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-[56px] px-[32px] text-center max-w-md lg:max-w-2xl xl:max-w-3xl">
        <h1 className="text-white text-[32px] font-medium">Contact With Me</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="text-gray-600 block">Email Address</label>
            <Input
              id="email"
              type="email" 
              name="email"
              placeholder="Enter your email"
              variant="bordered"
              className="w-full"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-gray-600 block">Message</label>
            <Textarea
              id="message"
              name="message"
              variant="bordered"
              placeholder="Enter your Message"
              className="w-full h-24 border rounded-md p-2"
            />
            <ValidationError
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <Button 
            type="submit" 
            variant="filled" 
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
            disabled={state.submitting}
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      
      </div>
    </div>
  );
}
