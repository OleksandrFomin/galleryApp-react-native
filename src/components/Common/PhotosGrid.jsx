import React from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Center from './Center';

const PhotosGrid = (props) => {
  return (
    <>
      <FlatList
        contentContainerStyle={styles.photosContainer}
        numColumns={imagesPerRow}
        data={props.photos}
        scrollEnabled={!props.isFetching}
        onEndReached={() => {
          props.setNextPage();
        }}
        onEndReachedThreshold={0.3}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Full Screen View', {
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
      {props.isFetching ? (
        <ActivityIndicator
          size="large"
          color="white"
          style={styles.preloader}
        />
      ) : null}
    </>
  );
};

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
  preloader: {
    position: 'absolute',
    left: '45%',
    bottom: 20,
  },
});

export default PhotosGrid;
