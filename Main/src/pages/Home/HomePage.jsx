import Banner from "../../components/Shared/Banner";
import Footer from "../../components/Shared/Footer";
import Hero from "../../components/Shared/Hero";
import Navbar from "../../components/Shared/Navbar";
import Client from "./Section/Client";
import DeliverySection from "./Section/DeliverySection";
import ExploreSection from "./Section/ExploreSection";
import ImageGallery from "./Section/ImageGallery";
import Payment from "./Section/Payment";
import ProductStory from "./Section/ProductStory";

// import hero image
import heroImage1 from "../../assets/hero/hero1.png";
import heroImage2 from "../../assets/hero/hero2.png";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <ExploreSection />
      <Hero heroImg={heroImage1} alt="Car image" />
      <Hero reverse={true} heroImg={heroImage2} alt="Car image" />
      <ImageGallery />
      <ProductStory />
      <DeliverySection />
      <Client />
      <Payment />
      <Footer />
    </div>
  );
};

export default HomePage;
