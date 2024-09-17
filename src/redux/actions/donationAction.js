import axios from "axios";

const API_URL = "http://141.11.25.60:9090/api/v1";

const getDonation = (id) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DONATION_REQUEST" });
    try {
      const response = await axios.get(`${API_URL}/donations/${id}`);
      dispatch({ type: "FETCH_DONATION_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_DONATION_FAILURE", payload: error.message });
    }
  };
};

// create donation for guest
const createDonationGuest = (donation, campaignID) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_DONATION_REQUEST" });
    try {
      const response = await axios.post(
        `${API_URL}/campaigns/${campaignID}/donate/guest`,
        donation
      );
      dispatch({
        type: "CREATE_DONATION_SUCCESS",
        payload: response.data.data,
      });
      return response.data.data; // Return the response for further processing
    } catch (error) {
      dispatch({
        type: "CREATE_DONATION_FAILURE",
        payload: error.response ? error.response.data.message : error.message,
      });
      return undefined; // Ensure we return undefined on failure
    }
  };
};

// create donation for registered user
const createDonationRegistered = (donation, campaignID) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_DONATION_REQUEST" });
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${API_URL}/campaigns/${campaignID}/donate`,
        donation,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "CREATE_DONATION_SUCCESS",
        payload: response.data.data,
      });
      return response.data.data; // Return the response for further processing
    } catch (error) {
      dispatch({
        type: "CREATE_DONATION_FAILURE",
        payload: error.response ? error.response.data.message : error.message,
      });
      return undefined; // Ensure we return undefined on failure
    }
  };
};

const getDonations = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_DONATIONS_REQUEST" });
    try {
      await axios.get(`${API_URL}/donations`).then((res) => {
        console.log(res.data.data);
        dispatch({ type: "FETCH_DONATIONS_SUCCESS", payload: res.data.data });
      });
    } catch (error) {
      dispatch({ type: "FETCH_DONATION_FAILURE", payload: error.message });
    }
  };
};

export {
  getDonations,
  getDonation,
  createDonationRegistered,
  createDonationGuest,
};
