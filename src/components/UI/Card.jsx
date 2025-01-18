// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const Cards = ({ title, value }) => (
//   <Box
//     sx={{
//       bgcolor: 'white',
//       p: 2,
//       borderRadius: 2,
//       boxShadow: 2,
//       textAlign: 'center',
//     }}
//   >
//     <Typography variant="subtitle1" fontWeight="bold" color="textSecondary">
//       {title}
//     </Typography>
//     <Typography variant="h6" fontWeight="bold" color="primary">
//       {value}
//     </Typography>
//   </Box>
// );

// export default Cards;


import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Cards = ({ title, value }) => (
  <Box
    sx={{
      bgcolor: 'white',
      p: 2,
      borderRadius: 2,
      boxShadow: 2,
      textAlign: 'center',
      borderLeft: 4, // Add a left border
      borderLeftColor: 'primary.main', // Use theme primary color
    }}
  >
    <Typography variant="subtitle1" fontWeight="bold" color="textSecondary">
      {title}
    </Typography>
    <Typography variant="h6" fontWeight="bold" color="primary">
      {value}
    </Typography>
  </Box>
);

export default Cards;
