import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../../component/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/rootReducer';
import {getQuote, successQuote} from '../../store/quote/quoteActions';

const QuoteWithFetch = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => {
    return state.quoteReducer;
  });
  const getNewQuote = async () => {
    try {
      dispatch(getQuote());
      const response = await fetch(
        'https://hieuhm-app-call-me.herokuapp.com/quote/random',
      );
      const json = await response.json();
      dispatch(successQuote(json.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textbox}>
          <Text style={styles.quote}>{data.data.quote}</Text>
          <Text style={styles.author}>{data.data.author}</Text>
        </View>
        <View style={styles.button}>
          <CustomButton
            primary
            title="New Quote"
            disable={data.loading}
            loading={data.loading}
            onPress={() => getNewQuote()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quote: {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 32,
  },
  author: {
    marginTop: 5,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 47,
  },
  content: {
    paddingHorizontal: 15,
  },
  textbox: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: '10%',
    flex: 1,
  },
  button: {
    paddingHorizontal: '20%',
    flex: 1,
  },
});

export default QuoteWithFetch;
