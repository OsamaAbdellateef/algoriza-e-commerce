import React from "react";
import "./row-header.css";
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const RowHeader = () => {
  return (
    <div className="row content-header">
      <div className="content-header-left">
        <h2 className="content-header-title">Shop</h2>
        <div className="breadcrumbs">
          <a href="#">
            <AiOutlineHome className="home-icon bc-link" />
          </a>
          <HiOutlineChevronRight />
          <a href="#" className="bc-link">
            ECommerce
          </a>
          <HiOutlineChevronRight />
          <span className="current-location">Shope</span>
        </div>
      </div>
      <div className="content-header-right">
        <button className="dropdown-btn">
          <FiSettings />
        </button>
      </div>
    </div>
  );
};

export default RowHeader;
