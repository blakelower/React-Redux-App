import * as types from './actionTypes'
import axios from 'axios'

const friendsAPI = 'http://localhost:4000/api/friends'

// STEP-7 MAKE ACTION CREATORS THE COMPONENTS CAN USE DIRECTLY
export function changeInput({ inputName, inputValue }) {
  return {
    type: types.INPUT_CHANGE,
    payload: { inputName, inputValue }
  }
}
export const fetchAllFriends = () => dispatch => {
  dispatch({ type: types.FETCH_FRIENDS_START })
  dispatch({ type: types.SPINNER_START })

  axios.get(friendsAPI)
    .then(res => {
      dispatch({ type: types.SET_FETCHED_FRIENDS, payload: res.data })
    })
    .catch(err => {
      debugger
      // dispatch({ type: "SET_ERROR", payload: err.message })
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP })
    })
}

export const postNewFriend = ({ fname, lname, skater }) => dispatch => {
  dispatch({ type: types.POST_FRIEND_START })
  dispatch({ type: types.SPINNER_START })

  axios.post(friendsAPI, {
    fname,
    lname,
    skater
  })
    .then(res => {
      // we have the newly created friend inside res.data
      dispatch({ type: types.SET_POSTED_FRIEND, payload: res.data })
    })
    .catch(err => {
      debugger
      // dispatch({ type: "SET_ERROR", payload: err.message })
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP })
    })
}

export const updateFriend = ({ id, fname, lname, skater }) => dispatch => {
  dispatch({ type: types.PUT_FRIEND_START })
  dispatch({ type: types.SPINNER_START })

  axios.put(friendsAPI + `/${id}`, {
    fname,
    lname,
    skater
  })
    .then(res => {
      // we have the updated friend inside res.data
      dispatch({ type: types.SET_UPDATED_FRIEND, payload: res.data })
    })
    .catch(err => {
      debugger
      // dispatch({ type: "SET_ERROR", payload: err.message })
    })
    .finally(() => {
      dispatch({ type: types.SPINNER_STOP })
    })
}

export const deleteFriend = ({ id }) => dispatch => {
    dispatch({ type: types.DELETE_FRIEND_START })
    dispatch({ type: types.SPINNER_START })

    axios.delete(friendsAPI + `/${id}`)
      
        .then(res => {
          // we have the updated friend inside res.data
          debugger
          dispatch({ type: types.DELETE_FRIEND_START, payload: res.data })
        })
        .catch(err => {
          debugger
          // dispatch({ type: "SET_ERROR", payload: err.message })
        })
        .finally(() => {
          dispatch({ type: types.SPINNER_STOP })
        })
    }
    