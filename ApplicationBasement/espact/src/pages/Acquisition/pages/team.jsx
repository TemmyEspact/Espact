import React from "react";
import Sidebar from "../components/MainContainer/Sidebar";
import Plus from "@espact/components/Assets/Images/Plus.svg";
import Fig from "@espact/components/Assets/Images/Fig.svg";
import Message from "@espact/components/Assets/Images/message.svg";

export default function TeamScreen() {
  return (
    <div className="bg-[#FFFFFF] w-full flex flex-row h-[100vh] justify-start items-start overflow-y-hidden">
      <div className="w-full flex flex-row h-[450px] justify-between items-start">
        <div className="ml-0 mr-10">
          <Sidebar />
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="text-[55px] text-[#4A4A4A] font-[700]">
              Meet The Team
            </div>

            <div className="flex flex-col ">
              <div className="flex flex-row  justify-start items-start">
                <div className="text-[15px] text-[#4A4A4A] leading-[24px] ml-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
                  nisi, erat blandit elit tellus nunc diam iaculis risus.
                  Aliquet dolor turpis interdum posuere
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-[60%] overflow-y-scroll h-[550px] mt-6">
              {/* <div className="w-[720px] h-[202px] rounded-[14px] m-5">
                <div className="w-[720px] h-[202px] rounded-[14px] m-5">
                  <img src={Fig} />
                </div>
              </div> */}
              <div className="w-[200px] h-[202px] rounded-[14px] m-5">
                  <img src={Fig} />
                </div>
              <div className="w-[200px] h-[202px] rounded-[14px] m-5">
                <img src={Fig} />
              </div>
              <div className="w-[200px] h-[202px] rounded-[14px] m-5">
                <img src={Fig} />
              </div>
              <div className="w-[200px] h-[202px] rounded-[14px] m-5">
                <img src={Fig} />
              </div>
              <div className="w-[200px] h-[202px] rounded-[14px] m-5">
                <img src={Fig} />
              </div>
              <div className="w-[200px] h-[202px] rounded-[14px] m-5">
                <img src={Fig} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className=" flex flex-col z-20 right-6 top-[550px] fixed cursor-pointer">
            <div className="text-primaryColor text-[14px] font-[600] w-[20px]">
              Make Enquiry
            </div>
            <img src={Message} className="h-[60px] w-[62px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
