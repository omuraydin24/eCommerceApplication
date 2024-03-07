import {Platform, StyleSheet} from 'react-native';
import {colors, fontSize, spacing} from '../../styles';
export default StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: spacing.small,
  },
  cardContainer: {
    width: 170,
    height: 330,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: spacing.small,
    alignItems: 'center',

    backgroundColor: colors.neutral,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    elevation: Platform.OS === 'ios' ? 12 : 6,
    shadowColor: colors.primaryText,
    shadowRadius: 7,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },

  favIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favIcon: {
    width: 24,
    height: 24,
  },
  infoContainer: {
    marginTop: spacing.medium,
    justifyContent: 'space-around',
    flex: 1,
    alignSelf: 'flex-start',
  },
  descriptionContainer: {
    alignSelf: 'flex-start',
    flex: 1,
    height: 60,
  },
  brandName: {
    fontWeight: 'bold',
    fontSize: fontSize.medium,
  },
  cartButton: {width: 150},
});
