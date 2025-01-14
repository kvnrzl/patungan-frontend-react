/* eslint-disable react/prop-types */
const Textarea = ({ name, label, value, onChange, rows = 6 }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <textarea
        placeholder={`Masukkan ${label}`}
        value={value}
        name={name}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows={rows}
        required
      />
    </div>
  );
};

export default Textarea;
