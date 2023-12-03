import Heading from "../../../components/elements/Heading";
import PaymentData from "../../../data/PaymentData";

const Payment = () => {
  return (
    <div className="container mx-auto pb-10 px-5 sm:px-10">
      <Heading
        heading="Payment Method"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since"
      />
      <div className="grid grid-cols-2 sm:flex sm:justify-center sm:items-center md:px-10 px-10 mb-20 gap-3 sm:gap-5 place-items-center">
        {PaymentData.map((element) => (
          <div
            key={element.id}
            className="payment-card relative flex justify-center items-center bg-[#0b0b0b] max-h-[50px] max-w-[110px] rounded-xl px-7 py-5"
          >
            <img className="w-full" src={element.imgURL} alt={element.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
