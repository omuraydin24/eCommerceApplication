import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import styles from './CartItemCard.styles';

const CartItemCard = ({item, onItemNumberChange}) => {
  if (item.count === 0) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.productNames}>{`${item.brand} ${item.model}`}</Text>
        <Text style={styles.price}>{`${item.price * item.count} ₺`}</Text>
      </View>
      <View style={styles.itemCountChangerContainer}>
        <TouchableOpacity
          style={styles.countChangerButtonContainer}
          onPress={() => onItemNumberChange({item, type: 'minus'})}>
          <Text style={styles.countChangerText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={`${item.count}`}
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.countChangerButtonContainer}
          onPress={() => onItemNumberChange({item, type: 'plus'})}>
          <Text style={styles.countChangerText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemCard;
