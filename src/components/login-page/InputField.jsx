/* eslint-disable react/prop-types */
const InputField = ({ type, label, name, placeholder, value, onChange }) => {
  return (
    <>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-customBlue"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputField;
