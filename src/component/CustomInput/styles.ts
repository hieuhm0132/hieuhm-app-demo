import {StyleSheet} from 'react-native';
import color from '../../assets/theme/color';

export default StyleSheet.create({
  inputContainer: {},
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    color: color.black,
    paddingHorizontal: 8,
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
