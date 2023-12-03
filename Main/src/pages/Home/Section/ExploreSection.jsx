import Heading from "../../../components/elements/Heading";
import ExploreData from "../../../data/ExploreData";

const ExploreSection = () => {
  return (
    <div className="container mx-auto md:py-20 md:mb-20 my-10 mt-16 px-5 sm:px-10">
      <Heading
        heading="Explore the Top Sell Car"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since "
      />
      <div className="flex flex-wrap gap-10 mt-5 justify-center place-items-center">
        {ExploreData.map((data) => (
          <div
            key={data.id}
            className="grid h-[250px] w-[200px] bg-[#D8D8D8] bg-opacity-[5%] text-white place-items-center px-5 py-10 gap-2 rounded-md"
          >
            <span className="p-5 text-3xl bg-[#EAEEF3] bg-opacity-[10%] rounded-full text-[#FF8700]">
              {data.icon}
            </span>
            <h4 className="md:text-lg text-md  text-center font-semibold capitalize">
              {data.name}
            </h4>
            <p className="text-center text-sm">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
