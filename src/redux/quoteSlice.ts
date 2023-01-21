import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuoteState {
    value: string;
}

const initialState: QuoteState = {
    value: "",
};

export const quoteSlice = createSlice({
    name: "quote",
    initialState,
    reducers: {
        setQuote: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
