import React from "react";
import Espact from "@espact/components/Assets/Images/top-logo.png";
import { TextInput } from "@espact/components/Forms";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from 'react-responsive';


export default function LandingFooterComponent() {
    const [message, setEmail] = useState("");
    const navigate = useNavigate();
    const isMobile = useMediaQuery({maxWidth: 1000 });
    const lastBreak = useMediaQuery({maxWidth: 831 });
  return (
    <div className="flex flex-row w-full p-16 bg-[#fef6f5] items-center justify-center pl-20 pr-10">
     <div className={`w-full h-full flex ${lastBreak ? 'flex-col' : 'flex-row'} flex-1 items-center justify-center`}>
     <div className={`flex flex-col ${lastBreak ? 'items-center' : 'items-start'} justify-center flex-1`}>
        <img src={Espact} className="cursor-pointer w-[200px] h-[200px]" onClick={() => window.scroll({top: 0, behavior: 'smooth'})}/>
        <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-6">
        Developing technological solutions for brands through new-age designs, technologies and panoramic research.

        </div>

        {!lastBreak ? <div className="flex flex-row bg-transparent border-[1px] mt-6 border-primaryColor rounded-[8px] w-[134px] h-[48px] justify-center items-center cursor-pointer" onClick={() => navigate('/donate')}>
          <div className="text-black">Apply</div>
        </div> : <div className={`flex flex-row border-[1px] mt-4 border-primaryColor bg-primaryColor rounded-[8px] w-[150px] h-[50px] justify-center items-center cursor-pointer`} onClick={() => {
          window.scroll({top: 0, behavior: 'smooth'})
        }}>
          <div className="font-[500] text-[15px] text-[#FFFFFF]">
             Subscribe
          </div>
        </div>}
      </div>

      
      <div className={`flex flex-col items-start justify-center h-[200px] flex-2 ml-16 mr-16 mb-[70px] ${isMobile ? 'mt-16' : ''}`}>
        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] cursor-pointer">
          Home
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
          Code
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
          Training
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
          About
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
          Login
        </div>

         <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
          Register
        </div>

      </div>


      {!isMobile && <div className="flex flex-col items-start justify-center flex-1 mr-10 ml-10">
        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] cursor-pointer">
        Fundamentals of Product Management 
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
        Product Management ( Advanced)
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
        Fundamentals Digital Marketing 
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
        Digital Marketing ( Advanced)
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
        UI/UX  ( Basic)
        </div>

        <div className="text-[15px] text-[#4A4A4A] font-[600] leading-[24px] mt-6 cursor-pointer">
        UI/UX  ( Advanced)
        </div>
        <div className="flex flex-row text-[#FFFFFF] border-[1px] mt-6 border-primaryColor bg-primaryColor rounded-[8px] pl-20 pr-20 h-[50px] justify-center items-center cursor-pointer" onClick={() => navigate('/service')}>
          <div className="font-[500] text-[15px] text-[#FFFFFF]">
            Make Equiry
          </div>
        </div>
      </div>}


      {!lastBreak && <div className="flex flex-col items-start justify-center flex-1">
        <div className="flex flex-col items-start justify-center">
          <div className="text-[15px] text-[#4A4A4A] font-[700] leading-[24px]">
            Email
          </div>
          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-2">
          hello@espactdigitalbuddy
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="text-[15px] text-[#4A4A4A] font-[700] leading-[24px] mt-6">
            Phone No.
          </div>
          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-2">
            +234 000 000 000
          </div>
        </div>

        <div className="w-[80%] mt-[10px]">
          <TextInput
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            height="51px"
          />
        </div>

        <div className="flex flex-row text-[#FFFFFF] border-[1px] mt-4 border-primaryColor bg-primaryColor rounded-[8px] pl-24 pr-24 h-[50px] justify-center items-center cursor-pointer">
          <div className="font-[500] text-[15px] text-[#FFFFFF]">Subscribe</div>
        </div>

        <div className="flex flex-row border-[1px] mt-4 border-primaryColor bg-primaryColor rounded-[8px] pl-[90px] pr-[90px] h-[50px] justify-center items-center cursor-pointer" onClick={() => {
          window.scroll({top: 0, behavior: 'smooth'})
        }}>
          <div className="font-[500] text-[15px] text-[#FFFFFF]">
            Back to top
          </div>
        </div>
      </div>}

      {lastBreak && <div className={`flex ${isMobile ? 'flex-col items-start' : 'flex-row items-center'} justify-between w-full`}>
      <div className="flex flex-col items-start justify-center">
          <div className="text-[15px] text-[#4A4A4A] font-[700] leading-[24px]">
            Email
          </div>
          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-2">
          hello@espactdigitalbuddy
          </div>
        </div>

        <div className={`flex flex-col items-start justify-center ${isMobile && 'mt-10'}`}>
          <div className="text-[15px] text-[#4A4A4A] font-[700] leading-[24px]">
            Phone No.
          </div>
          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-2">
            +234 000 000 000
          </div>
        </div>
      </div>}

      {lastBreak && <div className={`flex flex-row items-center justify-center w-full mt-5`}>
        
      <div className="flex flex-row border-[1px] mt-4 border-primaryColor bg-primaryColor rounded-[8px] w-full h-[40px] justify-center items-center cursor-pointer" onClick={() => {
          window.scroll({top: 0, behavior: 'smooth'})
        }}>
          <div className="font-[500] text-[15px] text-[#FFFFFF]">
             Apply
          </div>
        </div>
      </div>}

     </div>
    </div>
  );
}
