import React from "react";
import "./rate-item.css";
import { AiOutlineStar } from "react-icons/ai";

const RateItem = ({ num }) => {
  return (
    <div className="rate-item">
      <div className={`stars-container ${num}`}>
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
      </div>
    </div>
  );
};

export default RateItem;
