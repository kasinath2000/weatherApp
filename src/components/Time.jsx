

import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns'; // Import format from date-fns

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Define the date format
  const formattedDate = format(time, 'dd-MM-yyyy');
  const dayName = format(time, 'EEEE'); // Get full day name (e.g., Monday)

  return (
    <div>
      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        {time.toLocaleTimeString()}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {formattedDate} - {dayName}
      </Typography>
    </div>
  );
};

export default TimeDisplay;
