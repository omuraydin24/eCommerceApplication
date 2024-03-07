import {Pressable, SafeAreaView, Text, View} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Header.styles';

const Header = ({leftButton, title}) => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonsContainer}>
          {leftButton && (
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.leftButton}>
              <MaterialCommunityIcons name="chevron-left" size={40} />
            </Pressable>
          )}
        </View>
        <SafeAreaView style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </SafeAreaView>
      </SafeAreaView>
    </>
  );
};

export default Header;
