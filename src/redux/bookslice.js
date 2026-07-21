import { createSlice } from "@reduxjs/toolkit";
import books from "../data/books";

const bookSlice = createSlice({
    name: "books",
    initialState: {
        books,
    },
    reducers: {
        addBook: (state, action) => {
            state.books.unshift(action.payload);
        },
    },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;