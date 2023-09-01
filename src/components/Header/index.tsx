import React, { FC } from "react";
import circle from "../../images/circle.png";
import "./styles.scss";

const Header: FC = () => {
  return (
    <>
      <div className="header">
        <img src={circle} className="logo" alt="logo" />
        <h3 className="logo-students">
          <span className="black">STUDENTS by </span>
          <span className="blue">github-user-name</span>
        </h3>
      </div>
    </>
  );
};

export default Header;
