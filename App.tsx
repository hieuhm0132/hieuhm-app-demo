import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  MAINMENU,
  COUNTWITHCLASS,
  COUNTWITHREDUX,
  COUNTWITHFUNCTION,
  QUOTEWITHFETCH,
  QUOTEWITHXML,
  TODOLIST,
} from './src/constants/routeNames';
import MainMenu from './src/screens/mainmenu';
import CountWithClass from './src/screens/countwithclass';
import CountWithRedux from './src/screens/countwithredux';
import CountWithFunction from './src/screens/countwithfunction';
import QuoteWithFetch from './src/screens/quotewithfetch';
import TodoList from './src/screens/todolist';
import QuoteWithXML from './src/screens/quotewithxml';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={MAINMENU} component={MainMenu} />
            <Stack.Screen name={COUNTWITHCLASS} component={CountWithClass} />
            <Stack.Screen
              name={COUNTWITHFUNCTION}
              component={CountWithFunction}
            />
            <Stack.Screen name={COUNTWITHREDUX} component={CountWithRedux} />
            <Stack.Screen name={QUOTEWITHFETCH} component={QuoteWithFetch} />
            <Stack.Screen name={QUOTEWITHXML} component={QuoteWithXML} />
            <Stack.Screen name={TODOLIST} component={TodoList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
