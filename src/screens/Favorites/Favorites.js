import {Text, FlatList, Alert} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styles from './Favorites.styles';
import ProductCard from '../../components/Cards/ProductCard';
import {setCartItems, setFavoriteProducts} from '../../redux/features/common';
import {useNavigation} from '@react-navigation/native';
import Page from '../../components/Page';

const Favorites = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {favoriteProducts, cartItems} = useSelector(state => state.common);

  const handleAddToCartPress = async item => {
    const cardData = [...cartItems, item];
    await dispatch(setCartItems(cardData));
    Alert.alert(
      'Success',
      `${item.brand} ${item.model} product added to the cart`,
      [
        {
          text: 'Go to Cart',
          onPress: () => navigation.navigate('Cart'),
          style: 'cancel',
        },
        {
          text: 'OK',
        },
      ],
    );
  };

  const handlePressDetail = item => {
    navigation.navigate('ProductStack', {
      screen: 'ProductDetail',
      params: {item},
    });
  };

  const handleFavoritePress = async item => {
    await dispatch(setFavoriteProducts(item));
  };
  if (favoriteProducts.length === 0) {
    return (
      <Page title={'Favorites'}>
        <Text>No Favorite Item Found</Text>
      </Page>
    );
  }
  return (
    <Page title={'Favorites'}>
      <FlatList
        data={favoriteProducts}
        numColumns={2}
        initialNumToRender={12}
        maxToRenderPerBatch={12}
        columnWrapperStyle={styles.row}
        renderItem={({item}) => {
          return (
            <ProductCard
              item={item}
              onAddToCartPress={handleAddToCartPress}
              onPressDetail={handlePressDetail}
              onFavoritePress={handleFavoritePress}
              favoriteProducts={favoriteProducts}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
    </Page>
  );
};

export default Favorites;
