import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface StartedState {
    value: boolean;
}

const initialState: StartedState = {
    value: false,
};

export const startedSlice = createSlice({
    name: "started",
    initialState,
    reducers: {
        setStarted: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { setStarted } = startedSlice.actions;
export default startedSlice.reducer;
