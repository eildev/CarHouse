import Heading from "../../../components/elements/Heading";
import ImageGalleryData from "../../../data/ImageGalleryData";
import "./imageGallery.css";

const ImageGallery = () => {
  return (
    <div className="bg-[#0b0b0b] py-10 overflow-hidden relative z-10">
      <div className="container mx-auto">
        <Heading
          heading={"Explore the Top Sell Car"}
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since"
        />
        <div className="image-gallery-container">
          {ImageGalleryData.map((img) => (
            <div key={img.id} className="box">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
