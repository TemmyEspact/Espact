import React from "react";
import Plus from "@espact/components/Assets/Images/Plus.svg";
import Initial from "@espact/components/Assets/Images/initial.png";
import Message from "@espact/components/Assets/Images/message.png";
import Sidebar from "../../../components/MainContainer/Sidebar";
import { useMediaQuery } from 'react-responsive';

export default function LandingInitialComponent() {
  const firstBreak = useMediaQuery({maxWidth: 1276 });
  const secondBreak = useMediaQuery({maxWidth: 1147 });
  const isMobile = useMediaQuery({maxWidth: 1000 });
  return (
    <div className={`bg-[#FFFFFF] w-full flex flex-row justify-center items-start ${isMobile ? 'mt-10 h-full mb-20' : 'mt-20 mb-40'}`}>
      {!isMobile && <div className="ml-0 mr-10">
        <Sidebar />
      </div>}
      <div className={`flex flex-1 w-full ${isMobile ? 'mt-0' : firstBreak ? 'mt-5' : secondBreak ? 'mt-1' : 'mt-10'}`}>
        <div className={`flex flex-col w-full ${isMobile ? 'items-center justify-center pl-10 pr-10' : 'items-start justify-center'}`}>
          <div className={`${isMobile ? 'text-[28px] leading-[34px]' : 'text-[55px]'} text-[#4A4A4A] font-[700] z-20`}>
          Code Based Personalised Digital Platform
          </div>

          <div className="flex flex-col w-full mt-[40px]">
            <div className={`flex flex-row w-full justify-center items-start`}>
              <img src={Plus} />
              <div className={`${isMobile ? 'text-[12px]' : 'text-[15px]'} text-[#4A4A4A] leading-[24px] ml-6 z-20`}>
              Welcome to Espact Digital Buddy, your gateway to a world of digital skills mastery. Explore our extensive list of expert-led courses designed to empower you to excel in today's digital landscape, all at your own pace.
              </div>
            </div>
          </div>

          <div
            className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[186px] h-[51px] mt-[40px] justify-center items-center cursor-pointer"
            onClick={() => navigate("/register")}
          >
            <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
              Get Started
            </div>
          </div>
        </div>
      </div>

      {!isMobile && <div className="flex flex-1">
        <img src={Initial}  className={`z-0 absolute top-0 right-0 ${firstBreak ? 'w-[60%]' : secondBreak ? 'h-full w-[60%]' : ''}`}/>
      </div>}

      <div className="flex flex-col z-20 right-6 top-[550px] fixed cursor-pointer">
          <div className={`text-primaryColor ${isMobile ? 'text-[8px]' : 'text-[14px]'} font-[600] w-[20px]`}>
            Make Enquiry
          </div>
          <img src={Message} className={`${isMobile ? 'h-[30px] w-[30px]' : 'h-[60px] w-[62px]'}`}/>
        </div>
    </div>
  );
}
