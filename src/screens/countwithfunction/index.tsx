import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../component/CustomButton';

const CountWithFunction = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>count: {count} </Text>
      <CustomButton
        title={'Increase'}
        green
        onPress={() => setCount(count + 1)}
      />
      <CustomButton
        title={'Decrease'}
        red
        onPress={() => setCount(count - 1)}
      />
    </View>
  );
};

export default CountWithFunction;
