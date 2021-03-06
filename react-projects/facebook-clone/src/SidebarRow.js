import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

const SidebarRow = ({ src, Icon, title, ArrowIcon, thisStyle, arrowTitle }) => {
  return (
    <>
      <div className="sidebarRow">
        {src && (
          <Avatar
            src={src}
            style={{ color: "2e81f4", width: "30px", height: "30px" }}
          />
        )}
        {Icon && <Icon style={{ color: "2e81f4", fontSize: "1.4rem" }} />}
        {title && <h4>{title}</h4>}
        <div className="see__button">
          {ArrowIcon && <ArrowIcon style={thisStyle} />}
          <h4 className="arrowTitle">{arrowTitle}</h4>
        </div>
      </div>
    </>
  );
};

export default SidebarRow;
