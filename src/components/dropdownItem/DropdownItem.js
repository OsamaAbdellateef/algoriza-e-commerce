import React, { useState, useEffect } from "react";
import "./dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosArrowForward } from "react-icons/io";
import ListItem from "../listItem/ListItem";
import { BiCircle } from "react-icons/bi";
const DropdownItem = ({ icon, text, subElements, trunc, badge }) => {
  const [expand, toggleExpand] = useState(false);

  return (
    <li
      className="dropdown-item"
      onClick={() => {
        toggleExpand((e) => !e);
      }}
    >
      <div>
        <a
          href="#/"
          onClick={() => {
            console.log(badge);
          }}
        >
          {icon}
          <span className={`item-text ${trunc ? "text-trunc" : " "}`}>
            {text}
          </span>
        </a>
        {badge}
        <IoIosArrowForward
          className={`${trunc && "text-trunc"} arrow-svg ${
            expand ? "rotate" : " "
          }`}
        />
      </div>
      <ul
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`sublist ${expand && !trunc ? "expand" : " "}`}
      >
        {subElements.map((e, index) => (
          <li key={index} className="sub-item hover-right">
            <a href="#">
              <BiCircle />
              <span>{e}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DropdownItem;
