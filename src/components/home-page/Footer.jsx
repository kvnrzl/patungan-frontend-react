const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="text-center px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-xl font-bold tracking-wide">
              <span className="font-vt323 text-3xl">Patungan</span> © 2024
            </a>
          </div>
          <ul className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
            <li>
              <a href="/terms" className="hover:text-gray-400">
                Terms Policy
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>Designed with ❤️ by kvn dan ChatGPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
