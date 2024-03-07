import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontSize, spacing} from '../../components/styles';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: spacing.medium,
  },
  totalPriceContainer: {
    justifyContent: 'center',
  },
  totalText: {
    color: colors.theme,
  },
  subTotal: {
    fontSize: fontSize.large,
    fontWeight: 'bold',
  },
  cartButton: {width: 180},
});
