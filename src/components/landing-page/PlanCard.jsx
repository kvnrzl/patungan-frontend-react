/* eslint-disable react/prop-types */
const PlanCard = ({
  category,
  title,
  image,
  description,
  progress,
  target,
  collected,
}) => {
  const formatCurrency = (value) => {
    if (value === null || value === undefined) return "";
    const number = Number(value);
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="flex flex-col h-full min-h-full border p-6 rounded-xl bg-white shadow-md text-left">
      {/* category */}
      <p className="text-sm font-semibold text-gray-500">{category}</p>

      {/* title */}
      <h3 className="text-2xl font-bold mb-2 line-clamp-1">{title}</h3>

      {/* cover image */}
      <img src={image} alt="plan" className="max-w-full h-40 rounded-lg mb-4" />

      {/* description */}
      <p className="text-lg mb-4 line-clamp-4">{description}</p>

      {/* progress bar */}
      <div className="w-full mt-auto border border-gray-400 rounded-full">
        <div
          className="bg-customLightBlue text-xs font-medium text-gray-600 text-center p-0.5 leading-none rounded-full"
          style={{ width: `${progress}%` }}
        >
          {" "}
          {progress}%
        </div>
      </div>

      {/* target */}
      <p className="text-xs text-gray-400 mt-2 line-clamp-1">
        <span className="font-bold text-red-900">
          {formatCurrency(collected)}
        </span>{" "}
        dari {formatCurrency(target)}
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
