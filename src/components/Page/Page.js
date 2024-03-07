import {SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Page.styles';
import Header from '../Header';

const Page = ({children, title, leftButton}) => {
  return (
    <>
      <Header title={title} leftButton={leftButton} />
      <SafeAreaView style={styles.body}>{children}</SafeAreaView>
      <SafeAreaView style={styles.safeArea} />
    </>
  );
};

export default Page;
