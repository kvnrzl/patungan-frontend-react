const SubmitButton = ({ label }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        type="submit"
        className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {label}
      </button>
    </div>
  );
};

export default SubmitButton;
