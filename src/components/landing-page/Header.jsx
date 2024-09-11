const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md ">
      <nav className="flex justify-between items-center px-10">
        <img
          src="/src/assets/logo/logo-no-background.svg"
          alt="Patungan Logo"
          className="h-20"
        />
        <div className="flex items-center space-x-4">
          <div className="border px-4 py-2 rounded-md max-w-40 truncate">
            <a href="" className="text-gray-500">
              kevin@gmail.commmmmmmmmmmmm
            </a>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-full">
            Log in
          </button>
          <button className="px-4 py-2 bg-customBlue text-white rounded-full">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
