import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#171717] text-[#fff]">
      <div className="container mx-auto px-5 sm:px-10">
        <footer className="footer py-10 ">
          <nav>
            <header className="footer-title">Shop</header>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              Shop Parts
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              Wheels & Rims
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              Engine
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              Car Body Parts
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              Accessories
            </a>
          </nav>
          <nav>
            <header className="footer-title">The Company</header>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              About us
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              Reviews
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              FAQ
            </a>
          </nav>
          <nav>
            <header className="footer-title">Contact Us</header>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              info@yoursite.com
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              200 folorida.
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              manface folorida
            </a>
            <a className="link link-hover hover:text-[#FF8700] transition-all">
              Tel: 123-123-123
            </a>
          </nav>
          <nav className="">
            <header className="footer-title">Follow Us</header>
            <div className="flex gap-2">
              <a className="link link-hover text-2xl hover:text-[#FF8700] transition-all">
                <BiLogoFacebook />
              </a>
              <a className="link link-hover text-2xl hover:text-[#FF8700] transition-all">
                <AiFillInstagram />
              </a>
              <a className="link link-hover text-2xl hover:text-[#FF8700] transition-all">
                <AiFillYoutube />
              </a>
              <a className="link link-hover text-2xl hover:text-[#FF8700] transition-all">
                <AiOutlineTwitter />
              </a>
            </div>
          </nav>
        </footer>
        <div className="w-full h-[1px] bg-[#707070] mb-10"></div>
        <ul className="flex sm:justify-around justify-start flex-col sm:flex-row sm:items-center my-5">
          <li>
            <a
              className="link link-hover hover:text-[#FF8700] transition-all"
              href="#"
            >
              Terms & Condition
            </a>
          </li>
          <li>
            <a
              className="link link-hover hover:text-[#FF8700] transition-all"
              href="#"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="link link-hover hover:text-[#FF8700] transition-all"
              href="#"
            >
              Refund Policy
            </a>
          </li>
          <li>
            <a
              className="link link-hover hover:text-[#FF8700] transition-all"
              href="#"
            >
              Shipping Policy
            </a>
          </li>
        </ul>
      </div>
      <div className="py-5 text-center w-full bg-[#000]">
        <p>
          Copyright &copy; <span className="text-[#FF8700]">CarHouse</span>{" "}
          2023. All Rights Reserved. Powered by{" "}
          <a href="#">
            <span className="text-[#FF8700]">Eclipse_Intellitech</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
