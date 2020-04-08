import {createSelector} from 'reselect';

const getRandomPhotos = (state) => state.randomPhotos.photosList;

export const getRandomPhotosSelector = createSelector(
  getRandomPhotos,
  (photos) => {
    return photos.filter((photo) => {
      console.log(photo);
      return true;
    });
  },
);
