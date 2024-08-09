import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anime } from '../../pages/mainPage/components/CardSection';

interface AnimeListSlice {
  animeListOnPage: Anime[];
  detailCard: Anime | null;
  searchQuery: string;
  currentPage: number;
  selectedElements: Anime[];
}

const initialState: AnimeListSlice = {
  animeListOnPage: [],
  detailCard: null,
  searchQuery: '',
  currentPage: 1,
  selectedElements: [],
};

const animeListSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setAnimeListOnPage(state, action: PayloadAction<Anime[]>) {
      const newState = state;
      newState.animeListOnPage = action.payload;
    },
    setDetailCard(state, action: PayloadAction<Anime>) {
      const newState = state;
      newState.detailCard = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      const newState = state;
      newState.searchQuery = action.payload;
    },
    clearSearchQuery(state) {
      const newState = state;
      newState.searchQuery = '';
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      const newState = state;
      newState.currentPage = action.payload;
    },
    setSelectedElements(state, action: PayloadAction<Anime>) {
      if (
        !state.selectedElements.some((anime) => anime.id === action.payload.id)
      ) {
        const newState = state;
        newState.selectedElements?.push(action.payload);
      }
    },
    deleteSelectedElements(state, action: PayloadAction<string>) {
      const newState = state;
      newState.selectedElements = newState.selectedElements.filter(
        (anime) => anime.id !== action.payload
      );
    },
    deleteAllSelectedElements(state) {
      const newState = state;
      newState.selectedElements = [];
    },
  },
});

export const {
  setSearchQuery,
  clearSearchQuery,
  setCurrentPage,
  setAnimeListOnPage,
  setDetailCard,
  setSelectedElements,
  deleteSelectedElements,
  deleteAllSelectedElements,
} = animeListSlice.actions;
export default animeListSlice.reducer;
