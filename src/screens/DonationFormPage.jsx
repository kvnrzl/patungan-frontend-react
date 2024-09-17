import React, { useEffect, useState } from "react";
import InputField from "../components/form-page/InputField";
import TextArea from "../components/form-page/TextArea";
import SubmitButton from "../components/form-page/SubmitButton";
import {
  createDonationGuest,
  createDonationRegistered,
} from "../redux/actions/donationAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createPayment } from "../redux/actions/paymentAction";

const DonationFormPage = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { id } = useParams(); // Mengambil id dari URL

  // Get state from Redux
  const donationData = useSelector((state) => state.donations.data);
  const paymentData = useSelector((state) => state.payments.data);

  const isRequired = localStorage.getItem("token") ? false : true;

  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle Nominal Input Change
  const handleNominalChange = (e) => {
    const rawValue = e.target.value.replace(/[^\d]/g, "");
    setFormData((prevData) => ({
      ...prevData,
      amount: formatCurrency(rawValue),
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

  // useEffect to check paymentData for redirection
  useEffect(() => {
    if (
      paymentData &&
      paymentData.snap_response &&
      paymentData.snap_response.redirect_url
    ) {
      const redirectUrl = paymentData.snap_response.redirect_url;
      window.location.href = redirectUrl; // Redirect to the payment page
    }
  }, [paymentData]);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    // Parse the amount to integer (without currency formatting)
    const formattedAmount = parseInt(
      String(formData.amount).replace(/\D/g, "")
    );
    const updatedFormData = { ...formData, amount: formattedAmount };

    try {
      let donationResponse;
      // Dispatch donation action based on token presence
      if (localStorage.getItem("token")) {
        console.log("User is registered");
        donationResponse = await dispatch(
          createDonationRegistered(updatedFormData, id)
        );
      } else {
        console.log("User is a guest");
        donationResponse = await dispatch(
          createDonationGuest(updatedFormData, id)
        );
      }

      // After donation is created, dispatch payment action
      let paymentResponse;
      console.log(donationResponse);
      if (donationResponse) {
        const donationId = donationResponse.ID; // Assuming response contains donation ID
        const paymentData = {
          donation_id: donationId,
          amount: formattedAmount,
          currency: "IDR",
        };
        console.log("Creating payment for donation:", paymentData);
        paymentResponse = await dispatch(createPayment(paymentData));
      }

      console.log(paymentResponse);
    } catch (error) {
      console.error("Error during donation/payment process:", error);
    }
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
            value={formData.amount}
            name="amount"
            onChange={handleNominalChange}
            required
          />

          {/* Nama */}
          <InputField
            label="Nama"
            placeholder="Masukkan nama"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
            isrequired={isRequired}
          />

          {/* Email */}
          <InputField
            label="Email"
            placeholder="Masukkan email"
            value={formData.email}
            name="email"
            onChange={handleInputChange}
            isrequired={isRequired}
          />

          {/* Phone */}
          <InputField
            label="Phone"
            placeholder="Masukkan nomor telepon"
            value={formData.phone}
            name="phone"
            onChange={handleInputChange}
            isRequired={isRequired}
          />

          {/* Komentar / Dukungan (Opsional) */}
          <TextArea
            label="Komentar / Dukungan (Opsional)"
            value={formData.comment}
            name="comment"
            rows={4}
            onChange={handleInputChange}
          />

          {/* Submit Button */}
          <SubmitButton label="Donasi Sekarang" icon="volunteer_activism" />
        </form>
      </div>
    </div>
  );
};

export default DonationFormPage;
