import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice"

const store =configureStore({
    reducer:{
        genres:genreReducer
    }
})


export default store;