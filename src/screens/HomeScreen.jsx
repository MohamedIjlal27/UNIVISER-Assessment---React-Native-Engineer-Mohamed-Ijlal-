import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import WeatherDisplay from '../components/WeatherDisplay';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const refreshWeather = () => {
    const locations = [
      { lat: 37.7749, lon: -122.4194 }, // San Francisco
      { lat: 40.7128, lon: -74.0060 },  // New York
      { lat: 34.0522, lon: -118.2437 }, // Los Angeles
      { lat: 51.5074, lon: -0.1278 },   // London
      { lat: 48.8566, lon: 2.3522 },    // Paris
      { lat: 35.6895, lon: 139.6917 },  // Tokyo
      { lat: -33.8688, lon: 151.2093 }, // Sydney
      { lat: 55.7558, lon: 37.6173 },   // Moscow
      { lat: 28.6139, lon: 77.2090 },   // New Delhi
      { lat: -23.5505, lon: -46.6333 }  // São Paulo
    ];
    dispatch(fetchWeather(locations));
  };

  useEffect(() => {
    refreshWeather();
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <WeatherDisplay />
      <View className="mt-5 w-4/5">
        <Button title="Refresh" onPress={refreshWeather} color="#1E40AF" />
      </View>
    </View>
  );
};

export default HomeScreen;
