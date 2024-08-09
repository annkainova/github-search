import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchQueryInterface {
  searchQuery: string;
}

const initialState: searchQueryInterface = {
  searchQuery: '',
};

const searchQuerySlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      const newState = state;
      newState.searchQuery = action.payload;
    },
    clearSearchQuery(state) {
      const newState = state;
      newState.searchQuery = '';
    },
  },
});

export const { setSearchQuery, clearSearchQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
