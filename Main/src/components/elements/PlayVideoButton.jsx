import { BsFillPlayFill } from "react-icons/bs";

// when large device then show the video button
const lgShowVideoText = (
  <>
    <p className="font-semibold lg:text-md text-sm">
      Watch Our <br /> Service Video
    </p>
  </>
);

// when small device then hide the video button
const lgHideVideoText = (
  <>
    <p className="font-semibold lg:text-md text-sm">Watch Video</p>
  </>
);

const PlayVideoButton = () => {
  return (
    <>
      <div className="flex sm:gap-5 gap-2 justify-end items-center">
        <span className="p-2 rounded-full bg-[#606060] text-[#FF8700] hover:bg-[#FF8700] hover:text-[#FFF] transition-all lg:text-4xl sm:text-2xl text-xl cursor-pointer">
          <BsFillPlayFill />
        </span>
        <div className="hidden md:block">{lgShowVideoText}</div>
        <div className="md:hidden block">{lgHideVideoText}</div>
      </div>
    </>
  );
};

export default PlayVideoButton;
