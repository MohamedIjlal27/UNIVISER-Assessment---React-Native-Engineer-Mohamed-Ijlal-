import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import WeatherDisplay from '../components/WeatherDisplay';

test('renders loading state initially', () => {
  const { getByText } = render(
    <Provider store={store}>
      <WeatherDisplay />
    </Provider>
  );

  expect(getByText(/loading/i)).toBeTruthy();
});

