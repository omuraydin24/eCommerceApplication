import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Option.styles';
import Check from '../Check';

const Option = ({optionKey, text, onChange, status, disabled}) => {
  const [selectedStatus, setSelectedStatus] = useState(status);

  useEffect(() => {
    setSelectedStatus(status);
  }, [status, selectedStatus]);

  const handleChange = () => {
    setSelectedStatus(!selectedStatus);
    onChange(!selectedStatus);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={disabled ? 1.0 : 0.2}
        onPress={!disabled ? handleChange : undefined}>
        <View style={styles.textContainer} key={optionKey}>
          <Text styles={styles.title}>{text}</Text>
        </View>
        <View style={styles.checkContainer}>
          <Check
            noEvent
            value={selectedStatus}
            shape="circle"
            size="xs"
            onChange={handleChange}
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Option;
