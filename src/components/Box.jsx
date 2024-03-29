import React, { useEffect, useState, useRef } from "react";

import { HiMagnifyingGlass } from "react-icons/hi2";

const Box = () => {
  const [inputValue, setInputValue] = useState("");
  const shortcutRedirect = [
    "classroom",
    "youtube",
    "docspms",
    "docs",
    "slides",
    "slidespms",
    "drive",
    "drivepms",
    "github",
    "qconnect",
    "flexisched",
  ];
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const input = useRef(null);
  useEffect(() => {
    input.current.focus();
  });
  return (
    <div>
      <div className="relative lg:w-[990px] h-[304px] border-[5px] border-green md:w-[770px] rounded-[34px] bg-dark overflow-hidden flex">
        <h1 className="absolute font-bold left-[410px] text-4xl text-green mt-10">
          Hey Idiot
        </h1>
        <img
          src="https://c.tenor.com/JsXlEfD1IuwAAAAd/yuru-camp-laidback-camp.gif"
          alt="Nadeshiko bonking her head"
          className="w-[350px] h-full"
        />
        <HiMagnifyingGlass
          className="absolute left-[350px] top-[130px] mx-5 text-2xl text-yellow"
          strokeWidth="1"
          onClick={(e) => {
            if (inputValue != "") {
              window.location.href = `https://duckduckgo.com/?t=ffab&q=${inputValue}&atb=v354-1&ia=web`;
            }
          }}
        />
        <input
          type="text"
          placeholder="Search the web"
          value={inputValue}
          onChange={handleInputChange}
          ref={input}
          className="absolute bg-transparent border-b-[3px] border-yellow lg:w-[530px] md:w-[330px] top-[122px] left-[370px] ml-[40px] text-white focus:border-blue outline-none text-lg transition ease-in-out"
          onKeyPress={(e) => {
            if (e.key == "Enter") {
              if (inputValue != "") {
                window.location.href = `https://duckduckgo.com/?t=ffab&q=${inputValue}&atb=v354-1&ia=web`;
                switch (inputValue) {
                  case shortcutRedirect[0]:
                    window.location.href = "https://classroom.google.com/u/1/h";
                    break;
                  case shortcutRedirect[1]:
                    window.location.href = "https://youtube.com";
                    break;
                  case shortcutRedirect[2]:
                    window.location.href =
                      "https://docs.google.com/document/u/1/";
                    break;
                  case shortcutRedirect[3]:
                    window.location.href =
                      "https://docs.google.com/document/u/0";
                    break;
                  case shortcutRedirect[4]:
                    window.location.href =
                      "https://docs.google.com/presentation/u/0/";
                    break;
                  case shortcutRedirect[5]:
                    window.location.href =
                      "https://docs.google.com/presentation/u/1/";
                    break;
                  case shortcutRedirect[6]:
                    window.location.href =
                      "https://drive.google.com/drive/u/0/my-drive";
                    break;
                  case shortcutRedirect[7]:
                    window.location.href =
                      "https://drive.google.com/drive/u/1/my-drive";
                    break;
                  case shortcutRedirect[8]:
                    window.location.href = "https://github.com/";
                    break;
                  case shortcutRedirect[9]:
                    window.location.href =
                      "https://sis.pleasantonusd.net/StudentPortal/";
                    break;
                  case shortcutRedirect[10]:
                    window.location.href = "https://pms.flexisched.net/";
                    break;
                }
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default Box;
