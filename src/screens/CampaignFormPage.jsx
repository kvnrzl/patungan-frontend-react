import { useState } from "react";
import Header from "../components/home-page/Header";
import InputField from "../components/form-page/InputField";
import Textarea from "../components/form-page/Textarea";
import Select from "../components/form-page/Select";
import SubmitButton from "../components/form-page/SubmitButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://141.11.25.60:9090/api/v1";

const CampaignFormPage = () => {
  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    target: "",
    endDate: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTargetChange = (e) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    setFormData((prevData) => ({
      ...prevData,
      target: formatCurrency(rawValue),
    }));
  };

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

  // Handle Form Submit (for now, just log the values)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    formData.endDate = new Date(formData.endDate).toISOString();

    formData.target = parseInt(String(formData.target).replace(/\D/g, ""));

    formData.category = parseInt(formData.category);

    // remove category and change to categoryID
    const newFormData = {
      ...formData,
      categoryID: formData.category,
    };

    console.log(newFormData);
    // You can handle the submission to backend here
    const response = await axios.post(`${API_URL}/campaigns`, newFormData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const responseData = await response.data.data;
    console.log(responseData);

    if (response.data.status === "success") {
      alert("Campaign berhasil dibuat");
      setFormData({
        title: "",
        description: "",
        target: "",
        endDate: "",
        category: "",
      });

      navigateTo("/campaign");
    } else {
      alert("Campaign gagal dibuat");
    }
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
            <InputField
              label="Judul Campaign"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              required
            />

            {/* Deskripsi */}
            <Textarea
              label="Deskripsi Campaign"
              value={formData.description}
              name="description"
              onChange={handleChange}
              required
            />

            {/* Target Dana */}
            <InputField
              label="Jumlah Target Dana"
              name="target"
              type="text"
              value={formData.target}
              onChange={handleTargetChange}
              required
            />

            {/* Tanggal Berakhir Campaign */}
            <InputField
              label="Tanggal Berakhir Campaign"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              required
            />

            {/* Kategori Campaign */}
            <Select
              label="Kategori Campaign"
              name="category"
              options={categories}
              onChange={handleChange}
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
