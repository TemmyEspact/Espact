import React, { useState } from "react";
import Testimony from "@espact/components/Assets/Images/testimony.svg";
import { useMediaQuery } from 'react-responsive';

export default function LandingTestimoniesComponent() {
  const [activeItem, setActiveItem] = useState(0);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const isMobile = useMediaQuery({maxWidth: 1000 });

  return (
    <div className={`bg-[#FFFFFF] w-full flex flex-row mt-20 mb-20 justify-center items-center ${isMobile && 'pl-10 pr-10'}`}>
      <div className={`flex ${isMobile ? 'flex-col w-full' : 'flex-row'} w-full items-center justify-center`}>
      <div className={`flex ${isMobile ? 'w-full' : 'w-[30%]'}`}>
        <div className="flex flex-col">
          <div className={`text-[15px] text-primaryColor font-[600] ${isMobile && 'text-center'}`}>
            Testimonies
          </div>

          <div className="text-[35px] text-[#4A4A4A] font-[700] mt-4">
          What Our Learners Say
          </div>

          <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-2 w-[80%]">
          Read inspiring success stories from individuals who have transformed their careers and expanded their skill sets through our platform. Discover how our courses have empowered them to achieve their professional goals and make significant strides in the digital sphere.
          </div>
        </div>
      </div>

      <div className={`flex ${isMobile ? 'w-full mt-5' : 'w-[40%]'}`}>
        <div className="flex flex-col overflow-y-auto w-full h-[400px]">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`p-5 text-16px ${
                index === activeItem
                  ? "font-bold text-black filter-none"
                  : "font-normal text-gray-600 filter blur-sm"
              } hover:filter-none hover:text-black cursor-pointer transition duration-200 `}
            >
              <div className="flex flex-col bg-primaryColor h-[168px] rounded-[20px]">
                <div className="flex flex-col bg-[#fefcfd] shadow-sm shadow-white h-[168px] ml-10 rounded-tr-[20px] rounded-br-[20px] justify-center">
                  <div className="flex flex-row">
                    <div className="w-[20px]"></div>
                    <img src={Testimony} alt="placeholder" className="h-50 w-50" />
                    <div className="w-[20px]"></div>
                    <div className="flex flex-col">
                      <div className="text-[24px] font-medium">Hope Grace</div>
                      <div className="text-[12px]">Learner</div>
                    </div>
                  </div>
                  <div className="text-14px text-blcak pt-5 pb-30 pl-[20px]">
                  Enrolling in courses on Espact was the best decision I made for my career. The diverse course catalog allowed me to explore various aspects of digital skills, and the flexible self-paced learning format fit perfectly with my busy schedule.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
