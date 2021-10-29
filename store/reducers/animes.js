import { ANIMES } from '../../data/dummy-data'
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/animes';

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
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredAnimes = state.allAnimes.filter(anime => {
        if(!appliedFilters.tv && anime.type === 'TV') {
          return false;
        } 
        if(!appliedFilters.movie && anime.type === 'Movie') {
          return false;
        }
        if(!appliedFilters.ova && anime.type === 'OVA') {
          return false;
        }
        if(!appliedFilters.ona && anime.type === 'ONA') {
          return false;
        }
        if(!appliedFilters.special && anime.type === 'Special') {
          return false;
        }
        if(!appliedFilters.music && anime.type === 'Music') {
          return false;
        }
        if(!appliedFilters.unknown && anime.type === 'Unknown') {
          return false;
        }
        return true;
      })
      return {...state, filteredAnimes: updatedFilteredAnimes}
    default: 
      return state;
  }
  return state;
}

export default animesReducer;