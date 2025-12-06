// src/redux/reducers/userReducer.js

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actionTypes/userActionTypes";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCH_USERS_FAIL:
      return { ...state, loading: false, error: action.payload };

    case CREATE_USER:
      return { ...state, data: [...state.data, action.payload] };

    case UPDATE_USER:
      return {
        ...state,
        data: state.data.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };

    case DELETE_USER:
      return {
        ...state,
        data: state.data.filter((u) => u.id !== action.payload),
      };

    default:
      return state;
  }
}
