import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Typography } from '@material-ui/core/';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => {
      if (Array.isArray(alert.error)) {
        const msg = alert.error.map((msg) => (
          <Typography key={alert.id} color='error'>
            {msg}
          </Typography>
        ));
        return msg;
      } else {
        return (
          <Typography key={alert.id} color='error'>
            {alert.error}
          </Typography>
        );
      }
    })
  );
};

export default Alert;
