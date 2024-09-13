const initialState = {
  data: {},
  loading: false,
  error: null,
};

// create reducer to handle the create payment
const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PAYMENT_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "CREATE_PAYMENT_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "CREATE_PAYMENT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default paymentReducer;
