import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors, fontSize, spacing} from '../styles';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    paddingVertical: spacing.xSmall,
    flexDirection: 'row',
  },
  textContainer: {
    paddingVertical: spacing.xSmall / 2,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: spacing.small,
    flex: 1,
    flexDirection: 'row',
  },
  checkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: spacing.large * 2,
  },
  lineContainer: {
    paddingHorizontal: spacing.small,
  },
  title: {
    fontSize: fontSize.large,
    color: colors.primaryText,
    fontWeight: 'bold',
    flex: 1,
  },
  label: {
    fontSize: fontSize.large,
    color: colors.primaryText,
  },
  optionDocumentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.xLarge,
    // justifyContent: 'space-around',

    flex: 1,
  },
  document: {
    marginLeft: spacing.small,
    fontWeight: 'bold',
  },
});
