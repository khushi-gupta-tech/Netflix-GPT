import React from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute px-7 py-1 ml-20 bg-gradient-to-b from-black z-10" >
      <img className="w-40"
      src={LOGO} alt="logo" />
    </div>
  );
};

export default Header;
