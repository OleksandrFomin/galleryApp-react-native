import photosAPI from '../components/API/api';

const SET_SEARCHED_PHOTOS = 'SET_SEARCHED_PHOTOS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';
const SET_QUERY_STRING = 'SET_QUERY_STRING';
const CLEAR_PREVIOUS_SEARCH = 'CLEAR_PREVIOUS_SEARCH';

let initialState = {
  photosList: [],
  queryString: '',
  currentPage: 1,
  isFetching: false,
};

const randomPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_PHOTOS:
      return {
        ...state,
        photosList: [...state.photosList, ...action.searchedPhotos],
        isFetching: action.isFetching,
      };

    case SET_QUERY_STRING:
      return {
        ...state,
        queryString: action.queryString,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case CLEAR_PREVIOUS_SEARCH:
      return {
        ...state,
        photosList: [],
        currentPage: 1,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const setSearchedPhotos = (searchedPhotos) => ({
  type: SET_SEARCHED_PHOTOS,
  searchedPhotos,
});
export const setQueryString = (queryString) => ({
  type: SET_QUERY_STRING,
  queryString,
});

export const setNextPage = () => ({
  type: SET_NEXT_PAGE,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const clearPreviousSearch = () => ({
  type: CLEAR_PREVIOUS_SEARCH,
});

export const getSearchedPhotos = (queryString, pageNum) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  photosAPI
    .searchedPhotosRequest(queryString, pageNum)
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      console.log(`Error. Status code: ${response.status}`);
    })
    .then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setSearchedPhotos(data.results));
    })
    .catch((err) => console.log(err));
};

export default randomPhotosReducer;
