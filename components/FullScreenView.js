import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const FullScreenView = ({route}) => {
  const {photoUrl} = route.params;
  const {name} = route.params;
  const {instagram} = route.params;

  return (
    <View>
      <Image style={styles.imgItemLarge} source={{uri: `${photoUrl}`}} />
      <View style={styles.photoDescription}>
        {name ? <Text style={styles.photoDescriptionText}>{name}</Text> : null}
        {instagram ? <Text>@{instagram}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgItemLarge: {
    width: '100%',
    height: '100%',
  },
  photoDescription: {
    position: 'absolute',
    bottom: '10%',
    left: '20%',
    width: '60%',
    padding: 5,
    borderRadius: 4,
    elevation: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255,255,255, 0.7)',
  },

  photoDescriptionText: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default FullScreenView;
