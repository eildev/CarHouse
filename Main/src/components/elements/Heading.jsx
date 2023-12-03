const Heading = ({ heading, text }) => {
  return (
    <div className="text-center grid justify-center items-center mb-20 px-2">
      <h2 className="md:text-3xl text-2xl mb-2 font-Karla font-semibold">
        {heading}
      </h2>
      <p className="max-w-[600px] font-inter text-center text-sm">{text}</p>
    </div>
  );
};

export default Heading;
