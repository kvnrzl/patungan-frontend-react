import { useState } from "react";
import Header from "../components/landing-page/Header";
import InputField from "../components/form-page/InputField";
import TextArea from "../components/form-page/TextArea";
import Select from "../components/form-page/Select";
import SubmitButton from "../components/form-page/SubmitButton";

const CampaignFormPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [target, setTarget] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("");

  // Function to format number as currency (Rp)
  const formatCurrency = (value) => {
    if (!value) return "";
    const number = parseInt(value.replace(/\D/g, ""));
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  // Handle Target Dana Input Change
  const handleTargetChange = (e) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    setTarget(formatCurrency(rawValue));
  };

  // Handle Form Submit (for now, just log the values)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      description,
      target,
      endDate,
      category,
    };
    console.log("Campaign Form Data Submitted:", formData);
    // You can handle the submission to backend here
  };

  const categories = [
    { _id: "1", name: "Pendidikan" },
    { _id: "2", name: "Sosial" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
        {/* Main Container */}
        <div className="w-3/5 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Buat Campaign Donasi
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Judul Campaign */}
            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Judul Campaign
              </label>
              <input
                type="text"
                placeholder="Masukkan judul campaign"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div> */}
            <InputField
              label="Judul Campaign"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            {/* Deskripsi */}
            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Deskripsi Campaign
              </label>
              <textarea
                placeholder="Masukkan deskripsi campaign"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="6"
                required
              />
            </div> */}
            <TextArea
              label="Deskripsi Campaign"
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            {/* Target Dana */}
            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Jumlah Target Dana
              </label>
              <input
                type="text"
                placeholder="Masukkan target dana (contoh: 50000)"
                value={target}
                onChange={handleTargetChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div> */}
            <InputField
              label="Jumlah Target Dana"
              name="target"
              type="text"
              value={target}
              onChange={handleTargetChange}
              required
            />

            {/* Tanggal Berakhir Campaign */}
            <InputField
              label="Tanggal Berakhir Campaign"
              name="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />

            {/* Kategori Campaign */}
            <Select
              label="Kategori Campaign"
              name="category"
              options={categories}
            />

            {/* Submit Button */}
            <SubmitButton label="Buat Campaign" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CampaignFormPage;
