// store.js
import { applyMiddleware, createStore } from "redux";
import { Shape_Reducer } from "./Shape_Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, Shape_Reducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware())
);

export const persistor = persistStore(store);
