import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import { Typography } from '@material-ui/core/';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <Typography key={alert.id} color='error'>
        {alert.msg}
      </Typography>
    ))
  );
};

export default Alert;
