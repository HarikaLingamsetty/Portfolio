import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className=" container mx-auto">
        <div className="flex justify-end items-center">
          {/* <a href='#'>
            <img src={Logo} alt=''/>
          </a> */}
          <a
            href="https://www.linkedin.com/in/harika-lingamsetty-2bb9b1214/"
            className="text-gradient text-[18px] font-tertiary btn-link"
          >
            Work with me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
