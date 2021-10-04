import {Action} from 'redux';
import {
  QuoteState,
  QuoteProps,
  QuoteActions,
  QuoteActionType,
} from './quoteTypes';

const initialData: QuoteProps = {
  _id: 'h45ih87y2h4ih',
  author: 'Hoàng Minh Hiếu',
  quote: '................................................................',
};

const initialState: QuoteState = {
  data: initialData,
  loading: false,
};

const quote = (
  state: QuoteState = initialState,
  action: QuoteActions,
): QuoteState => {
  switch (action.type) {
    case QuoteActionType.GETRANDOMQUOTE:
      return {...state, loading: true};
    case QuoteActionType.GETQUOTESUCCESS:
      return {...state, loading: false, data: action.payload};
    default:
      return state;
  }
};

export default quote;
