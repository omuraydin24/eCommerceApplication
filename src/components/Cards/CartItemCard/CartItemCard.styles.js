import {StyleSheet} from 'react-native';
import {colors, fontSize, spacing} from '../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: spacing.large,
    marginVertical: spacing.small,
  },
  itemCountChangerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productNames: {
    fontSize: fontSize.large,
  },
  price: {
    color: colors.theme,
    fontWeight: 'bold',
  },
  input: {
    width: 50,
    height: 50,
    backgroundColor: colors.theme,
    color: colors.primary,
    textAlign: 'center',
  },
  countChangerButtonContainer: {
    backgroundColor: 'rgba(42, 89, 254, 0.1)',
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countChangerText: {
    fontSize: fontSize.xLarge + 5,
  },
});
