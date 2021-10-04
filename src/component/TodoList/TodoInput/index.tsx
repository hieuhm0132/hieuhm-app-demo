import React, {useState, Dispatch} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from '../../TodoList/TodoInput/styles';
import CustomInput from '../../CustomInput';
import {completeAll, addTodo} from '../../../store/todo/todoActions';
import {useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface TodoInputProps {
  dispatch: Dispatch<any>;
}

const TodoInput: React.FC<TodoInputProps> = ({dispatch}) => {
  const [todo, setTodo] = useState('');

  return (
    <CustomInput
      style={styles.addInput}
      placeholder={'What needs to be done?'}
      iconLeft={
        <TouchableOpacity
          onPress={() => {
            dispatch(completeAll());
          }}>
          <FontAwesome5
            style={{paddingHorizontal: 10}}
            name={'chevron-down'}
            size={18}
          />
        </TouchableOpacity>
      }
      iconRight={
        <TouchableOpacity
          onPress={() => {
            setTodo('');
            dispatch(
              addTodo({
                id: Date.now().toString(),
                todo: todo,
                complete: false,
              }),
            );
          }}>
          <FontAwesome5
            style={{paddingHorizontal: 10}}
            name={'plus'}
            size={18}
          />
        </TouchableOpacity>
      }
      value={todo}
      onChangeText={(value: string) => {
        setTodo(value);
      }}
    />
  );
};

export default TodoInput;
