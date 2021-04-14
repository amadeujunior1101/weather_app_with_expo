import { createStore, combineReducers } from "redux";
import previewsReducer from "./PreviewSearchers/PreviewSearchers.reducer";

const rootReducer = combineReducers({
  preview: previewsReducer,
});

const store = createStore(rootReducer);

export default store;
