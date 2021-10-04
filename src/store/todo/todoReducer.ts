import {
  TodoProps,
  TodoListState,
  TodoActions,
  TodoActionType,
} from './todoTypes';

const initialData: TodoProps = {
  id: '46537586876',
  todo: 'Coding',
  complete: false,
};

const initialState: TodoListState = {
  all: [initialData],
  active: [initialData],
  complete: [],
};

const todo = (
  state: TodoListState = initialState,
  action: TodoActions,
): TodoListState => {
  switch (action.type) {
    case TodoActionType.ADD:
      return {
        ...state,
        all: [...state.all, action.payload],
        active: [...state.active, action.payload],
      };
    case TodoActionType.UPDATE:
      const temp0 = state.all.map(x =>
        x.id === action.id ? {...x, todo: action.todo} : x,
      );
      return {
        all: temp0,
        active: temp0.filter(x => !x.complete),
        complete: temp0.filter(x => x.complete),
      };
    case TodoActionType.DELETE:
      return {
        all: state.all.filter(x => x.id !== action.payload),
        active: state.active.filter(x => x.id !== action.payload),
        complete: state.complete.filter(x => x.id !== action.payload),
      };
    case TodoActionType.CHANGECOMPLETE:
      const temp1 = state.all.map(x =>
        x.id === action.payload ? {...x, complete: !x.complete} : x,
      );
      return {
        all: temp1,
        active: temp1.filter(x => !x.complete),
        complete: temp1.filter(x => x.complete),
      };
    case TodoActionType.COMPLETEALL:
      const checkedAll = state.all.every(x => x.complete);
      const temp2 = state.all.map(x => ({
        ...x,
        complete: !checkedAll,
      }));
      return {
        all: temp2,
        active: temp2.filter(x => !x.complete),
        complete: temp2.filter(x => x.complete),
      };
    case TodoActionType.CLEARCOMPLETED:
      return {
        ...state,
        all: state.all.filter(x => x.complete === false),
        complete: state.complete.filter(x => x.complete === false),
      };
    default:
      return state;
  }
};

export default todo;
