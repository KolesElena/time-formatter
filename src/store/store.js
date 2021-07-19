import { createStore } from "redux";
import { timeReducer } from "../reducers/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(timeReducer, composeWithDevTools());
