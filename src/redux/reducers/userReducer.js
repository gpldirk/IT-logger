import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USERS_ERROR,
  SET_LOADING,
} from '../actions/types'

const initialState = {
  users: null,
  loading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }

    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        loading: false,
      }

    case USERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    case DELETE_USER:
      return {
        ...state,
        loading: false,
        users: state.users.filter(user => user.id !== action.payload)
      }

    default:
      return state
  }
}

export default userReducer;