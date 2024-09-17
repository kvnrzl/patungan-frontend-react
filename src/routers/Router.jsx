/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import HomePage from "../screens/HomePage";
import DonationFormPage from "../screens/DonationFormPage";
import CampaignFormPage from "../screens/CampaignFormPage";
import CampaignListPage from "../screens/CampaignListPage";
import CampaignDetailPage from "../screens/CampaignDetailPage";
import MidtransPayment from "../components/payment/MidtransPayment";

// Fungsi untuk cek autentikasi
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // Jika token ada, user dianggap sudah login
};

// Protected route untuk user yang sudah login
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

// Redirect jika user login mencoba mengakses login/register
const AuthRedirectRoute = ({ element }) => {
  return isAuthenticated() ? <Navigate to="/" /> : element;
};

const Router = () => {
  const publicRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <AuthRedirectRoute element={<LoginPage />} />,
    },
    {
      path: "/register",
      element: <AuthRedirectRoute element={<RegisterPage />} />,
    },
    {
      path: "/campaign/:id/donate",
      element: <DonationFormPage />,
    },
    {
      path: "/campaign",
      element: <CampaignListPage />,
    },
    {
      path: "/campaign/:id/detail",
      element: <CampaignDetailPage />,
    },
    {
      path: "/payment/:token",
      element: <MidtransPayment />,
    },
  ];

  const privateRoutes = [
    {
      path: "/campaign/create",
      element: <PrivateRoute element={<CampaignFormPage />} />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map((route, index) => (
          <Route exact key={index} path={route.path} element={route.element} />
        ))}
        {publicRoutes.map((route, index) => (
          <Route exact key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
