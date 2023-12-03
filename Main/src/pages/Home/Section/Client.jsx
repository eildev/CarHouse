import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Heading from "../../../components/elements/Heading";
import ClientData from "../../../data/ClientData";

const Client = () => {
  return (
    <div className="container mx-auto py-10 sm:px-5">
      <Heading
        heading="Our Client Reviews"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since"
      />
      <div className="flex gap-10 flex-wrap items-center justify-center mb-20">
        {ClientData.map((client) => (
          <div
            key={client.id}
            className="bg-[#0b0b0b] px-5 py-3 lg:px-10 lg:py-5 rounded-2xl max-w-[350px]"
          >
            <div className="flex items-center gap-5 2xl:gap-2 mb-5">
              <div className="relative min-h-[60px] xl:h-[85px] 2xl:h-[100px] rounded-md overflow-hidden w-[25%] lg:w-[40%]">
                <img
                  className="h-full w-full rounded-md"
                  src={client.imgURL}
                  alt={client.alt}
                />
              </div>
              <div className="w-[80%]">
                <h3 className="2xl:text-3xl lg:text-2xl text-xl font-bold capitalize font-karla">
                  {client.name}
                </h3>
                <span className="2xl:text-2xl text-sm">{client.title}</span>
              </div>
            </div>
            <p className="mb-5 2xl:text-xl text-sm">{client.description}</p>
            <span className="flex gap-1 text-2xl 2xl:text-4xl text-[#FF8700]">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
