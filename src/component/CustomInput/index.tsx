import React, {useState, PropsWithChildren} from 'react';
import {View, TextInput, StyleProp, ViewStyle} from 'react-native';
import styles from './styles';
import color from '../../assets/theme/color';

interface CustomInputProps extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>;
  onChangeText: (text: string) => void;
  value?: string;
  iconLeft?: React.ReactChild;
  iconRight?: React.ReactChild;
}

const CustomInput: React.FC<CustomInputProps> = ({
  style,
  onChangeText,
  value,
  iconLeft,
  iconRight,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  function getBorderColor() {
    if (focused) {
      return color.primary;
    } else {
      return color.secondary;
    }
  }

  return (
    <View style={styles.inputContainer}>
      <View style={[styles.wrapper, style, {borderColor: getBorderColor()}]}>
        <View>{iconLeft && iconLeft}</View>
        <TextInput
          style={[styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={'#c7c7c7'}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
        <View>{iconRight && iconRight}</View>
      </View>
    </View>
  );
};

export default CustomInput;
