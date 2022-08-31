import React, { useState, useEffect } from "react";
import ResizeObserver from "rc-resize-observer";
import {
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineCalendar,
  AiOutlineUser,
} from "react-icons/ai";
import {
  MdOutlineDescription,
  MdCheckBoxOutlineBlank,
  MdOutlineInsertDriveFile,
  MdOutlineFormatColorFill,
  MdOutlineDeleteOutline,
  MdOutlineInvertColors,
} from "react-icons/md";
import { BsChat } from "react-icons/bs";

import "./sidebar.css";
import logo from "../../imgs/logo.svg";
import cart from "../../imgs/cart-icon.svg";
import home from "../../imgs/home-icon.svg";
import DropdownItem from "../dropdownItem/DropdownItem";
import ListItem from "../listItem/ListItem";
import SlidebarHeader from "../SlidebarHeader";
import HeaderItem from "../HeaderItem";

const navListAppAndPages = [
  { icon: <AiOutlineMail />, text: "Email" },
  { icon: <BsChat />, text: "Chat" },
  { icon: <MdCheckBoxOutlineBlank />, text: "Todo" },
  { icon: <AiOutlineCalendar />, text: "Calendar" },
];
const navListUserInterface = [
  { icon: <MdOutlineFormatColorFill />, text: "Typography" },
  { icon: <MdOutlineInvertColors />, text: "Colors" },
  { icon: <MdOutlineDeleteOutline />, text: "Feather" },
];
const Sidebar = ({
  close,
  toggleClose,
  trunc,
  toggleTrunc,
  left,
  toggleLeft,
  darkMode,
}) => {
  return (
    <ResizeObserver
      onResize={(e) => {
        if (e.width < 250) {
          toggleTrunc(true);
        } else {
          toggleTrunc(false);
        }
      }}
    >
      <div
        className={`sidebar ${close && "close"} ${left && "left"} ${
          darkMode && "dark"
        }`}
      >
        <SlidebarHeader
          logo={logo}
          toggleClose={toggleClose}
          left={left}
          toggleLeft={toggleLeft}
        />
        <ul className="main-nav">
          <DropdownItem
            icon={<AiOutlineHome className="scale-icon" />}
            text="dashboard"
            subElements={["eCommerce", "Analytics"]}
            trunc={trunc}
            badge={<span className={`${trunc && "text-trunc"} badge`}>2</span>}
          />
          <HeaderItem trunc={trunc} text="Apps & Pages" />
          {navListAppAndPages.map((element, index) => (
            <ListItem
              key={index}
              trunc={trunc}
              text={element.text}
              icon={element.icon}
            />
          ))}
          <DropdownItem
            icon={<MdOutlineDescription className="scale-icon" />}
            text="Invoice"
            subElements={["list", "preview", "edit", "add"]}
            trunc={trunc}
          />
          <DropdownItem
            icon={<AiOutlineShoppingCart className="scale-icon" />}
            text="e-commerce"
            subElements={["Shop", "details", "wishlist", "checkout"]}
            trunc={trunc}
          />
          <DropdownItem
            icon={<AiOutlineUser className="scale-icon" />}
            text="User"
            subElements={["List", "View", "Edit"]}
            trunc={trunc}
          />
          <DropdownItem
            icon={<MdOutlineInsertDriveFile className="scale-icon" />}
            text="Pages"
            subElements={[
              "Authentication",
              "Account Settings",
              "Profile",
              "Faq",
              "Knowledge Base",
              "Pricing",
              "Blog",
              "Mail Templates",
            ]}
            trunc={trunc}
          />
          <HeaderItem trunc={trunc} text="User Interface" />
          {navListUserInterface.map((element, index) => (
            <ListItem
              key={index}
              trunc={trunc}
              text={element.text}
              icon={element.icon}
            />
          ))}{" "}
        </ul>
      </div>
    </ResizeObserver>
  );
};

export default Sidebar;
