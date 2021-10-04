import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import RenderItem from '../../component/TodoList/RenderItem';
import TopBar from '../../component/TodoList/TopBar';
import FilterBar from '../../component/TodoList/FilterBar';
import TodoInput from '../../component/TodoList/TodoInput';

const TodoList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.todoReducer);
  const [filter, setFilter] = useState('All');
  return (
    <View style={styles.container}>
      <TopBar dispatch={dispatch} data={data} />
      <View>
        <TodoInput dispatch={dispatch} />
        <FlatList
          data={
            filter === 'All'
              ? data.all
              : filter === 'Active'
              ? data.active
              : data.complete
          }
          renderItem={({item}) => <RenderItem item={item} />}
        />
        <FilterBar filter={filter} setFilter={setFilter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
  },
});

export default TodoList;
