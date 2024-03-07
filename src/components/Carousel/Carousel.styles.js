import {Dimensions, Platform, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    // marginHorizontal: 10,
  },
  image: {
    height: 200,
    flex: 1,
    width: width,
    resizeMode: 'contain',
  },
  carouselPointerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageBullets: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
  },
});
