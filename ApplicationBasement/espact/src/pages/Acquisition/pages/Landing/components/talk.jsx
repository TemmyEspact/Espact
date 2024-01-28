import Talk from "@espact/components/Assets/Images/talk.png";
import { TextInput } from "@espact/components/Forms";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';

export default function LandingTalkComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isMobile = useMediaQuery({ maxWidth: 1000 });
  return (
    <div className={`flex flex-col w-[100%] mb-10 mt-10 ${isMobile && 'pl-10 pr-10'}`}>
      <div className="bg-[#FFFFFF] w-[100%] flex flex-row justify-between h-[500px]">
        <div className="flex flex-col items-center justify-center w-[100%]">
          <div className="flex flex-row justify-between items-center w-[100%] mt-[50px]">
            {!isMobile && <div className="flex flex-1">
              <img src={Talk} />
            </div>}
            <div className="flex flex-1">
              <div className="flex flex-col items-center justify-center w-[100%]">
                <div className={`${isMobile ? 'w-full' : 'w-[80%]'}`}>
                  <div className="text-[35px] text-[#4A4A4A] font-[700] mt-6">
                  Contact Us
                  </div>

                  <div className="text-[15px] text-[#4A4A4A] font-[400] leading-[24px] mt-6">
                  Need assistance or have questions? Reach out to our dedicated support team through our contact form or directly via email. We are here to provide you with the guidance and support you need to maximize your learning experience.
                  </div>
                </div>
                <div className={`${isMobile ? 'w-full' : 'w-[80%]'}`}>
                  <TextInput
                    placeholder="Enter full name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={`${isMobile ? 'w-full' : 'w-[80%]'} mt-15`}>
                  <TextInput
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={`${isMobile ? 'w-full' : 'w-[80%]'} mt-15`}>
                  <TextInput
                    placeholder="Enter message"
                    onChange={(e) => setMessage(e.target.value)}
                    height="100px"
                    textarea={true}
                  />
                </div>

                <div className={`${isMobile ? 'w-full' : 'w-[80%]'} flex flex-row items-start justify-start mt-[40px]`}>
                  <div className="flex flex-row text-[#FFFFFF] bg-primaryColor border-[1px] border-primaryColor rounded-[8px] w-[134px] h-[51px]  justify-center items-center cursor-pointer">
                    <div>Send</div>
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
