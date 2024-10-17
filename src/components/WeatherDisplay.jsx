import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const WeatherDisplay = () => {
  const weatherData = useSelector((state) => state.weather.data);

  if (!weatherData.length) {
    return <Text className="text-center text-lg text-gray-500 mt-5">Loading...</Text>;
  }

  return (
    <FlatList className="w-full mt-10" 
      data={weatherData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View className="bg-white p-5 m-3 rounded-lg shadow-lg">
          <Text className="text-2xl font-bold text-blue-800 mb-2">{item.name}</Text>
          <Text className="text-5xl text-blue-600 mb-2">{item.main.temp}°C</Text>
          <Text className="text-lg text-gray-700">{item.weather[0].description}</Text>
        </View>
      )}
    />
  );
};

export default WeatherDisplay;
