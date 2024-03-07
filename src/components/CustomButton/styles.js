import {StyleSheet} from 'react-native';
import {colors, fontSize, radius, spacing} from '../styles';

const baseStyle = StyleSheet.create({
  container: {
    borderRadius: radius.soft,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default {
  default: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: colors.theme,
      height: 40,
      margin: spacing.small,
      marginHorizontal: spacing.medium,
    },
    title: {
      ...baseStyle.title,
      color: colors.neutral,
      fontSize: fontSize.large,
    },
  }),

  outline: StyleSheet.create({
    container: {
      ...baseStyle.container,
      borderColor: colors.theme,
      borderWidth: 1,
      padding: spacing.medium,
      height: 50,
      margin: spacing.small,
      marginHorizontal: spacing.medium,
    },
    title: {
      ...baseStyle.title,
      color: colors.theme,
    },
  }),

  disabled: StyleSheet.create({
    container: {
      ...baseStyle.container,
      backgroundColor: colors.disabled,
      padding: spacing.medium,
      height: 50,
      margin: spacing.small,
      marginHorizontal: spacing.medium,
    },
    title: {
      ...baseStyle.title,
      color: 'black',
    },
  }),
  transparent: StyleSheet.create({
    container: {
      ...baseStyle.container,
    },
    title: {
      ...baseStyle.title,
    },
  }),
};
