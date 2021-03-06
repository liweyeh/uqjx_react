import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERT } from '../type';
import { v4 as uuidv4 } from 'uuid';

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alerts
  const setAlert = (error, type, timeout = 5000) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { error, type, id },
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
        payload: id,
      });
    }, timeout);
  };

  const clearAlert = () => {
    dispatch({
      type: CLEAR_ALERT,
    });
  };
  return (
    <AlertContext.Provider value={{ alerts: state, setAlert, clearAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
