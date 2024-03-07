import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors, spacing} from '../styles';

const {height} = Dimensions.get('window');
export default StyleSheet.create({
  body: {
    backgroundColor: colors.primary,
    height: height,
    flex: 1,
  },
  safeArea: {
    backgroundColor: colors.primary,
  },
});
