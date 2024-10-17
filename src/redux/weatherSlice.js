import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'

const API_KEY = 'd1d04051b09dee1ee8010dfef8c3c50b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (locations) => {
    const weatherData = await Promise.all(locations.map(async ({ lat, lon }) => {
        const response = await axios.get(BASE_URL, {
            params: {
                lat,
                lon,
                units: 'metric',
                appid: API_KEY
            }
        });
        return response.data;
    }));
    return weatherData;
});

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeather.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchWeather.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchWeather.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
});

export default weatherSlice.reducer;
