import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface counterState {
    current: number,
    total: number,
}

const initialState: counterState = {
    current: 0,
    total: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        setCounterCurrent: (state, action: PayloadAction<number>) => {
            state.current = action.payload;
        },
        setCounterTotal: (state, action: PayloadAction<number>) => {
            state.total = action.payload;
        }
    }
});

export const {setCounterCurrent, setCounterTotal} = counterSlice.actions;
export default counterSlice.reducer;