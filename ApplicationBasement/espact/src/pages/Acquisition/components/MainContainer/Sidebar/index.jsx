import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import styled from "styled-components";
import Accordion from "./Accordion";
import JusticeLabLogo from "@espact/components/Assets/Logo/top-logo.svg";
import Play from "@espact/components/Assets/Images/CourseCBT.svg";
import Plus from "@espact/components/Assets/Images/CoursePlus.svg";
import CourseQ from "@espact/components/Assets/Images/CourseQ.svg";
import FowardArrow from "@espact/components/Assets/Images/forward-arrow.svg";
import BackwardArrow from "@espact/components/Assets/Images/back-arrow.svg";
import Youtube from "@espact/components/Assets/Images/youtube.svg";
import Whatsapp from "@espact/components/Assets/Images/Whatsapp.svg";
import Twitter from "@espact/components/Assets/Images/Twitter.svg";
import Facebook from "@espact/components/Assets/Images/facebook.svg";
import LinkedIn from "@espact/components/Assets/Images/linkedIn.svg";
import Instagram from "@espact/components/Assets/Images/instagram.svg";

const Wrapper = styled.div`
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default function Sidebar() {
  const location = useLocation();
  const naviagate = useNavigate();
  const [page, setPage] = useState("dashboard");
  const [subPage, setSubPage] = useState();

  useEffect(() => {
    const arraySet = location.pathname.split("/");
    setPage(arraySet[1]);
  }, [location]);

  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-[60px] bg-transparent h-[300px]">
      <div className="border-b-0 border-transparent pt-[10px] flex flex-col">
        <div
          className="bg-[#36a8a5] rounded-tr-[20px] rounded-br-[20px] h-[45px] w-[60px] flex justify-center items-center cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <img src={FowardArrow} /> : <img src={BackwardArrow} />}
        </div>

        <div className={`w-[60px] ml-5 transition-opacity duration-500 ${toggle ? 'opacity-100' : 'opacity-0'}`}>
       {toggle && <>
        <img src={Youtube} className="w-[30px] h-[30px] mt-5 cursor-pointer"/>

        <img src={Facebook} className="w-[30px] h-[30px] mt-5 cursor-pointer"/>

        <img src={Twitter} className="w-[30px] h-[30px] mt-5 cursor-pointer"/>

        <img src={Instagram} className="w-[30px] h-[30px] mt-5 cursor-pointer"/>

        <img src={LinkedIn} className="w-[30px] h-[30px] mt-5 cursor-pointer"/>

        <img src={Whatsapp} className="w-[30px] h-[30px] mt-5 cursor-pointer"/>

        </>}
        </div>

      </div>
    </div>
  );
}
