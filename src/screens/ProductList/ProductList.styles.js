import {Dimensions, StyleSheet} from 'react-native';
import {spacing} from '../../components/styles';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  topContainer: {
    width: width - spacing.large * 2,
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: spacing.medium,
  },
  row: {
    justifyContent: 'space-evenly',
    marginBottom: spacing.small,
  },
  centeredView: {
    width: '100%',
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 1,
  },
  modalView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  flatList: {marginBottom: spacing.xLarge + 10},
  flatListContent: {paddingBottom: spacing.large},
  activityIndicator: {marginVertical: spacing.medium},
  productLimitReached: {alignItems: 'center'},
});
