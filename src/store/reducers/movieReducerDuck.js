import { Asynchronous, Synchronous } from "../ActionCreatorFactory"

// Actions
const SET_FEATURED = 'movieReducer/SET_FEATURED';
const SET_TRENDING = 'movieReducer/SET_TRENDING';


// Default State
const defaultState = {
	trendingFeatured:{},
	trendingMovie:[],
}

// Reducer
export default function authReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case SET_FEATURED: {
			return { 
				...state,
				trendingFeatured: payload
			}
		}
		case SET_TRENDING: {
			return { 
				...state,
				trendingMovie: payload
			}
		}
		default: return state;
	}
}

// Action Creators
export const setFeatured = Asynchronous(SET_FEATURED)
export const setTrending = Asynchronous(SET_TRENDING)



