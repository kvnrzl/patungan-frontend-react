import React, { useState } from "react";
import InputField from "../components/form-page/InputField";
import TextArea from "../components/form-page/TextArea";
import SubmitButton from "../components/form-page/SubmitButton";

const DonationFormPage = () => {
  const [nominal, setNominal] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

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

  // Handle Nominal Input Change
  const handleNominalChange = (e) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    setNominal(formatCurrency(rawValue));
  };

  // Handle Form Submit (for now, just log the values)
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { nominal, name, email, phone, comment };
    console.log("Form Data Submitted:", formData);
    // You can handle the submission to backend here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
      {/* Main Container */}
      <div className="w-3/5 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Terima Kasih atas Niat Baikmu{" "}
          <span className="material-symbols-outlined text-lg">favorite</span>
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Nominal Transaksi */}
          <InputField
            label="Nominal Transaksi"
            placeholder="Masukkan nominal (contoh: 50000)"
            value={nominal}
            name="nominal"
            onChange={handleNominalChange}
            required
          />

          {/* Nama */}
          <InputField
            label="Nama"
            placeholder="Masukkan nama"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* Email */}
          <InputField
            label="Email"
            placeholder="Masukkan email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Phone */}
          <InputField
            label="Phone"
            placeholder="Masukkan nomor telepon"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          {/* Komentar / Dukungan (Opsional) */}
          <TextArea
            label="Komentar / Dukungan (Opsional)"
            value={comment}
            name="comment"
            rows={4}
            onChange={(e) => setComment(e.target.value)}
          />

          {/* Submit Button */}
          <SubmitButton label="Donasi Sekarang" icon="volunteer_activism" />
        </form>
      </div>
    </div>
  );
};

export default DonationFormPage;
