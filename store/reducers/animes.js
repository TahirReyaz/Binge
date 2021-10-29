import { ANIMES } from '../../data/dummy-data'
import { TOGGLE_FAVORITE } from '../actions/animes';

const initialState = {
  allAnimes: ANIMES, 
  filteredAnimes: ANIMES,
  favAnimes: []
}

const animesReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favAnimes.findIndex(anime => anime.id === action.id)
      const updatedFavAnimes = [...state.favAnimes];
      if(existingIndex >= 0) {
        updatedFavAnimes.splice(existingIndex, 1);
        return {...state, favAnimes: updatedFavAnimes}
      } else {
        const anime = state.allAnimes.find(anime => anime.id === action.id)
        return {...state, favAnimes: updatedFavAnimes.concat(anime)}
      }
    default: 
      return state;
  }
  return state;
}

export default animesReducer;