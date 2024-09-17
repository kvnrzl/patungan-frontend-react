const Button = ({ label, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full mt-4 bg-customBlue text-white py-2 rounded-full hover:bg-gray-800 transition duration-300"
    >
      {label}
    </button>
  );
};

export default Button;
