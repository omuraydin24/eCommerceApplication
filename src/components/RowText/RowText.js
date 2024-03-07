import React from 'react';
import {Text, View} from 'react-native';
import styles from './RowText.styles';

const RowText = ({label, space}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      </View>
      {space && <View style={styles.space} />}
      <View style={styles.space} />
    </>
  );
};

export default RowText;
