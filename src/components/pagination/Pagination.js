import React from "react";
import "./pagination.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-container">
        <div className="pagination-left">
          <button>
            <AiOutlineLeft />
          </button>
        </div>
        <div className="pagination-center">
          <button
            className="active"
            onClick={() => {
              console.log("one");
            }}
          >
            1
          </button>
          <button>2</button>
          <button>3</button>
        </div>
        <div className="pagination-right">
          <button>
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
