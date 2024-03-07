import {View, Text, FlatList, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Page from '../../components/Page';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Cart.styles';
import CartItemCard from '../../components/Cards/CartItemCard';
import {decrementCount, incrementCount} from '../../redux/features/common';
import CustomButton from '../../components/CustomButton';

const Cart = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.common);

  const [uniqueCartItems, setUniqueCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState([]);

  useEffect(() => {
    prepareItemsForCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  useEffect(() => {
    subTotalCalculator();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueCartItems]);

  const prepareItemsForCart = () => {
    let tempResult = {};
    for (let {
      brand,
      model,
      id,
      price,
      createdAt,
      name,
      description,
      image,
    } of cartItems) {
      tempResult[id] = {
        createdAt,
        name,
        image,
        id,
        brand,
        price,
        model,
        description,
        count: tempResult[id] ? tempResult[id].count + 1 : 1,
      };
    }
    let result = Object.values(tempResult);
    setUniqueCartItems(result);
  };

  const handleItemNumberChange = element => {
    const {item, type} = element;
    if (type === 'plus') {
      dispatch(incrementCount(item));
      return;
    }
    dispatch(decrementCount(item));
  };

  const subTotalCalculator = () => {
    const sum = uniqueCartItems.reduce(
      (total, element) => total + element.price * element.count,
      0,
    );
    setSubTotal(sum);
  };

  return (
    <Page title={'Cart'}>
      <FlatList
        data={uniqueCartItems}
        renderItem={({item}) => {
          return (
            <CartItemCard
              item={item}
              onItemNumberChange={handleItemNumberChange}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.subTotal}>{`${subTotal} ₺`}</Text>
        </View>
        <CustomButton
          title="Complete"
          style={styles.cartButton}
          onPress={() => Alert.alert('Shopping Completed')}
        />
      </View>
    </Page>
  );
};

export default Cart;
