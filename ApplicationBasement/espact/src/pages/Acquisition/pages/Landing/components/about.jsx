import React from "react";
import About from "@espact/components/Assets/Images/choose.png";
import { useNavigate } from "react-router";
import { useMediaQuery } from 'react-responsive';

export default function LandingAboutComponent() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({maxWidth: 1000 });
  return (
    <div className={`bg-[#FFFFFF] w-full flex flex-1 flex-row mt-10 mb-10 justify-center items-center ${isMobile ? 'pl-10 pr-10' : 'pl-20 pr-20'}`}>
      <div className={`flex items-center justify-center ${isMobile ? 'flex-col' : 'flex-row'}`}>
      <div className="flex flex-1">
        <img src={About} />
      </div>
      <div className={`${isMobile ? 'h-[20px]' : 'w-[20px]'}`}/>
      <div className={`flex ${isMobile ? 'w-full' : 'w-[500px]'} flex-1`}>
        <div className="flex flex-col">
          <div className="text-[15px] text-primaryColor font-[600]">
            About Us
          </div>

          <div className={`text-[35px] text-[#4A4A4A] font-[700] mt-6`}>
            Why choose us
          </div>

          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-6">
          At Espact, we offer expert-led courses that provide a dynamic and interactive learning experience, setting us apart from the rest. Our self-paced courses, led by industry professionals, ensure that you gain practical, real-world skills that can be immediately applied in your professional endeavors. 
          </div>

          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-6">
          With comprehensive assessment and personalized feedback, you'll receive the support needed to continuously improve and excel in the digital landscape. Join our diverse community of learners, where you can connect with like-minded individuals and access reliable customer support whenever you need it. Choose Espact for a comprehensive and flexible learning journey that empowers you to advance your career and stay ahead in today's competitive digital world
          </div>

          <div className={`flex w-full ${isMobile ? 'items-center justify-center' : 'items-center justify-start'}`}>
          <div
            className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[186px] h-[51px] mt-10 justify-center items-center cursor-pointer"
            onClick={() => navigate("/about")}
          >
            <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
              Learn More
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
