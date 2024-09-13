import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import campaignReducer from "./reducers/campaignReducer";
import donationReducer from "./reducers/donationReducer";
import paymentReducer from "./reducers/paymentReducer";

const rootReducer = combineReducers({
  users: userReducer,
  campaigns: campaignReducer,
  donations: donationReducer,
  payments: paymentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export { store };

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// const persistor = persistStore(store);

// export { store, persistor };
