import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from '../type';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = () => {
    fetch('/api/auth', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': state.token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: USER_LOADED,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: AUTH_ERROR,
          payload: error.message,
        });
      });
  };
  // Register User
  const register = (formData) => {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.token !== undefined) {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
          });
          loadUser();
        } else {
          throw new Error(data.msg);
        }
      })
      .catch((error) => {
        dispatch({
          type: REGISTER_FAIL,
          payload: error.message,
        });
      });
  };
  // Login User
  const login = () => console.log('login');

  // Logout
  const logout = () => console.log('logout');

  // Clear Errors
  const clearError = () =>
    dispatch({
      type: CLEAR_ERRORS,
    });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;