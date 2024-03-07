import React, {useMemo} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export default function CustomButton({
  title,
  type = 'default',
  loading,
  onPress,
  disable,
  style,
}) {
  const handlePress = () => {
    onPress && onPress();
  };

  const styleType = useMemo(
    () => (disable ? 'disabled' : type),
    [disable, type],
  );

  return (
    <TouchableOpacity
      testID="button-view-container"
      style={[style, styles[styleType].container]}
      disabled={disable || loading}
      onPress={handlePress}>
      {title ? (
        <Text testID="button-title" style={styles[styleType].title}>
          {title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}
