import {
  GetAction,
  SuccessAction,
  QuoteActionType,
  QuoteProps,
} from './quoteTypes';

export const getQuote = (): GetAction => ({
  type: QuoteActionType.GETRANDOMQUOTE,
});

export const successQuote = (quote: QuoteProps): SuccessAction => ({
  type: QuoteActionType.GETQUOTESUCCESS,
  payload: quote,
});
