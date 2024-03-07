import {StyleSheet} from 'react-native';
import {colors, fontSize, spacing} from '../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: colors.primary,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
    position: 'absolute',
    top: 40,
    left: 10,
    zIndex: 1,
  },
  leftButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    marginBottom: spacing.small,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: fontSize.xLarge,
    color: colors.primaryText,
  },
});
