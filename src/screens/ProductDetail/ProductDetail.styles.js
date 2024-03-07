import {StyleSheet} from 'react-native';
import {colors, fontSize, spacing} from '../../components/styles';
export default StyleSheet.create({
  container: {
    // marginHorizontal: spacing.medium,
    flex: 1,
  },
  contentContainer: {},
  imageContainer: {
    // marginHorizontal: spacing.large,
  },
  image: {
    height: 225,
    resizeMode: 'cover',
  },

  favIconContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    marginRight: spacing.medium,
  },
  favIcon: {
    width: 24,
    height: 24,
  },
  brandText: {
    fontWeight: 'bold',
    fontSize: fontSize.xLarge,
    marginTop: spacing.medium,
    marginHorizontal: spacing.medium,
  },
  description: {
    marginTop: spacing.medium,
    marginHorizontal: spacing.medium,

    flex: 1,
  },
  bottomContainer: {
    bottom: 0,
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '96%',
    alignItems: 'center',
    marginHorizontal: spacing.medium,
  },
  priceTagContainer: {
    height: 44,
    justifyContent: 'center',
  },
  priceText: {
    color: colors.theme,
    fontSize: fontSize.xLarge,
  },
  priceTag: {
    fontWeight: 'bold',
    fontSize: fontSize.xLarge,
  },
  cartButton: {width: 182},
});
