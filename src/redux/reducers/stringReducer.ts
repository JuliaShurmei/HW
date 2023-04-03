import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialStateType = {
  abcd: string;
  myArr: Array<number>;
  user: string;
};

export type ChangeStringType = {
  value: string;
};

const initialState: InitialStateType = {
  abcd: "qweqweqwe",
  myArr: [1, 2, 3, 4],
  user: "Igor",
};

const stringSlice = createSlice({
  name: "string",
  initialState,
  reducers: {
    changeString: (state, action: PayloadAction<ChangeStringType>) => {
      console.log("STATE", state);
      state.abcd = action.payload.value;
      console.log("ACTION", action);
    },
    changeString2: (state, action) => {
      state.abcd = "11111111111";
    },
  },
});

export const { changeString, changeString2 } = stringSlice.actions;

export const stringReducer = stringSlice.reducer;