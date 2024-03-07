/* eslint-disable react/no-unstable-nested-components */
import {Platform, StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../components/styles';
import Cart from '../screens/Cart';
import ProductStack from './ProductStack';
import Favorites from '../screens/Favorites';
import {useSelector} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Navigator = () => {
  const Tab = createBottomTabNavigator();
  const {cartItemCount} = useSelector(state => state.common);
  return (
    <NavigationContainer>
      <StatusBar animated={true} barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.theme,
          tabBarInactiveTintColor: colors.primaryText,
          tabBarStyle: {height: Platform.OS === 'ios' ? 80 : 70},
        }}>
        <Tab.Screen
          name="ProductStack"
          component={ProductStack}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={color}
                  size={27}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <MaterialCommunityIcons
                  name="basket-outline"
                  color={color}
                  size={27}
                />
              );
            },
            tabBarBadge: cartItemCount,
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return (
                <MaterialCommunityIcons
                  name="star-outline"
                  color={color}
                  size={27}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
