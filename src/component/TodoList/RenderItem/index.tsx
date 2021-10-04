import CustomInput from '../../CustomInput';
import {Checkbox} from 'react-native-paper';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  changeComplete,
  deleteTodo,
  updateTodo,
} from '../../../store/todo/todoActions';
import color from '../../../assets/theme/color';
import {TodoProps} from '../../../store/todo/todoTypes';

interface RenderItemProps {
  item: TodoProps;
}

const RenderItem: React.FC<RenderItemProps> = ({item}) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(item.todo);
  return (
    <CustomInput
      style={{marginBottom: 2}}
      iconLeft={
        <Checkbox
          status={item.complete ? 'checked' : 'unchecked'}
          color={color.secondary}
          onPress={() => {
            dispatch(changeComplete(item.id));
          }}
        />
      }
      iconRight={
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteTodo(item.id));
          }}>
          <FontAwesome5
            style={{paddingHorizontal: 12}}
            name={'times'}
            size={16}
          />
        </TouchableOpacity>
      }
      onChangeText={(value: string) => {
        setTodo(value);
      }}
      onEndEditing={() => {
        dispatch(updateTodo(item.id, todo));
      }}
      value={todo}
    />
  );
};

export default RenderItem;
