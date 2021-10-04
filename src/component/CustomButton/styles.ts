import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 25,
    marginVertical: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
  },
  loaderSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
