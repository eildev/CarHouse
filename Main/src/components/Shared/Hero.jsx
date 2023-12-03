import "./hero.css";

const Hero = ({ reverse, heroImg, alt }) => {
  return (
    <div className="container mx-auto xl:pt-20 my-10 py-10 px-5 sm:px-10">
      <div
        className={`flex flex-col gap-10 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } $`}
      >
        <div>
          <h3 className="xl:text-5xl lg:text-4xl text-2xl capitalize leading-snug font-bold mb-5 font-Karla">
            Book a Car near <br /> you and drive in <br /> Minutes!
          </h3>
          <p className="mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s standard dummy text
            ever since
          </p>
          <div className="flex sm:gap-10 gap-2">
            <button className="read-btn">Read More</button>
            <button className="order-btn">Order Now</button>
          </div>
        </div>
        <div>
          <img
            className="w-full object-contain image-shadow"
            src={heroImg}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
