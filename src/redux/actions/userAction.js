import axios from "axios";

const API_URL = "http://141.11.25.60:9090/api/v1";

const userLogin = (user) => {
  return async (dispatch) => {
    dispatch({ type: "LOGIN_USER_REQUEST" });
    console.log(user);
    try {
      const response = await axios.post(`${API_URL}/login`, user);
      dispatch({ type: "LOGIN_USER_SUCCESS", payload: response.data.data });
      return response.data.data;
    } catch (error) {
      dispatch({ type: "LOGIN_USER_FAILURE", payload: error.message });
    }
  };
};

const userRegister = (user) => {
  return async (dispatch) => {
    dispatch({ type: "REGISTER_USER_REQUEST" });
    try {
      await axios.post(`${API_URL}/register`, user);
      dispatch({ type: "REGISTER_USER_SUCCESS", payload: null });
    } catch (error) {
      dispatch({ type: "REGISTER_USER_FAILURE", payload: error.message });
    }
  };
};

const userLogout = (email) => {
  return async (dispatch) => {
    dispatch({ type: "LOGOUT_USER_REQUEST" });
    console.log(email);
    try {
      await axios.post(`${API_URL}/logout`, email);
      dispatch({ type: "LOGOUT_USER_SUCCESS", payload: null });
    } catch (error) {
      dispatch({ type: "LOGOUT_USER_FAILURE", payload: error.message });
    }
  };
};

const getUserProfile = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_USER_PROFILE_REQUEST" });
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(`message: ${response.data.data}`);
      dispatch({
        type: "GET_USER_PROFILE_SUCCESS",
        payload: response.data.data,
      });

      return response.data.data;
    } catch (error) {
      dispatch({ type: "GET_USER_PROFILE_FAILURE", payload: error.message });
    }
  };
};

export { userLogin, userRegister, userLogout, getUserProfile };
