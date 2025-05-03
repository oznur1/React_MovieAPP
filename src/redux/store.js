import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./genreSlice";
import movieListReducer from "./movieListSlice"; // <-- isim burada değiştirildi

const store = configureStore({
    reducer: {
        genres: genreReducer,
        movieList: movieListReducer, // <-- burada doğru isim kullanıldı
    }
});

export default store;
