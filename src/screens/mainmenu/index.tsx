import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {
  COUNTWITHCLASS,
  COUNTWITHFUNCTION,
  COUNTWITHREDUX,
  QUOTEWITHFETCH,
  QUOTEWITHXML,
  TODOLIST,
} from '../../constants/routeNames';

const MainMenu = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <CustomButton
        primary
        title="CountWithClass"
        onPress={() => {
          navigate(COUNTWITHCLASS);
        }}
      />
      <CustomButton
        primary
        title="CountWithFunciton"
        onPress={() => {
          navigate(COUNTWITHFUNCTION);
        }}
      />
      <CustomButton
        primary
        title="CountWithRedux"
        onPress={() => {
          navigate(COUNTWITHREDUX);
        }}
      />
      <CustomButton
        primary
        title="QuoteWithFetch"
        onPress={() => {
          navigate(QUOTEWITHFETCH);
        }}
      />
      <CustomButton
        primary
        title="QuoteWithXML"
        onPress={() => {
          navigate(QUOTEWITHXML);
        }}
      />
      <CustomButton
        primary
        title="TodoList"
        onPress={() => {
          navigate(TODOLIST);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainMenu;
