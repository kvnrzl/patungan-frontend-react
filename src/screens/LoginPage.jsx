const LoginPage = () => {
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
          <img
            src="/src/assets/logo/logo-no-background.svg"
            alt="Patungan Logo"
            className="h-20 self-end"
          />
          <h2 className="text-3xl px-10 font-bold mb-6">Welcome Back!</h2>
          <form className="px-10 mb-auto">
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-customBlue"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customBlue text-white py-2 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="px-10 mb-10 text-center">
            <a href="/" className="text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <span className="text-customBlue font-bold">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
