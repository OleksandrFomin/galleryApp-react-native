import photosAPI from '../components/API/api';

const SET_PHOTOS_LIST = 'SET_PHOTOS_LIST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_NEXT_PAGE = 'SET_NEXT_PAGE';

let initialState = {
  photosList: [],
  currentPage: 1,
  isFetching: false,
};

const randomPhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS_LIST:
      return {
        ...state,
        photosList: [...state.photosList, ...action.photosList],
      };

    case SET_NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
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

export const setPhotosList = (photosList) => ({
  type: SET_PHOTOS_LIST,
  photosList,
});

export const setNextPage = () => ({
  type: SET_NEXT_PAGE,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getPhotosList = (pageNum) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  photosAPI
    .getPhotosListRequest(pageNum)
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      console.log(`Error. Status code: ${response.status}`);
    })
    .then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setPhotosList(data));
    })
    .catch((err) => console.log(err));
};

export default randomPhotosReducer;
