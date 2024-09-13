import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const MidtransPayment = () => {
  const { token } = useParams();
  // const clientKey = "SB-Mid-client-WStDMyscEgiu1SP5";

  useEffect(() => {
    // Menambahkan script Snap Midtrans saat komponen dimuat
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js"; // Sandbox environment
    const clientKey = "SB-Mid-client-WStDMyscEgiu1SP5"; // Ganti dengan client key yang valid

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute("data-client-key", clientKey);
    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag); // Menghapus script saat komponen dilepas
    };
  }, []);

  const handlePayment = () => {
    // Mendapatkan token transaksi dari backend Anda
    fetch(token, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Data yang diperlukan untuk request token transaksi
        order_id: "ORDER_ID",
        gross_amount: 200000,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Memicu Snap pop-up setelah mendapatkan token transaksi
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            /* Panggil API atau alur sukses */
            alert("Payment successful!");
            console.log(result);
          },
          onPending: function (result) {
            /* Panggil API atau alur pending */
            alert("Waiting for your payment!");
            console.log(result);
          },
          onError: function (result) {
            /* Panggil API atau alur error */
            alert("Payment failed!");
            console.log(result);
          },
          onClose: function () {
            alert("You closed the popup without finishing the payment");
          },
        });
      })
      .catch((error) =>
        console.error("Error fetching transaction token:", error)
      );
  };

  return (
    <div>
      <h2>Midtrans Payment</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default MidtransPayment;
