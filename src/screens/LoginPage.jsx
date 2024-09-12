import { Link } from "react-router-dom";
import Button from "../components/login-page/Button";
import InputField from "../components/login-page/InputField";

const LoginPage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Login button clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-4/5 bg-white shadow-lg rounded-3xl overflow-hidden flex">
        {/* Left - Image */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center">
          <img
            src="/src/assets/Hello-cuate.svg"
            alt="Welcome Back"
            className="w-3/4"
          />
        </div>

        {/* Right - Form */}
        <div className="w-1/2 flex flex-col justify-between">
          <div className="flex flex-row justify-end">
            <Link to={"/"}>
              <img
                src="/src/assets/logo/logo-no-background.svg"
                alt="Patungan Logo"
                className="h-20 self-end"
              />
            </Link>
          </div>
          <div className="container m-auto">
            <form className="px-10">
              <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
              <InputField
                type="email"
                name="email"
                label="Email Address"
                placeholder="Enter your email"
              />
              <InputField
                type="password"
                name="password"
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
