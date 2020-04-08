import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PhotosGrid from '../Common/PhotosGrid';
import {
  getSearchedPhotos,
  setQueryString,
  setNextPage,
} from '../../redux/searchedPhotosReducer';

const SearchScreen = ({
  getSearchedPhotos,
  photosList,
  isFetching,
  setQueryString,
  setNextPage,
  navigation,
  queryString,
  currentPage,
}) => {
  useEffect(() => {
    getSearchedPhotos(queryString, currentPage);
  }, [currentPage]);

  const setQueryStringHandler = (queryString) => {
    setQueryString(queryString);
  };

  const setNextPageHandler = () => {
    setNextPage();
  };

  return (
    <PhotosGrid
      photos={photosList}
      isFetching={isFetching}
      navigation={navigation}
      setQueryString={setQueryStringHandler}
      setNextPage={setNextPageHandler}
    />
  );
};

const mapStateToProps = (state) => ({
  photosList: state.searchedPhotos.photosList,
  queryString: state.searchedPhotos.queryString,
  currentPage: state.searchedPhotos.currentPage,
  isFetching: state.searchedPhotos.isFetching,
});

export default connect(mapStateToProps, {
  getSearchedPhotos,
  setQueryString,
  setNextPage,
})(SearchScreen);
