// import menuDropdownItems components
import MenuDropdownItems from "../elements/MenuDropdownItems";
// import MenuItems components
import MenuItems from "../elements/MenuItems";
// import navbar css file
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="bg-[#191717]">
      <div className="container mx-auto md:px-10">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <MenuDropdownItems />
            </div>
            <div className="logo">
              <h3 className="lg:text-xl md:text-md font-bold text-slate-200 font-Karla">
                Car<span className="text-[#FF8700]">House</span>
              </h3>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <MenuItems />
          </div>
          <div className="navbar-end">
            <a className="log-btn xl:mr4 mr-2 b-0">Login</a>
            <a className="sign-btn">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
