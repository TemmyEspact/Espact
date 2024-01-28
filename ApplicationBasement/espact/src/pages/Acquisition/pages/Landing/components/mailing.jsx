import Mailing from "@espact/components/Assets/Images/mailing.png";
import { TextInput } from "@espact/components/Forms";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';


export default function LandingMailingComponent() {
    const [message, setEmail] = useState("");
    const isMobile = useMediaQuery({maxWidth: 1000 });
  return (
    <div className={`flex flex-col w-[100%] mt-20 mb-20 pl-10 pr-10`}>
      <div className=" w-[100%] flex flex-row justify-between">
        <div className="flex flex-col items-center justify-center w-[100%]">
          <div className="flex flex-row justify-center items-center w-[100%] mt-[50px]">
            {!isMobile && <div className="flex  ">
              <img src={Mailing} />
            </div>}
            {!isMobile && <div className="w-[40px]"/>}
            <div className={`flex items-center ${isMobile ? 'w-full' : 'w-[40%]'} justify-center h-full`}>
              <div className="flex flex-col items-center justify-center w-[100%] h-full">
                <div className="w-[100%]">
                  <div className="text-[35px] text-[#4A4A4A] font-[700] mt-6">
                  From Our Mailing List
                  </div>

                  <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-6">
                  Subscribe to our mailing list to stay up-to-date with the latest course releases, industry trends, and valuable insights from our experts. Be the first to know about new learning opportunities and exclusive offers tailored to your interests and goals.
                  </div>
                </div>
                
                <div className="flex flex-row items-center justify-center w-[100%]">
                <div className={`${isMobile ? 'w-full' : 'w-[80%]'} mt-[15px]`}>
                  <TextInput
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                    height="51px"
                  />
                </div>

                <div className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] mt-6 ml-6 border-primaryColor rounded-[8px] w-[134px] h-[48px] justify-center items-center cursor-pointer">
                    <div>Subscribe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
