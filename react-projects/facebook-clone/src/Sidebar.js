import React from "react";
import SidebarRow from "./SidebarRow";
import { BiShieldAlt2 } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { RiStore3Line } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { BiCalendarStar } from "react-icons/bi";
import { GiBackwardTime } from "react-icons/gi";
import { GoGraph } from "react-icons/go";
import { RiDropFill } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { FaUserTag } from "react-icons/fa";
import { BiHeartCircle } from "react-icons/bi";
import { MdVideogameAsset } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { FcBriefcase } from "react-icons/fc";
import { SiFacebooklive } from "react-icons/si";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Sidebar = () => {
  const seeBtn = () => {
    const mainBtn = document.querySelector(".main__button");
    const secondHalf = document.querySelector(".second__half");
    const arrowSvg = document.querySelector(".main__button svg");
    const title = document.querySelector(".main__button .arrowTitle");

    if (mainBtn.classList.contains("see__more")) {
      secondHalf.style.display = "block";
      mainBtn.classList.add("see__less");
      arrowSvg.style.transform = "rotate(180deg)";
      title.innerText = "";
      title.innerText = "See less";
      mainBtn.classList.remove("see__more");
    } else if (mainBtn.classList.contains("see__less")) {
      secondHalf.style.display = "none";
      mainBtn.classList.add("see__more");
      arrowSvg.style.transform = "rotate(0deg)";
      title.innerText = "";
      title.innerText = "See more";
      mainBtn.classList.remove("see__less");
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__half">
        <SidebarRow src={"./demo.JPG"} title="Saad" />
        <SidebarRow Icon={BiShieldAlt2} title="COVID-19 Information Center" />
        <SidebarRow Icon={FaUserFriends} title="Friends" />
        <SidebarRow Icon={HiUserGroup} title="Groups" />
        <SidebarRow Icon={RiStore3Line} title="Marketplace" />
        <SidebarRow Icon={MdOndemandVideo} title="Videos" />
        <SidebarRow Icon={BiCalendarStar} title="Events" />
        <SidebarRow Icon={GiBackwardTime} title="Memories" />
      </div>
      <div className="sidebar__secondHalf">
        <div className="second__half" style={{ display: "none" }}>
          <SidebarRow Icon={GoGraph} title="Ads Manager" />
          <SidebarRow Icon={RiDropFill} title="Blood donations" />
          <SidebarRow Icon={FiAlertCircle} title="Crisis Response" />
          <SidebarRow Icon={FaMoneyBillWave} title="Facebook Pay" />
          <SidebarRow Icon={AiFillStar} title="Favorites" />
          <SidebarRow Icon={FaUserTag} title="Friend lists" />
          <SidebarRow Icon={BiHeartCircle} title="Fundraisers" />
          <SidebarRow Icon={MdVideogameAsset} title="Games" />
          <SidebarRow Icon={SiNintendogamecube} title="Gaming video" />
          <SidebarRow Icon={FcBriefcase} title="Jobs" />
          <SidebarRow Icon={SiFacebooklive} title="Live videos" />
        </div>
        <div className="main__button see__more" onClick={seeBtn}>
          <SidebarRow
            arrowTitle="See more"
            ArrowIcon={RiArrowDropDownLine}
            thisStyle={{
              color: "white",
              background: "rgb(68,69,70)",
              borderRadius: "50%",
              fontSize: "1.6rem",
            }}
            style={{ display: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
