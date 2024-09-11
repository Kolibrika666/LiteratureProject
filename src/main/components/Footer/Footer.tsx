import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <span> 2024 г. </span>
      <Link to="https://kursach37.com/oformlenie-spiska-literatury-po-gost">
        Источник
      </Link>
    </div>
  );
};
