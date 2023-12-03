import { useState } from "react";
// import { BsSearch } from "react-icons/bs";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";

const SearchButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleSearchBar = () => {
    setIsActive(!isActive);
  };

  const handleClearInput = () => {
    document.getElementById("myInputSearch").value = "";
  };

  return (
    <div className={`search-bar hidden lg:block ${isActive ? "active" : ""}`}>
      <div className="search-icon text-sm" onClick={handleToggleSearchBar}>
        <FaMagnifyingGlass />
      </div>
      <div className="search-input">
        <input type="search" placeholder="Search" id="myInputSearch" />
      </div>
      {isActive && (
        <span className="clear" onClick={handleClearInput}>
          <FaXmark />
        </span>
      )}
    </div>
  );
};

export default SearchButton;
