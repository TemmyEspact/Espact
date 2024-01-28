import Espact from "@espact/components/Assets/Images/top-logo.png";
import Menu from "@espact/components/Assets/Images/Menu.svg";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const [toggle, setToggle] = useState(false);

  const closeMenu = () => {
    setToggle(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', closeMenu);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', closeMenu);
    };
  }, []);

  return (
    <div
      className={`flex flex-row w-[100%] h-[100px] bg-[#FFFFFF] justify-between items-center ${
        isMobile ? "pr-10" : "pl-[100px] pr-16"
      }`}
    >
      <div className="flex">
        <img
          src={Espact}
          className="cursor-pointer w-[200px] h-[200px]"
          onClick={() => navigate("/", { replace: true })}
        />
      </div>

      {!isMobile && (
        <div className="flex flex-row justify-between items-center z-10">
          <div
            className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
            onClick={() => navigate("/", { replace: true })}
          >
            Home
          </div>

          <div
            className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
            onClick={() => navigate("/about")}
          >
            About
          </div>

          <div
            className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
            onClick={() => navigate("/donate")}
          >
            Donate
          </div>

          <div
            className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
            onClick={() => navigate("/team")}
          >
            Team
          </div>
          <div
            className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
            onClick={() => navigate("/project")}
          >
            Project
          </div>
          <div
            className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
            onClick={() => navigate("/service")}
          >
            Service
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex items-center justify-center relative">
          <img src={Menu} onClick={() => setToggle(!toggle)} />
          {toggle && (
            <div
              className="bg-white shadow-xl rounded-[20px] w-[200px] h-[400px] border-[1px] border-primaryColor absolute right-6 top-6 flex flex-col items-center justify-between z-50 overflow-y-auto"
              id="smallnav"
            >
              <div
                className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
                onClick={() => {
                  navigate("/", { replace: true })
                  setToggle(false);
                }}
              >
                Home
              </div>

              <div
                className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
                onClick={() => 
                {
                  navigate("/about")
                  setToggle(false);
                }
                }
              >
                About
              </div>

              <div
                className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
                onClick={() =>{
                   navigate("/donate")
                   setToggle(false);
                  }}
              >
                Donate
              </div>

              <div
                className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
                onClick={() => {
                  navigate("/team")
                  setToggle(false);
                }}
              >
                Team
              </div>
              <div
                className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
                onClick={() => {
                  navigate("/project")
                  setToggle(false);
                }}
              >
                Project
              </div>
              <div
                className="cursor-pointer text-[#4A4A4A] font-[500] text-[16px] p-5"
                onClick={() => {
                  navigate("/service")
                  setToggle(false);
                }}
              >
                Service
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
