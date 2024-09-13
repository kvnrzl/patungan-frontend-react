// create reducer for donation
const initialState = {
  data: {},
  loading: false,
  error: null,
};

const donationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DONATION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DONATION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_DONATION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CREATE_DONATION_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "CREATE_DONATION_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "CREATE_DONATION_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default donationReducer;
