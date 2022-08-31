import React from "react";
import { BsThreeDots } from "react-icons/bs";

const HeaderItem = ({ text, trunc }) => {
  return (
    <li className="nav-item nav-header">
      {trunc ? (
        <BsThreeDots className="scale-icon" />
      ) : (
        <span className="">{text}</span>
      )}
    </li>
  );
};

export default HeaderItem;
