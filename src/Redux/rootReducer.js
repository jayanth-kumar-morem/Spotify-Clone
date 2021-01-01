import {combineReducers} from "redux";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import reducer from "./Reducer.js"

const persistConfig={
    key:"root",
    storage
}
const rootReducer=combineReducers({
    reducer:reducer
})
export default persistReducer(persistConfig,rootReducer)