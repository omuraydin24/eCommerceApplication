import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductList from '../../screens/ProductList';
import ProductDetail from '../../screens/ProductDetail';

const ProductStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ProductStack;
