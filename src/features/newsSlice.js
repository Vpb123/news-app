import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialStateValue = {
    news: [],
    loading: 'idle',
    error: null,
};

const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    try {
        const API_KEY = "5c4e557cbf0e489eb2a47e69cf97b724";
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
        console.log(response);
        return response.data.articles.reverse();
    } catch (error) {
        throw error;
    }
});

const newsSlice = createSlice({
    name: 'news',
    initialState: initialStateValue,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNews.pending, (state) => {
            state.loading = 'loading';
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.news = action.payload;
        })
        .addCase(fetchNews.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        });
    },
});

export default newsSlice.reducer;

export { fetchNews };
