// import HeroSlider from "./components/landing-page/HeroSlider";
import { useEffect, useState } from "react";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import Register from "./screens/RegisterPage";
import CampaignDetailPage from "./screens/CampaignDetailPage";
import DonationFormPage from "./screens/DonationFormPage";
import CampaignFormPage from "./screens/CampaignFormPage";

const campaign = {
  title: "Bantu Anak-Anak Panti Asuhan Lorem Ipsum Lorem Ipsum",
  description:
    "Panti Asuhan ini merupakan tempat tinggal anak-anak yatim piatu yang membutuhkan bantuan kita. Bantu mereka untuk mendapatkan kehidupan yang lebih baik. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.yang lebih baik. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "src/assets/ben-white-PAiVzSmYy-c-unsplash.jpg",
  // image: "src/assets/Welcome-cuate.svg",
};

function App() {
  return (
    <div>
      <LoginPage />
      {/* <LandingPage /> */}
      {/* <CampaignDetailPage campaign={campaign} /> */}
      <CampaignFormPage />
      {/* <DonationFormPage /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
