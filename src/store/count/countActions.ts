import {
  CounterActionType,
  IncrementAction,
  DecrementAction,
} from './countTypes';

export const incrementCounter = (): IncrementAction => ({
  type: CounterActionType.INCREMENT,
});

export const decrementCounter = (): DecrementAction => ({
  type: CounterActionType.DECREMENT,
});
