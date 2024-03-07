import {Platform, StyleSheet} from 'react-native';
import {colors, radius, spacing} from '../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  iconContainer: {
    top: 14,
    right: 9,
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 1,
  },
  searchBox: {
    padding: spacing.medium,
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: radius.soft,
    borderColor: colors.border,
    color: colors.primaryText,

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    elevation: Platform.OS === 'ios' ? 16 : 6,
    shadowColor: colors.primaryColor,
    shadowRadius: 7,
  },
});
