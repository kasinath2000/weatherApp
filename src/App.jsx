

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import WeatherCards from './components/WeatherCard';

// const API_URL = import.meta.env.VITE_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;

// const App = () => {
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async (city = 'London') => {
//       try {
//         const response = await axios.get(API_URL, {
//           params: { q: city, appid: API_KEY },
//         });
//         setWeatherData(response.data);
//       } catch (err) {
//         setError('Unable to fetch weather data.');
//       }
//     };

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           try {
//             const response = await axios.get(API_URL, {
//               params: { lat: latitude, lon: longitude, appid: API_KEY },
//             });
//             setWeatherData(response.data);
//           } catch {
//             setError('Unable to fetch weather data.');
//           }
//         },
//         () => fetchWeatherData()
//       );
//     } else {
//       fetchWeatherData();
//     }
//   }, []);

//   return (
//     <div className="min-h-screen flex flex-col bg-blue-50">
//       <header className="text-center bg-blue-700 text-gray-300 py-4 shadow-lg">
//         <h1 className="text-2xl font-bold">KM Weather App</h1>
//       </header>
//       <div className="flex flex-1">
//         {error ? (
//           <p className="text-red-500 m-auto">{error}</p>
//         ) : (
//           <WeatherCards weatherData={weatherData} />
//         )}
//       </div>
//       <footer className="bg-blue-700 text-gray-300 text-center py-3">
//         <p>© 2025 KMWeather App. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherCards from "./components/WeatherCard";

const API_URL = import.meta.env.VITE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async (city = "London") => {
      try {
        const response = await axios.get(API_URL, {
          params: { q: city, appid: API_KEY },
        });
        setWeatherData(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError("Unable to fetch weather data.");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(API_URL, {
              params: { lat: latitude, lon: longitude, appid: API_KEY },
            });
            setWeatherData(response.data);
          } catch {
            setError("Unable to fetch weather data.");
          }
        },
        () => fetchWeatherData()
      );
    } else {
      fetchWeatherData();
    }
  }, []);

  const handleCitySearch = (city) => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(API_URL, {
          params: { q: city, appid: API_KEY },
        });
        setWeatherData(response.data);
        setError(null); // Clear previous errors
      } catch (err) {
        setError("oppss! Unable to fetch weather data.");
      }
    };
    fetchWeatherData();
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <header className="text-center bg-blue-700 text-gray-300 py-4 shadow-lg">
        <h1 className="text-2xl font-bold">KM Weather App</h1>
      </header>
      <div className="flex flex-1">
        {error ? (
          <p className="text-red-500 m-auto">{error}</p>
        ) : (
          <WeatherCards weatherData={weatherData} onCitySearch={handleCitySearch} />
        )}
      </div>
      <footer className="bg-blue-700 text-gray-300 text-center py-3">
        <p>© 2025 KMWeather App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
