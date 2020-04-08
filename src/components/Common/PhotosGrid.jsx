import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PhotosGrid = (props) => {
  const flatListRef = useRef();

  const scrollToTop = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <>
      <FlatList
        ref={flatListRef}
        contentContainerStyle={styles.photosContainer}
        onMomentumScrollBegin={() => setIsScrolled(true)}
        scrollsToTop={() => setIsScrolled(false)}
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
      {isScrolled ? (
        <TouchableOpacity onPress={scrollToTop} style={styles.scrollToTopBtn}>
          <Icon
            name="keyboard-arrow-up"
            color="black"
            size={30}
            styles={styles.scrollToTopArrow}
          />
        </TouchableOpacity>
      ) : null}

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

  scrollToTopBtn: {
    position: 'absolute',
    right: 10,
    bottom: 20,
    backgroundColor: 'rgba(255,255,255, 0.7)',
    padding: 10,
    borderRadius: 50,
  },

  preloader: {
    position: 'absolute',
    left: '45%',
    bottom: 20,
  },
});

export default PhotosGrid;
