import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPhotosList, setNextPage} from '../../redux/randomPhotosReducer';
import {getRandomPhotosSelector} from '../Selectors/photosSelector';
import PhotosGrid from '../Common/PhotosGrid';

const HomeScreen = ({
  photosList,
  getPhotosList,
  setNextPage,
  currentPage,
  isFetching,
  navigation,
}) => {
  useEffect(() => {
    getPhotosList(currentPage);
  }, [currentPage]);

  const setNextPageHandler = () => {
    setNextPage();
  };

  return (
    <PhotosGrid
      photos={photosList}
      setNextPage={setNextPageHandler}
      isFetching={isFetching}
      navigation={navigation}
    />
  );
};

const mapStateToProps = (state) => ({
  photosList: getRandomPhotosSelector(state),
  currentPage: state.randomPhotos.currentPage,
  isFetching: state.randomPhotos.isFetching,
});

export default connect(mapStateToProps, {getPhotosList, setNextPage})(
  HomeScreen,
);
