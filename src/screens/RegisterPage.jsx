import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-4/5 lg:w-3/5 bg-white shadow-lg flex overflow-hidden rounded-3xl">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Create Account
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>

            <button className="w-full bg-customBlue text-white py-3 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-customBlue">
              Register
            </button>
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
