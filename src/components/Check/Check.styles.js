import {StyleSheet} from 'react-native';
import {colors} from '../styles';

export default StyleSheet.create({
  button: {
    borderRadius: 40,
    width: 30,
    height: 30,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.theme,
    right: 5,
  },
  tag: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
