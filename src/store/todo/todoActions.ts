import {
  Add,
  TodoActionType,
  Delete,
  TodoProps,
  ChangeComplete,
  CompleteAll,
  ClearCompleted,
  ShowAll,
  ShowActive,
  ShowComplete,
  Update,
} from './todoTypes';

export const addTodo = (todo: TodoProps): Add => ({
  type: TodoActionType.ADD,
  payload: todo,
});

export const updateTodo = (id: string, todo: string): Update => ({
  type: TodoActionType.UPDATE,
  id,
  todo,
});

export const deleteTodo = (id: string): Delete => ({
  type: TodoActionType.DELETE,
  payload: id,
});

export const changeComplete = (id: string): ChangeComplete => ({
  type: TodoActionType.CHANGECOMPLETE,
  payload: id,
});

export const completeAll = (): CompleteAll => ({
  type: TodoActionType.COMPLETEALL,
});

export const clearCompleted = (): ClearCompleted => ({
  type: TodoActionType.CLEARCOMPLETED,
});

export const showAll = (): ShowAll => ({
  type: TodoActionType.SHOWALL,
});

export const showActive = (): ShowActive => ({
  type: TodoActionType.SHOWACTIVE,
});

export const showComplete = (): ShowComplete => ({
  type: TodoActionType.SHOWCOMPLETE,
});
