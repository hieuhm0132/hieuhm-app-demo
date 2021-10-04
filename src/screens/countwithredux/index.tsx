import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {CounterState} from '../../store/count/countTypes';
import {
  incrementCounter,
  decrementCounter,
} from '../../store/count/countActions';
import CustomButton from '../../component/CustomButton';
import {RootState} from '../../store/rootReducer';

const CountWithRedux = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state.countReducer;
  });

  return (
    <View>
      <Text>count: {data.count} </Text>
      <CustomButton
        title={'Increase'}
        green
        onPress={() => dispatch(incrementCounter())}
      />
      <CustomButton
        title={'Decrease'}
        red
        onPress={() => dispatch(decrementCounter())}
      />
    </View>
  );
};

export default CountWithRedux;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 40,
    lineHeight: 47,
  },
});
