import React from "react";
import "./Header.css";
import facebook from "./facebook.svg";
import { CgSearch } from "react-icons/cg";
import { BiArrowBack } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { MdOndemandVideo } from "react-icons/md";
import { RiStore3Line } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { SiNintendogamecube } from "react-icons/si";
import { FiPlus } from "react-icons/fi";
import { RiMessengerFill } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import { Avatar, IconButton } from "@material-ui/core";

const Header = () => {
  const buttonClick = () => {
    const buttons = document.querySelectorAll(".extra__icon");
    buttons.forEach((button) => {
      button.addEventListener("mousedown", () => {
        button.classList.toggle("bg-blue");
      });
    });
  };
  const buttonFocus = () => {
    const buttons = document.querySelectorAll(".extra__icon");
    buttons.forEach((button) => {
      button.classList.remove("bg-blue");
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={facebook} className="facebook" alt="" />
        <div className="header__input">
          <CgSearch size={"1.2rem"} className="searchI" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <AiOutlineHome
            className="icons"
            color={"rgb(176,179,184)"}
            size={"1.7rem"}
          />
        </div>
        <div className="header__option">
          <MdOndemandVideo
            className="icons"
            color={"rgb(176,179,184)"}
            size={"1.7rem"}
          />
        </div>
        <div className="header__option">
          <RiStore3Line
            className="icons"
            color={"rgb(176,179,184)"}
            size={"1.7rem"}
          />
        </div>
        <div className="header__option">
          <HiUserGroup
            color={"rgb(176,179,184)"}
            style={{
              borderRadius: "50%",
              border: "2px solid rgb(176, 179, 184)",
            }}
            size={"1.7rem"}
            className="icons"
          />
        </div>
        <div className="header__option">
          <SiNintendogamecube
            className="icons"
            color={"rgb(176,179,184)"}
            size={"1.7rem"}
          />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar style={{ width: "1.6rem", height: "1.6rem" }} />
          <h5 className="profile__name">Saad</h5>
        </div>
        <IconButton
          onClick={() => {
            const buttons = document.querySelectorAll(".extra__icon");
            buttons[0].classList.toggle("bg-blue");
          }}
          onBlur={buttonFocus}
          className="extra__icon"
        >
          <FiPlus />
        </IconButton>
        <IconButton
          onClick={() => {
            const buttons = document.querySelectorAll(".extra__icon");
            buttons[1].classList.toggle("bg-blue");
          }}
          onBlur={buttonFocus}
          className="extra__icon"
        >
          <RiMessengerFill />
        </IconButton>
        <IconButton
          onClick={() => {
            const buttons = document.querySelectorAll(".extra__icon");
            buttons[2].classList.toggle("bg-blue");
          }}
          onBlur={buttonFocus}
          className="extra__icon"
        >
          <BiBell />
        </IconButton>
        <IconButton
          onClick={() => {
            const buttons = document.querySelectorAll(".extra__icon");
            buttons[3].classList.toggle("bg-blue");
          }}
          onBlur={buttonFocus}
          className="extra__icon"
        >
          <TiArrowSortedDown />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
