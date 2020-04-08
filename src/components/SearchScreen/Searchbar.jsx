import React from 'react';
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Dimensions,
  Keyboard,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  getSearchedPhotos,
  setQueryString,
  clearPreviousSearch,
} from '../../redux/searchedPhotosReducer';

const Searchbar = ({
  getSearchedPhotos,
  setQueryString,
  clearPreviousSearch,
  queryString,
  currentPage,
}) => {
  console.log(queryString, currentPage);
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={25} color="#000" />
        <TextInput
          value={queryString}
          onChangeText={(text) => setQueryString(text)}
          placeholder="Search..."
          style={styles.searchInput}
        />
      </View>
      <Button
        onPress={() => {
          clearPreviousSearch();
          getSearchedPhotos(queryString, currentPage);
          Keyboard.dismiss();
        }}
        title="Search"
      />
    </View>
  );
};

let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  searchContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    width: '75%',
  },
});

const mapStateToProps = (state) => ({
  queryString: state.searchedPhotos.queryString,
  currentPage: state.searchedPhotos.currentPage,
});

export default connect(mapStateToProps, {
  setQueryString,
  getSearchedPhotos,
  clearPreviousSearch,
})(Searchbar);
