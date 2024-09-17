import Header from "../components/home-page/Header";
import Footer from "../components/home-page/Footer";
import HeroSection from "../components/home-page/Hero";
import FeaturedPlans from "../components/home-page/FeaturedPlans";
import HeroSlider from "../components/home-page/HeroSlider";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <HeroSection /> */}
      <HeroSlider />
      <FeaturedPlans />
      <Footer />
    </>
  );
};

export default HomePage;
