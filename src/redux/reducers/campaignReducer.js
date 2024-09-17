const initialState = {
  campaign: {},
  campaigns: [],
  loading: false,
  error: null,
};

const campaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CAMPAIGN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_CAMPAIGN_SUCCESS":
      return {
        ...state,
        loading: false,
        campaign: action.payload,
      };
    case "FETCH_CAMPAIGNS_SUCCESS":
      return {
        ...state,
        loading: false,
        campaigns: action.payload,
      };
    case "FETCH_CAMPAIGN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CREATE_CAMPAIGN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "CREATE_CAMPAIGN_SUCCESS":
      return {
        ...state,
        loading: false,
        campaign: action.payload,
      };
    case "CREATE_CAMPAIGN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default campaignReducer;
