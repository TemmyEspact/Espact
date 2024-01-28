import React, { useState } from "react";
import Service1 from "@espact/components/Assets/Images/service1.png";
import Service2 from "@espact/components/Assets/Images/service2.png";
import Service3 from "@espact/components/Assets/Images/service3.png";
import Service4 from "@espact/components/Assets/Images/service4.png";
import Service5 from "@espact/components/Assets/Images/service5.png";
import Service6 from "@espact/components/Assets/Images/service6.png";
import { useNavigate } from "react-router";
import { useMediaQuery } from 'react-responsive';

export default function LandingServiceComponent() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({maxWidth: 1144 });

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  return (
    <div className={`bg-[#FFFFFF] w-full flex flex-row mt-20 mb-20 justify-center items-center ${isMobile ? 'pl-10 pr-10' : 'pl-20 pr-20'}`}>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[15px] text-primaryColor font-[600]">
          Coueses
          </div>

          <div className="flex flex-row mt-6 ">
            <div className="text-[30px] text-center text-[#4A4A4A] font-[700]">
              Explore our comprehensive catalog of self-paced digital skills
            </div>
            
          </div>

          <div className="text-[15px] text-[#4A4A4A] text-center font-[400] leading-[24px] mt-6">
          Choose from a variety of subjects and levels, each meticulously curated and delivered by industry professionals to ensure a top-notch learning experience.
          </div>
        </div>

        <div className={`w-full flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center mt-20`}>
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className={`bg-white shadow-md shadow-primaryColor h-[168px] ${isMobile ? 'w-full mt-10' : 'w-[539px]'} rounded-[11px] flex flex-row items-center justify-start p-10`} onMouseLeave={() => setIsHovered(false)} onMouseEnter={() => setIsHovered(true)}>
              <img src={Service1} />
              <div className={`flex flex-col items-start justify-center ${isMobile ? 'ml-4' : 'ml-10'}`}>
                <div className="text-[14px] text-[#4A4A4A] font-[600]">
                Fundamentals of Product Management 
                </div>
                <div className="text-[14px] text-[#4A4A4A] font-[400] mt-4">
                Engage in an interactive learning experience with our video sessions, role-play scenarios, quizzes, and practical exercises
                </div>
                {isHovered && <div
                  className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[148px] h-[37px] mt-[15px] justify-center items-center cursor-pointer"
                  onClick={() => navigate("/service")}
                >
                  <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
                    Make Enquiry
                  </div>
                </div>}
              </div>
            </div>
            <div className={`bg-white shadow-md shadow-primaryColor h-[168px] ${isMobile ? 'w-full mt-10' : 'w-[539px] mt-10'} rounded-[11px] flex flex-row items-center justify-start p-10`} onMouseLeave={() => setIsHovered2(false)} onMouseEnter={() => setIsHovered2(true)}>
              <img src={Service2} />
              <div className={`flex flex-col items-start justify-center ${isMobile ? 'ml-4' : 'ml-10'}`}>
                <div className="text-[14px] text-[#4A4A4A] font-[600]  mt-4">
                Product Management ( Advanced)
                </div>
                <div className="text-[14px] text-[#4A4A4A] font-[400]  mt-4">
                  We develop and design world class websites and apps for
                  organisations
                </div>
                {isHovered2 && <div
                  className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[148px] h-[37px] mt-[15px] justify-center items-center cursor-pointer"
                  onClick={() => navigate("/service")}
                >
                  <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
                    Make Enquiry
                  </div>
                </div>}
              </div>
            </div>
            <div className={`bg-white shadow-md shadow-primaryColor h-[168px] ${isMobile ? 'w-full mt-10' : 'w-[539px] mt-10'} rounded-[11px] flex flex-row items-center justify-start p-10`} onMouseLeave={() => setIsHovered3(false)} onMouseEnter={() => setIsHovered3(true)}>
              <img src={Service3} />
              <div className={`flex flex-col items-start justify-center ${isMobile ? 'ml-4' : 'ml-10'}`}>
                <div className="text-[14px] text-[#4A4A4A] font-[600]">
                Fundamentals Digital Marketing 
                </div>
                <div className="text-[14px] text-[#4A4A4A] font-[400] mt-4">
                Engage in an interactive learning experience with our video sessions, role-play scenarios, quizzes, and practical exercises
                </div>
                {isHovered3 && <div
                  className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[148px] h-[37px] mt-[15px] justify-center items-center cursor-pointer"
                  onClick={() => navigate("/service")}
                >
                  <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
                    Make Enquiry
                  </div>
                </div>}
              </div>
            </div>
          </div>
          <div className={`${isMobile ? 'h-[20px]' : 'w-[20px]'}`}/>
          <div className="flex flex-1 flex-col items-center justify-center">
            <div className={`bg-white shadow-md shadow-primaryColor h-[168px] ${isMobile ? 'w-full mt-10' : 'w-[539px]'} rounded-[11px] flex flex-row items-center justify-start p-10`} onMouseLeave={() => setIsHovered4(false)} onMouseEnter={() => setIsHovered4(true)}>
              <img src={Service4} />
              <div className={`flex flex-col items-start justify-center ${isMobile ? 'ml-4' : 'ml-10'}`}>
                <div className="text-[14px] text-[#4A4A4A] font-[600]">
                UI/UX  ( Basic)
                </div>
                <div className="text-[14px] text-[#4A4A4A] font-[400]">
                Engage in an interactive learning experience with our video sessions, role-play scenarios, quizzes, and practical exercises
                </div>
                {isHovered4 && <div
                  className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[148px] h-[37px] mt-[15px] justify-center items-center cursor-pointer"
                  onClick={() => navigate("/service")}
                >
                  <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
                    Make Enquiry
                  </div>
                </div>}
              </div>
            </div>
            <div className={`bg-white shadow-md shadow-primaryColor h-[168px] ${isMobile ? 'w-full mt-10' : 'w-[539px] mt-10'} rounded-[11px] flex flex-row items-center justify-start p-10`} onMouseLeave={() => setIsHovered5(false)} onMouseEnter={() => setIsHovered5(true)}>
              <img src={Service5} />
              <div className={`flex flex-col items-start justify-center ${isMobile ? 'ml-4' : 'ml-10'}`}>
                <div className="text-[14px] text-[#4A4A4A] font-[600]">
                UI/UX  ( Advanced)
                </div>
                <div className="text-[14px] text-[#4A4A4A] font-[400]">
                Engage in an interactive learning experience with our video sessions, role-play scenarios, quizzes, and practical exercises
                </div>
                {isHovered5 && <div
                  className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[148px] h-[37px] mt-[15px] justify-center items-center cursor-pointer"
                  onClick={() => navigate("/service")}
                >
                  <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
                    Make Enquiry
                  </div>
                </div>}
              </div>
            </div>
            <div className={`bg-white shadow-md shadow-primaryColor h-[168px] ${isMobile ? 'w-full mt-10' : 'w-[539px] mt-10'} rounded-[11px] flex flex-row items-center justify-start p-10`} onMouseLeave={() => setIsHovered6(false)} onMouseEnter={() => setIsHovered6(true)}>
              <img src={Service6} />
              <div className="flex flex-col items-start justify-center ml-10">
                <div className="text-[14px] text-[#4A4A4A] font-[600]">
                UI/UX ( Advanced)
                </div>
                <div className="text-[14px] text-[#4A4A4A] font-[400]">
                Engage in an interactive learning experience with our video sessions, role-play scenarios, quizzes, and practical exercises
                </div>
                {isHovered6 && <div
                  className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[148px] h-[37px] mt-[15px] justify-center items-center cursor-pointer"
                  onClick={() => navigate("/service")}
                >
                  <div className="text-[14px] text-[#FFFFFF] text-center cursor-pointer">
                    Make Enquiry
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
