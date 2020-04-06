import React, {useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {getPhotosList} from '../../redux/photosListReducer';
import Center from '../Common/Center';

const HomeScreen = ({photosList, getPhotosList, isFetching, navigation}) => {
  useEffect(() => {
    getPhotosList();
  }, []);

  return (
    <>
      {isFetching ? (
        <Center>
          <ActivityIndicator size="large" />
        </Center>
      ) : (
        <FlatList
          numColumns={imagesPerRow}
          key={imagesPerRow}
          data={photosList}
          contentContainerStyle={styles.photosContainer}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Full Screen View', {
                  photoUrl: item.urls.regular,
                  name: item.alt_description,
                  instagram: item.user.instagram_username,
                })
              }
              keyExtractor={item.id}>
              <Image
                source={{uri: `${item.urls.small}`}}
                style={styles.imgItemSmall}
              />
            </TouchableOpacity>
          )}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  photosList: state.photosList.photos,
  isFetching: state.photosList.isFetching,
});

const windowWidth = Dimensions.get('window').width;
let imagesPerRow = 3;

const calculatedSize = () => {
  let size = windowWidth / imagesPerRow;
  return size;
};

const styles = StyleSheet.create({
  imgItemSmall: {
    height: calculatedSize(),
    width: calculatedSize(),
  },
});

export default connect(mapStateToProps, {getPhotosList})(HomeScreen);
