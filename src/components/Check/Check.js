import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './Check.styles';
import {colors} from '../styles';

const Check = ({icon, value, onChange}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: value ? colors.theme : colors.neutral},
      ]}
      onPress={() => onChange(!value)}>
      {icon && <View style={styles.icon} />}
    </TouchableOpacity>
  );
};

export default Check;
