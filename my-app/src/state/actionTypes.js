// STEP-2 DESIGN THE TYPES OF ACTIONS THE STATE MIGHT SUFFER
export const INPUT_CHANGE = 'INPUT_CHANGE'
export const RESET_INPUTS = 'RESET_INPUTS'
// fetching friends
export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START' // no state change
export const SET_FETCHED_FRIENDS = 'SET_FETCHED_FRIENDS' // friends from API
// creating new friend
export const POST_FRIEND_START = 'POST_FRIEND_START' // no state change
export const SET_POSTED_FRIEND = 'SET_POSTED_FRIEND' // add the friend to the redux
// spinner
export const SPINNER_START = 'SPINNER_START'
export const SPINNER_STOP = 'SPINNER_STOP'
// marking married
export const PUT_FRIEND_START = 'PUT_FRIEND_START' // no state change
export const SET_UPDATED_FRIEND = 'SET_UPDATED_FRIEND' // replace updated friend in the redux
//deleting friends
export const DELETE_FRIEND_START = 'DELETE_FRIEND_START'
export const SET_DELETE_FRIEND = 'SET_DELETE_FRIEND'