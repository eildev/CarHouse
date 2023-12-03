import { FaTruckFast } from "react-icons/fa6";

const DeliverySection = () => {
  return (
    <div className="bg-left-to-right-gradient text-white ">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="grid lg:grid-cols-2 lg:justify-between justify-center items-center w-full sm:px-5 lg:py-16 py-10 mb-10 lg:my-20">
          <div className="hidden lg:block">
            <span className="text-6xl w-full flex justify-start items-center text-[#FF8700] ml-24">
              <FaTruckFast />
            </span>
          </div>
          <div className="w-full lg:text-end">
            <h2 className="text-2xl font-semibold mb-2 font-karla">
              About Delivery
            </h2>
            <p className="">
              Lorem Ipsum is simply dummy text of the pinting and typesetting
              industy. Lorem Ipsum has been the industy`s standard dummy text
              ever since
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliverySection;
