import axios from "axios";

const API_URL = "http://141.11.25.60:9090/api/v1";

const getCampaigns = () => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CAMPAIGNS_REQUEST" });
    try {
      await axios.get(`${API_URL}/campaigns`).then((res) => {
        console.log(res.data.data);
        dispatch({ type: "FETCH_CAMPAIGNS_SUCCESS", payload: res.data.data });
      });
    } catch (error) {
      dispatch({ type: "FETCH_CAMPAIGN_FAILURE", payload: error.message });
    }
  };
};

const getCampaign = (id) => {
  return async (dispatch) => {
    dispatch({ type: "FETCH_CAMPAIGN_REQUEST" });
    try {
      const response = await axios.get(`${API_URL}/campaigns/${id}`);
      dispatch({ type: "FETCH_CAMPAIGN_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_CAMPAIGN_FAILURE", payload: error.message });
    }
  };
};

// create campaign
const createCampaign = (campaign) => {
  return async (dispatch) => {
    dispatch({ type: "CREATE_CAMPAIGN_REQUEST" });
    try {
      const response = await axios.post(`${API_URL}/campaigns`, campaign);
      dispatch({ type: "CREATE_CAMPAIGN_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "CREATE_CAMPAIGN_FAILURE", payload: error.message });
    }
  };
};

export { getCampaigns, getCampaign, createCampaign };
