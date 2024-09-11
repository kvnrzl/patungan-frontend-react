/* eslint-disable react/prop-types */
const PlanCard = ({ type, title, rate, description, duration, src }) => {
  return (
    <div className="flex flex-col h-full min-h-full border p-6 rounded-xl bg-white shadow-md text-left">
      <p className="text-sm font-semibold text-gray-500">{type}</p>
      <h3 className="text-2xl font-bold mb-2 line-clamp-1">{title}</h3>
      <img
        // src="src/assets/ben-white-PAiVzSmYy-c-unsplash.jpg"
        // src="https://picsum.photos/200"
        // src="src\assets\pexels-pixabay-271168.jpg"
        src={src}
        alt="plan"
        className="max-w-full h-40 rounded-lg mb-4"
      />
      {/* /src/assets/logo/logo-no-background.svg */}
      <p className="text-lg mb-4 line-clamp-4">{description}</p>
      {/* <div className="flex justify-between items-center">
        <span className="text-3xl font-bold">{rate}</span>
        <button className="bg-gray-200 p-2 rounded-full">&gt;</button>
      </div> */}
      <div className="w-full mt-auto border border-gray-400 rounded-full">
        <div
          className="bg-customLightBlue text-xs font-medium text-gray-600 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${rate}` }}
        >
          {" "}
          {rate}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2 line-clamp-1">
        <span className="font-bold text-red-900">Rp 50.000</span> dari Rp
        10.000.000
      </p>
      {/* create button */}
      <button className="bg-customBlue text-white px-4 py-2 rounded-lg mt-4">
        Yuk <span className="font-vt323 text-xl">Patungan</span>{" "}
        <span className="material-symbols-outlined text-xs">favorite</span>
      </button>
    </div>
  );
};

export default PlanCard;
