import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TimeoutState {
    value: number;
    endless: boolean;
}

const initialState: TimeoutState = {
    value: 30,
    endless: false,
};

export const timeoutSlice = createSlice({
    name: "timeout",
    initialState,
    reducers: {
        setTimeOut: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        setEndless: (state, action: PayloadAction<boolean>) => {
            state.endless = action.payload;
        },
    },
});

export const { setTimeOut, setEndless } = timeoutSlice.actions;
export default timeoutSlice.reducer;
