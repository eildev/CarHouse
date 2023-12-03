import bannerImage from "../../assets/banner/Banner.jpg";
import PlayVideoButton from "../elements/PlayVideoButton";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-[#000] min-h-[100vh] w-full border-b border-[#707070] text-[#fff]">
      <div className="container mx-auto h-[100vh] ">
        <div
          className="grid md:grid-cols-2 md:justify-between justify-center items-center h-full bg-cover sm:bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="w-full px-5 sm:px-10">
            <h2 className="xl:text-5xl lg:4xl md:text-3xl text-xl font-bold mb-5 font-Karla">
              Get Behind the Wheel <br /> of Your Dream luxury <br /> Car Today.
            </h2>
            <p className="mb-5 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since{" "}
            </p>
            <div className="flex justify-start items-center sm:gap-10 gap-3 w-full">
              <button className="read-btn">Read More</button>
              <div className="block md:hidden">
                <PlayVideoButton />
              </div>
            </div>
          </div>
          <div className="hidden md:block px-5 sm:px-10">
            <PlayVideoButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
