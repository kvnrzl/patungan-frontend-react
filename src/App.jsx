// import HeroSlider from "./components/landing-page/HeroSlider";
import { useEffect, useState } from "react";
import LandingPage from "./screens/LandingPage";
import LoginPage from "./screens/LoginPage";
import Register from "./screens/RegisterPage";

function App() {
  return (
    <div>
      <LoginPage />
      {/* <LandingPage /> */}
      <Register />
    </div>
  );
}

export default App;
