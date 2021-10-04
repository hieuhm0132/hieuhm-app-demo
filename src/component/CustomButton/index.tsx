import React, {PropsWithChildren} from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import color from '../../assets/theme/color';

interface CustomButtonProps extends PropsWithChildren<any> {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  isSelecting?: boolean;
  disable?: boolean;
  loading?: boolean;
  textColor?: string;
  primary?: boolean;
  red?: boolean;
  green?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  style,
  title,
  onPress,
  isSelecting,
  disable,
  loading,
  textColor = '#ffffff',
  primary,
  red,
  green,
}) => {
  if (loading) {
    title = 'Loading...';
  }
  function getBgColor() {
    if (loading) {
      return color.secondary;
    }
    if (primary) {
      return color.primary;
    }

    if (red) {
      return color.red;
    }

    if (green) {
      return color.green;
    }
  }

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        style,
        {
          backgroundColor: getBgColor(),
          borderColor: isSelecting ? 'red' : 'white',
        },
      ]}
      activeOpacity={1}
      disabled={disable}
      onPress={onPress}>
      <View style={styles.loaderSection}>
        {loading && <ActivityIndicator color={color.white} />}
        {title && (
          <Text
            style={[
              styles.text,
              {paddingLeft: loading ? 5 : 0, color: textColor},
            ]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
