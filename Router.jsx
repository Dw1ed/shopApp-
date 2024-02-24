import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/products/product';
import Detail from './pages/Detail/Detail';
const Stack = createNativeStackNavigator();
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsScreen" component={Products} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
