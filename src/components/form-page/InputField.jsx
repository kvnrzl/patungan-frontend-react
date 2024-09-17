const InputField = ({ label, name, type, value, onChange, isRequired }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={`Masukkan ${label}`}
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={isRequired}
      />
    </div>
  );
};

export default InputField;
