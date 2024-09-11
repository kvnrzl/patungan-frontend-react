import Header from "../components/landing-page/Header";
import Footer from "../components/landing-page/Footer";
import HeroSection from "../components/landing-page/Hero";
import FeaturedPlans from "../components/landing-page/FeaturedPlans";
import HeroSlider from "../components/landing-page/HeroSlider";

const LandingPage = () => {
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

export default LandingPage;
