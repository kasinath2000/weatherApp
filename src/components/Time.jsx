import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
      {time.toLocaleTimeString()}
    </Typography>
  );
};

export default TimeDisplay;
