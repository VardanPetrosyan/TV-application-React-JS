import { Asynchronous, Synchronous } from "../ActionCreatorFactory"

// Actions
const SET_STORIES = 'storieReducer/SET_STORIES';
const SET_STORIES_ORDER = 'storieReducer/SET_STORIES_ORDER';
const SET_STORIES_LANG = 'storieReducer/SET_STORIES_LANG';
const SET_STORIES_REFRESH_TIME = 'storieReducer/SET_STORIES_REFRESH_TIME';
const SET_STORIES_NEXT_PAGE_TOKEN = 'storieReducer/SET_STORIES_NEXT_PAGE_TOKEN';

const UPDATE_STORIES = 'storieReducer/UPDATE_STORIES';



// Default State
const defaultState = {
	storiesNextPageToken:null,
	storiesData: [],
	storiesRefreshTime: 60,
	storiesOrder: 'retweeted',
	storiesLang: 'en'
}

// Reducer
export default function authReducer(state = defaultState, { type, payload } = {}) {
	switch (type) {
		case SET_STORIES: {
			return { 
				...state,
				storiesData: payload
			}
		}
		case SET_STORIES_ORDER: {
			return { 
				...state,
				storiesOrder: payload
			}
		}
		case UPDATE_STORIES: {
			return { 
				...state,
				storiesData:state.storiesData.concat(payload)
			}
		}
		case SET_STORIES_LANG: {
			return { 
				...state,
				storiesLang: payload
			}
		}
		case SET_STORIES_REFRESH_TIME: {
			return { 
				...state,
				storiesRefreshTime: payload
			}
		}
		case SET_STORIES_NEXT_PAGE_TOKEN: {
			return { 
				...state,
				storiesNextPageToken: payload
			}
		}
		default: return state;
	}
}

// Action Creators
export const setStories = Asynchronous(SET_STORIES)
export const setStoriesOrder = Synchronous(SET_STORIES_ORDER)
export const setStoriesLang = Synchronous(SET_STORIES_LANG)
export const setStoriesRefreshTime = Synchronous(SET_STORIES_REFRESH_TIME)
export const setStoriesNextPageToken = Synchronous(SET_STORIES_NEXT_PAGE_TOKEN)


export const updateStories = Asynchronous(UPDATE_STORIES)


