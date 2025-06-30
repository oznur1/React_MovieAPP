import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_MOVIE_LIST_URL,API_KEY } from "./components/constants/api";

const initialState={
    movieList:[],
    status:"idle",
    error:null
    
}

export const getMovieList = createAsyncThunk(' getMovieList', async () => {
    const res = await axios.get(`${API_MOVIE_LIST_URL}?api_key=${API_KEY}`)
    return res.data.results;
})


const movieListSlice=createSlice({
    name:"movieList",
    initialState,
    reducers: {
        //HTTP istekleri yoksa burası kullanılır. 
    },
    extraReducers: (builder) => {  // HTTP isteklerinde burası kullanılır.
       builder.addCase(getMovieList.pending,(state,action)=>{
        state.status=action.meta.requestStatus
       })
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.status=action.meta.requestStatus
            state.movieList = action.payload;
        })
        builder.addCase(getMovieList.rejected,(state,action)=>{
            state.status=action.meta.requestStatus
            state.error=action.error.message
        })
    }
})

export const {}=movieListSlice.actions
export default movieListSlice.reducer;