import React, { MouseEvent, useCallback, useEffect, useState } from "react";
import Metamask from "./Metamask.jsx";
const LeftCard = () => {
  const [text, setText] = useState("whenever");

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        switch (prevText) {
          case "Whenever":
            return "Wherever";
          case "Wherever":
            return "Whoever";
          default:
            return "Whenever";
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="left-header">
      <p className="crypto-title">Buy and Sell Instantly on Sushi. </p>
      <p className="crypto-title blue">{text}.</p>
      <h5 className="crypto-sub-title">
        No registration needed. Over 400 tokens to trade at your fingertips.
      </h5>
      <div className="search-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          width="24"
          height="24"
          className="text-neutral-500"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
        <input type="text" placeholder="Search by token or address" />
      </div>
    </div>
  );
};

export default LeftCard;
