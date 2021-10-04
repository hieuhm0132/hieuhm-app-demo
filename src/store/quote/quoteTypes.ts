export interface QuoteProps {
  _id: string;
  quote: string;
  author: string;
}

export interface QuoteState {
  data: QuoteProps;
  loading: boolean;
}

export enum QuoteActionType {
  GETRANDOMQUOTE = 'GETRANDOMQUOTE',
  GETQUOTESUCCESS = 'GETQUOTESUCCESS',
}

export interface GetAction {
  type: QuoteActionType.GETRANDOMQUOTE;
}

export interface SuccessAction {
  type: QuoteActionType.GETQUOTESUCCESS;
  payload: QuoteProps;
}

export type QuoteActions = GetAction | SuccessAction;
