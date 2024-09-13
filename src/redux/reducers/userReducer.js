const initialState = {
  token: "",
  user: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // login
    case "LOGIN_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_USER_SUCCESS":
      console.log(`message from userReducer.js: ${action.payload.token}`);
      return {
        ...state,
        loading: false,
        token: action.payload,
      };
    case "LOGIN_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // register
    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: null,
        token: "",
      };
    case "REGISTER_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // logout
    case "LOGOUT_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGOUT_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: null,
        token: "",
      };
    case "LOGOUT_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // get user profile
    case "GET_USER_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_USER_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "GET_USER_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
