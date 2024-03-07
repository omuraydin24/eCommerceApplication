import {StyleSheet} from 'react-native';
import {colors, fontSize, spacing} from '../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: spacing.medium,
    maxWidth: '58%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textAndIconContainer: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  label: {},

  labelText: {
    color: colors.primaryText,
    fontSize: fontSize.medium,
    fontWeight: 'bold',
  },
  valueText: {
    color: colors.primaryText,
    fontSize: fontSize,
    fontWeight: 'bold',
  },
  space: {
    height: spacing.small,
  },
});
