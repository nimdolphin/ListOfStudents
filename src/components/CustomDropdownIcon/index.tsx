import React, { FC } from "react";
import dropdown from "../../images/dropdown.png";
import "./styles.scss";

const CustomDropdownIcon: FC = () => {
  return <img src={dropdown} className="drop-img" alt="logo-drop" />;
};

export default CustomDropdownIcon;
