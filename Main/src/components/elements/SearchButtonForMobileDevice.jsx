import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchButtonForMobileDevice = () => {
  return (
    <div className="w-full flex items-center gap-2 bg-transparent border-[1px] px-2 rounded-box">
      <div className="text-sm">
        <FaMagnifyingGlass />
      </div>
      <div className="w-full text-sm">
        <input
          className="w-full border-none outline-none"
          type="search"
          placeholder="Search"
          id="myInputSearch"
        />
      </div>
    </div>
  );
};

export default SearchButtonForMobileDevice;
