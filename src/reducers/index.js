import { combineReducers } from "redux";
import { userReducer } from "./reducer";

const reducer = combineReducers({
    userState: userReducer,
});

export default reducer;