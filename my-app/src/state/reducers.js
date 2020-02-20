import * as types from "./actionTypes";

// STEP-1 DESIGN APPLICATION STATE
// {
//   formValues: {     // SLICE 1
//     fname: '',
//     lname: '',
//   },
//   friends: [        // SLICE 2
//     { id: someId, fname: 'Jane', lname: 'Doe', married: false },
//     { id: anotherId, fname: 'john', lname: 'Smith', married: false },
//   ],
//   spinnerOn: false, // SLICE 3
// }

// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
const initialStateForm = { fname: "", lname: "" };
export function formReducer(state = initialStateForm, action) {
  // ACTION { type: "INPUT_CHANGE", payload: { inputName: 'fname', inputValue: "S" }}
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };
    case types.RESET_INPUTS:
      return initialStateForm;
    default:
      return state;
  }
}

const initialStateFriends = [];
export function friendsReducer(state = initialStateFriends, action) {
  switch (action.type) {
    case types.FETCH_FRIENDS_START:
      return state;
    case types.POST_FRIEND_START:
      return state;
    case types.DELETE_FRIEND_START:
      return state;
    case types.PUT_FRIEND_START:
      return state;
    case types.SET_POSTED_FRIEND:
      return state.concat(action.payload); // newly created friend
    case types.SET_FETCHED_FRIENDS:
      return action.payload; // all friends from API
    case types.SET_UPDATED_FRIEND:
      return state.map(fr => {
        if (action.payload.id === fr.id) {
          return action.payload;
        }
        return fr;
      });
    case types.SET_DELETE_FRIEND:
      return state.filter(fr => {
         debugger
        if (action.payload.id === fr.id) {
          return fr.id !== action.payload.id;
        }
        return fr;
      });
    default:
      return state;
  }
}

const initialStateSpinner = false;
export function spinnerReducer(state = initialStateSpinner, action) {
  switch (action.type) {
    case types.SPINNER_START:
      return true;
    case types.SPINNER_STOP:
      return initialStateSpinner;
    default:
      return state;
  }
}
