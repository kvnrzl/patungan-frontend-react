import Button from "../components/login-page/Button";
import InputField from "../components/login-page/InputField";

const Register = () => {
  const handeClick = (e) => {
    e.preventDefault();
    console.log("Register button clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-4/5 bg-white shadow-lg flex overflow-hidden rounded-3xl">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 p-8 m-auto">
          <form>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Create Account
            </h2>
            <InputField
              type="text"
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
            />

            <InputField
              type="email"
              label="Email Address"
              name="email"
              placeholder="Enter your email"
            />

            {/* phone */}
            <InputField
              type="text"
              label="Phone"
              name="phone"
              placeholder="Enter your phone number"
            />

            <InputField
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
            />

            <Button label="Register" onClick={handeClick} />

            <div className="px-10 mb-10 text-center">
              <a href="/" className="text-sm text-gray-500">
                Already have an account?{" "}
                <span className="text-customBlue font-bold">Sign In</span>
              </a>
            </div>
          </form>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:block w-1/2 bg-gray-100">
          <img
            src="/src/assets/Welcome-cuate.svg"
            alt="Welcome"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
