import React, {useState} from 'react';
import {View} from 'react-native';
import styles from '../../TodoList/FilterBar/styles';
import CustomButton from '../../CustomButton';

interface FilterBarProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filter: string;
}

const FilterBar: React.FC<FilterBarProps> = ({setFilter, filter}) => {
  return (
    <View style={styles.optionbar}>
      <CustomButton
        title="All"
        onPress={() => {
          setFilter('All');
        }}
        isSelecting={filter === 'All'}
        textColor={'#000000'}
      />
      <CustomButton
        title="Active"
        onPress={() => {
          setFilter('Active');
        }}
        isSelecting={filter === 'Active'}
        textColor={'#000000'}
      />
      <CustomButton
        title="Completed"
        onPress={() => {
          setFilter('Completed');
        }}
        isSelecting={filter === 'Completed'}
        textColor={'#000000'}
      />
    </View>
  );
};

export default FilterBar;
