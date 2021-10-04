import React, {Dispatch} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clearCompleted} from '../../../store/todo/todoActions';
import styles from '../../TodoList/TopBar/styles';
import CustomButton from '../../CustomButton';
import {RootState} from '../../../store/rootReducer';
import {TodoListState} from '../../../store/todo/todoTypes';
import {PersistPartial} from 'redux-persist/es/persistReducer';

interface TopBarProps {
  dispatch: Dispatch<any>;
  data: TodoListState & PersistPartial;
}

const TopBar: React.FC<TopBarProps> = ({dispatch, data}) => {
  return (
    <View style={styles.topbar}>
      <Text style={styles.itemCount}>{data.active.length} item left</Text>
      {data.complete.length > 0 && (
        <CustomButton
          style={styles.clearBtn}
          title="Clear Complete"
          onPress={() => {
            dispatch(clearCompleted());
          }}
          textColor={'#000000'}
        />
      )}
    </View>
  );
};

export default TopBar;
