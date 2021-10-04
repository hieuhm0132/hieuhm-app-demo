export interface TodoProps {
  id: string;
  todo: string;
  complete: boolean;
}

export interface TodoListState {
  all: TodoProps[];
  active: TodoProps[];
  complete: TodoProps[];
}

export enum TodoActionType {
  ADD = 'ADD',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  CHANGECOMPLETE = 'CHANGECOMPLETE',
  COMPLETEALL = 'COMPLETEALL',
  CLEARCOMPLETED = 'CLEARCOMPLETED',
  SHOWALL = 'SHOWALL',
  SHOWACTIVE = 'SHOWACTIVE',
  SHOWCOMPLETE = 'SHOWCOMPLETE',
}

export interface Add {
  type: TodoActionType.ADD;
  payload: TodoProps;
}

export interface Update {
  type: TodoActionType.UPDATE;
  id: string;
  todo: string;
}

export interface Delete {
  type: TodoActionType.DELETE;
  payload: string;
}

export interface ChangeComplete {
  type: TodoActionType.CHANGECOMPLETE;
  payload: string;
}

export interface CompleteAll {
  type: TodoActionType.COMPLETEALL;
}

export interface ClearCompleted {
  type: TodoActionType.CLEARCOMPLETED;
}

export interface ShowAll {
  type: TodoActionType.SHOWALL;
}

export interface ShowActive {
  type: TodoActionType.SHOWACTIVE;
}

export interface ShowComplete {
  type: TodoActionType.SHOWCOMPLETE;
}

export type TodoActions =
  | Add
  | Update
  | Delete
  | ChangeComplete
  | CompleteAll
  | ClearCompleted
  | ShowAll
  | ShowActive
  | ShowComplete;
