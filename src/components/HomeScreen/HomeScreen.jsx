import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPhotosList, setNextPage} from '../../redux/randomPhotosReducer';
import PhotosGrid from '../Common/PhotosGrid';
import Preloader from '../Common/Preloader';

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

  photosList.length;

  return (
    <>
      {photosList.length ? (
        <PhotosGrid
          photos={photosList}
          setNextPage={setNextPageHandler}
          isFetching={isFetching}
          navigation={navigation}
        />
      ) : (
        <Preloader />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  photosList: state.randomPhotos.photosList,
  currentPage: state.randomPhotos.currentPage,
  isFetching: state.randomPhotos.isFetching,
});

export default connect(mapStateToProps, {getPhotosList, setNextPage})(
  HomeScreen,
);
