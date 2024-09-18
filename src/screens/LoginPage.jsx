import { Link, replace, useNavigate } from "react-router-dom";
import Button from "../components/login-page/Button";
import InputField from "../components/login-page/InputField";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { userLogin } from "../redux/actions/userAction";
import { store } from "../redux/store";
import logo from "../assets/logo/logo-no-background.svg";
import welcomeBackImg from "../assets/Hello-cuate.svg";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("Login button clicked");

    const token = await dispatch(userLogin(userData));

    console.log(token);
    if (token) {
      localStorage.setItem("token", token);

      navigateTo("/", { replace: true });

      console.log("Login success");
    } else {
      console.log("Login failed");
      alert("Login Failed");
    }
  };

  const handleChange = (event) => {
    console.log(event);
    const { name, value, type } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? event.target.files[0] : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-4/5 bg-white shadow-lg rounded-3xl overflow-hidden flex">
        {/* Left - Image */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center">
          <img src={welcomeBackImg} alt="Welcome Back" className="w-3/4" />
        </div>

        {/* Right - Form */}
        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-row justify-end">
            <Link to={"/"}>
              <img src={logo} alt="Patungan Logo" className="h-20 self-end" />
            </Link>
          </div>
          <div className="container m-auto">
            <form className="px-10">
              <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
              <InputField
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                label="Email Address"
                placeholder="Enter your email"
              />
              <InputField
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                label="Password"
                placeholder="Enter your password"
              />
              <Button label="Log In" onClick={handleClick} />
              <div className="px-10 mb-10 text-center">
                <Link to="/register" className="text-sm text-gray-500">
                  Don&apos;t have an account?{" "}
                  <span className="text-customBlue font-bold">Sign Up</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
