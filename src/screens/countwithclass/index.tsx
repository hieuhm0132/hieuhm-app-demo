import React from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../../component/CustomButton';

type MyState = {
  count: number;
};

class CountWithClass extends React.Component<MyState> {
  state: MyState = {
    count: 0,
  };

  render() {
    return (
      <View>
        <Text>count: {this.state.count} </Text>
        <CustomButton
          title={'Increase'}
          green
          onPress={() => this.setState({count: this.state.count + 1})}
        />
        <CustomButton
          title={'Decrease'}
          red
          onPress={() => this.setState({count: this.state.count - 1})}
        />
      </View>
    );
  }
}

export default CountWithClass;
