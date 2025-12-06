// src/redux/actions/userActions.js

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAIL,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "../actionTypes/userActionTypes";

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersFail = (error) => ({
  type: FETCH_USERS_FAIL,
  payload: error,
});

export const createUser = (user) => ({ 
  type: CREATE_USER, payload: user 
});

export const updateUser = (user) => ({ 
  type: UPDATE_USER, payload: user 
});

export const deleteUser = (id) => ({ 
  type: DELETE_USER, payload: id 
});
