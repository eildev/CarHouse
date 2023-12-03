import { FaRegClipboard } from "react-icons/fa6";

const ProductStory = () => {
  return (
    <div className="bg-right-to-left-gradient text-white ">
      <div className="container mx-auto px-5 sm:px-10">
        <div className="grid lg:grid-cols-2 lg:justify-between justify-center items-center w-full sm:px-5 lg:py-16 py-10 mt-20 lg:my-20">
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-2 font-karla">
              Our Product Story
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the pinting and typesetting
              industy. Lorem Ipsum has been the industy`s standard dummy text
              ever since
            </p>
          </div>
          <div className="hidden lg:block">
            <span className="text-6xl w-full flex justify-end items-center text-[#FF8700] mr-24">
              <FaRegClipboard />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStory;
