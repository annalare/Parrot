import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  token: string;
  id: number;
  isLogged: boolean;
}

const userReduce = createSlice({
  name: "user",
  initialState: {
    isLogged: false,
  } as UserState,
  reducers: {
    setUser(state, action) {
      Object.assign(state, {
        token: action.payload.token,
        id: action.payload.id,
        isLogged: true,
      });
    },
    removeUser(state, action) {
      Object.assign(state, {
        token: undefined,
        id: undefined,
        isLogged: false,
      });
    },
  },
});

export const { setUser, removeUser } = userReduce.actions;
export default userReduce.reducer;
