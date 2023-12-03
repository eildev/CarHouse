import { BsChevronDown } from "react-icons/bs";
import DropDownItems from "./DropDownItems";
import SearchButtonForMobileDevice from "./SearchButtonForMobileDevice";
import { useState } from "react";

const dropMenuStyles =
  "hover:bg-transparent hover:text-[#FF8700] active:text-[#FF8700] active:bg-transparent focus:text-[#FF8700] focus:bg-transparent text-[#000] md:text-[14px]";

const MenuDropdownItems = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleDropdown = () => {
    setIsActive(!isActive);
  };
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52"
    >
      <li>
        <a href="#home" className={`text-xl ${dropMenuStyles}`}>
          <SearchButtonForMobileDevice />
        </a>
      </li>
      <li>
        <a className={dropMenuStyles} href="#home">
          Home
        </a>
      </li>
      <li>
        <a className={dropMenuStyles} href="#services">
          Services
        </a>
      </li>
      <li>
        <a className={dropMenuStyles} href="#shop">
          Shop
        </a>
      </li>
      <li>
        <a className={dropMenuStyles} href="#contact">
          Contact
        </a>
      </li>
      <li onClick={handleToggleDropdown}>
        <a className={dropMenuStyles} href="#page">
          Page
          <span className="text-[#FF8700] text-xl">
            <BsChevronDown />
          </span>{" "}
        </a>
        <div
          className={`relative transition-all bg-[#fff] w-full h-20 py-3 z-100 rounded-md text-[#000] ${
            isActive ? "block" : "hidden"
          }`}
        >
          <DropDownItems />
        </div>
      </li>
    </ul>
  );
};

export default MenuDropdownItems;
