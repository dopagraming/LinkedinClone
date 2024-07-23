import { combineReducers } from "redux";
import userReducer from "./userReducer"
import articlesReducer from "./articlesReducer"
const rootReducers = combineReducers({
    userState: userReducer,
    articleState: articlesReducer,
})

export default rootReducers;