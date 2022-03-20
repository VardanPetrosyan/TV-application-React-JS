import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storiesReducerDuck from "./reducers/storiesReducerDuck"
import bagReducerDuck from "./reducers/bagReducerDuck"
import movieReducerDuck from "./reducers/movieReducerDuck"



const rootReducer = combineReducers({
	// stories: storiesReducerDuck,
	bag: bagReducerDuck,
	movie:movieReducerDuck
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store