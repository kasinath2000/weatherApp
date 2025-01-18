// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import InputAdornment from "@mui/material/InputAdornment";
// import SearchIcon from "@mui/icons-material/Search"; // Search Icon
// import Card from "./UI/Card";
// import TimeDisplay from "./Time";

// const WeatherCards = ({ weatherData, onCitySearch }) => {
//   const [city, setCity] = useState("");

//   if (!weatherData) return <Typography variant="h6">Loading...</Typography>;

//   const { name, weather, main, wind, clouds, sys, visibility } = weatherData;

//   const kelvinToCelsius = (temp) => Math.round(temp - 273.15);

//   const handleSearch = () => {
//     if (city.trim()) {
//       onCitySearch(city);
//       setCity(""); // Clear the input field
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         p: 4,
//         gap: 4,
//       }}
//     >
//       {/* Left Side: Main Weather Details with Search */}
//       <Box
//         sx={{
//           flex: 0.4,
//           bgcolor: "#E8F9FF",
//           p: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//           textAlign: "center",
//           borderLeft: 4,
//           borderLeftColor: "primary.main",
//         }}
//       >
//         {/* Search Field with Button on the Same Line */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center", // Aligns items to the center horizontally
//             gap: 2,
//             mb: 3,
//             width: "100%", // Ensures full width of the container
//           }}
//         >
//           <TextField
//             label="Search City"
//             variant="outlined"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             fullWidth
//             size="small" // Makes the search field smaller in size
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//             sx={{
//               "& .MuiInputBase-root": {
//                 fontSize: "0.875rem", // Small font size
//                 height: "40px", // Adjust height to make it smaller
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleSearch}
//             sx={{
//               fontSize: "0.875rem",
//               height: "40px", // Match height with the input field
//             }}
//           >
//             Search
//           </Button>
//         </Box>

//         {/* Main Weather Details */}
//         <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
//           {name}, {sys.country}
//         </Typography>
//         <Typography
//           variant="h3"
//           fontWeight="medium"
//           color="primary"
//           gutterBottom
//           sx={{ mb: 3 }}
//         >
//           {kelvinToCelsius(main.temp)}°C
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           color="textSecondary"
//           gutterBottom
//           sx={{ mb: 3 }}
//         >
//           {weather[0].description.charAt(0).toUpperCase() +
//             weather[0].description.slice(1)}
//         </Typography>
//         <Box
//           component="img"
//           src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
//           alt={weather[0].description}
//           sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
//         />
//         <Box
//           sx={{
//             border: "2px solid #808080",
//           }}
//         >
//           <TimeDisplay />
//         </Box>
//       </Box>

//       {/* Right Side: Weather Details Grid */}
//       <Box
//         sx={{
//           flex: 0.6,
//           bgcolor: "blue.50",
//           p: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//           borderRight: 4,
//           borderRightColor: "primary.main",
//         }}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={6} sm={4}>
//             <Card
//               title="Min Temp"
//               value={`${kelvinToCelsius(main.temp_min)}°C`}
//             />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <Card
//               title="Max Temp"
//               value={`${kelvinToCelsius(main.temp_max)}°C`}
//             />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <Card title="Humidity" value={`${main.humidity}%`} />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <Card title="Wind Speed" value={`${wind.speed} m/s`} />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <Card
//               title="Sunrise"
//               value={new Date(sys.sunrise * 1000).toLocaleTimeString()}
//             />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <Card
//               title="Sunset"
//               value={new Date(sys.sunset * 1000).toLocaleTimeString()}
//             />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <Card title="Clouds" value={`${clouds.all}%`} />
//           </Grid>
//           <Grid item xs={6} sm={4}>
//             <Card
//               title="Visibility"
//               value={`${(visibility / 1000).toFixed(1)} km`}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default WeatherCards;
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search"; // Search Icon
import Card from "./UI/Card";
import TimeDisplay from "./Time";
import { Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn"; // Location Icon

const WeatherCards = ({ weatherData, onCitySearch, onLocationClick }) => {
  const [city, setCity] = useState("");

  if (!weatherData) return <Typography variant="h6">Loading...</Typography>;

  const { name, weather, main, wind, clouds, sys, visibility } = weatherData;

  const kelvinToCelsius = (temp) => Math.round(temp - 273.15);

  const handleSearch = () => {
    if (city.trim()) {
      onCitySearch(city);
      setCity(""); // Clear the input field
    }
  };

  const handleLocationClick = () => {
    onLocationClick(); // Trigger location fetch on chip click
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack elements on mobile, row on larger screens
        p: 2, // Adjust padding for better spacing
        gap: 4,
      }}
    >
      {/* Left Side: Main Weather Details with Search */}
      <Box
        sx={{
          flex: { xs: "1", md: "0.4" }, // Take full width on small screens, 40% on larger ones
          bgcolor: "#E8F9FF",
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          borderLeft: 4,
          borderLeftColor: "primary.main",
        }}
      >
        {/* Search Field with Button on the Same Line */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 3,
            width: "100%",
          }}
        >
          <TextField
            label="Search City"
            variant="outlined"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "0.875rem",
                height: "40px", // Adjust height to make it smaller
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{
              fontSize: "0.875rem",
              height: "40px",
            }}
          >
            Search
          </Button>
        </Box>

        {/* Location Chip to Detect Current Location */}
        <Chip
          icon={<LocationOnIcon />}
          label="Use My Location"
          onClick={handleLocationClick}
          color="primary"
          sx={{ mb: 3, cursor: "pointer" }}
        />
        
        {/* Main Weather Details */}
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
          {name}, {sys.country}
        </Typography>
        <Typography
          variant="h3"
          fontWeight="medium"
          color="primary"
          gutterBottom
          sx={{ mb: 3 }}
        >
          {kelvinToCelsius(main.temp)}°C
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          gutterBottom
          sx={{ mb: 3 }}
        >
          {weather[0].description.charAt(0).toUpperCase() +
            weather[0].description.slice(1)}
        </Typography>
        <Box
          component="img"
          src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
          sx={{ width: 64, height: 64, mx: "auto", mb: 2 }}
        />
        <Box
          sx={{
            border: "2px solid #808080",
          }}
        >
          <TimeDisplay />
        </Box>
      </Box>

      {/* Right Side: Weather Details Grid */}
      <Box
        sx={{
          flex: { xs: "1", md: "0.6" }, // Take full width on small screens, 60% on larger ones
          bgcolor: "blue.50",
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          borderRight: 4,
          borderRightColor: "primary.main",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4}>
            <Card
              title="Min Temp"
              value={`${kelvinToCelsius(main.temp_min)}°C`}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card
              title="Max Temp"
              value={`${kelvinToCelsius(main.temp_max)}°C`}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card title="Humidity" value={`${main.humidity}%`} />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card title="Wind Speed" value={`${wind.speed} m/s`} />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card
              title="Sunrise"
              value={new Date(sys.sunrise * 1000).toLocaleTimeString()}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card
              title="Sunset"
              value={new Date(sys.sunset * 1000).toLocaleTimeString()}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card title="Clouds" value={`${clouds.all}%`} />
          </Grid>
          <Grid item xs={6} sm={4}>
            <Card
              title="Visibility"
              value={`${(visibility / 1000).toFixed(1)} km`}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WeatherCards;
