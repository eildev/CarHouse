import { FaChevronDown } from "react-icons/fa6";
import DropDownItems from "./DropDownItems";
import SearchButton from "./SearchButton";
import { useState } from "react";

const menuStyles =
  "hover:bg-transparent hover:text-[#FF8700] active:text-[#FF8700] active:bg-transparent focus:text-[#FF8700] focus:bg-transparent md:text-[14px]";

const MenuItems = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <ul className="lg:flex items-center gap-6">
      <li>
        <a href="#home" className={`${menuStyles}`}>
          <SearchButton />
        </a>
      </li>
      <li>
        <a className={menuStyles} href="#home">
          Home
        </a>
      </li>
      <li>
        <a className={menuStyles} href="#services">
          Services
        </a>
      </li>
      <li>
        <a className={menuStyles} href="#shop">
          Shop
        </a>
      </li>
      <li>
        <a className={menuStyles} href="#contact">
          Contact
        </a>
      </li>
      <li className="relative transition-all" onClick={handleToggleDropdown}>
        <a className={`flex gap-2 items-center ${menuStyles}`} href="#page">
          Page
          <span className="flex items-center text-[#FF8700] text-md">
            <FaChevronDown />
          </span>
        </a>
        <div
          className={`absolute transition-all bg-[#fff] w-32 h-20 left-[-19px] bottom-[-106px] px-5 py-3 z-100 rounded-md text-[#000] ${
            isActive ? "block" : "hidden"
          }`}
        >
          <DropDownItems />
        </div>
      </li>
    </ul>
  );
};

export default MenuItems;
