import photosAPI from '../components/API/api';

const SET_PHOTOS_LIST = 'SET_PHOTOS_LIST';

let initialState = {
  photos: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS_LIST:
      return {
        ...state,
        photos: [...action.photos],
      };

    default:
      return state;
  }
};

export const setPhotosList = (photos) => ({
  type: SET_PHOTOS_LIST,
  photos,
});

export const getPhotosList = () => async (dispatch) => {
  photosAPI
    .getPhotosListRequest()
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dispatch(setPhotosList(data));
    });
};

export default appReducer;
