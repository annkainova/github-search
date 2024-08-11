import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChosenRepo } from '../../interface/interfaces';

interface chosenRepoInterface {
  chosenRepo: ChosenRepo | null;
}

const initialState: chosenRepoInterface = {
  chosenRepo: null,
};

const chosenRepoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setChosenRepo(state, action: PayloadAction<ChosenRepo>) {
      const newState = state;
      newState.chosenRepo = action.payload;
    },
  },
});

export const { setChosenRepo } = chosenRepoSlice.actions;
export default chosenRepoSlice.reducer;
