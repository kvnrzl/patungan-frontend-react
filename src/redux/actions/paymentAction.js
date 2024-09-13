import axios from "axios";

const API_URL = "http://141.11.25.60:9090/api/v1";

// create payment
const createPayment = (payment) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_PAYMENT_REQUEST" });
    try {
      console.log(`message from paymentAction.js: ${JSON.stringify(payment)}`);

      const response = await axios.post(`${API_URL}/payments`, payment);

      console.log(
        `message from paymentAction.js: ${JSON.stringify(response.data.data)}`
      );

      dispatch({
        type: "CREATE_PAYMENT_SUCCESS",
        payload: response.data.data,
      });

      return response.data.data; // Return the response for further processing
    } catch (error) {
      dispatch({
        type: "CREATE_PAYMENT_FAILURE",
        payload: error.response ? error.response.data.message : error.message,
      });
      return undefined; // Ensure we return undefined on failure
    }
  };
};

export { createPayment };
