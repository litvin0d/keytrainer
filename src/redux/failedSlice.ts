import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FailedState {
    value: boolean;
}

const initialState: FailedState = {
    value: false,
};

export const failedSlice = createSlice({
    name: "failed",
    initialState,
    reducers: {
        setFailed: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { setFailed } = failedSlice.actions;
export default failedSlice.reducer;
