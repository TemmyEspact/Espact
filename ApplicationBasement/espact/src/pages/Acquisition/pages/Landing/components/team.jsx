import React from "react";
import Team from "@espact/components/Assets/Images/team.png";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

export default function LandingTeamComponent() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div className={`bg-[#FFFFFF] w-full flex flex-row ${isMobile ? 'mt-10' : 'mt-28'} pl-10 pr-10 mb-10 justify-center items-center`}>
      <div className={`flex ${isMobile ? 'w-full' : 'w-[30%]'}`}>
        <div className="flex flex-col">
          <div className="text-[35px] text-[#4A4A4A] font-[700] mt-6">
          Meet our Instructor
          </div>

          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-6">
          Meet our team of dedicated subject experts and educators, committed to delivering comprehensive, industry-relevant courses that equip learners with the skills and confidence they need to succeed in the digital sphere.
          </div>

          <div
            className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[186px] h-[51px] mt-10 justify-center items-center cursor-pointer"
            onClick={() => {}}
          >
            <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
              View Team
            </div>
          </div>
        </div>
      </div>

      {!isMobile && <div className="w-[20px]" />}

      {!isMobile && (
        <div className="flex">
          <img src={Team} />
        </div>
      )}
    </div>
  );
}
