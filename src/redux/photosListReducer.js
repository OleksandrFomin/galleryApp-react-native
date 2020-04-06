import photosAPI from '../components/API/api';

const SET_PHOTOS_LIST = 'SET_PHOTOS_LIST';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  photos: [],
  isFetching: true,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS_LIST:
      return {
        ...state,
        photos: [...action.photos],
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const setPhotosList = (photos) => ({
  type: SET_PHOTOS_LIST,
  photos,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getPhotosList = () => (dispatch) => {
  dispatch(toggleIsFetching(true));
  photosAPI
    .getPhotosListRequest()
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
      console.log(`Error. Status code: ${response.status}`);
    })
    .then((data) => {
      dispatch(toggleIsFetching(true));
      dispatch(setPhotosList(data));
    })
    .catch((err) => console.log(err));
};

export default appReducer;
