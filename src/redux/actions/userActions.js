import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  USERS_ERROR,
  SET_LOADING,
} from './types'


// Get users
export const getUsers = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/users')
    const data = await res.json()
    dispatch({
      type: GET_USERS,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.statusText
    });
  }
}

// Set loading to be true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}

// Add user
export const addUser = (user) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_USER,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.statusText
    });
  }
}

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    setLoading()

    await fetch(`/users/${id}`, {
      method: 'DELETE',
    })

    dispatch({
      type: DELETE_USER,
      payload: id,
    })

  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.statusText
    });
  }
}


