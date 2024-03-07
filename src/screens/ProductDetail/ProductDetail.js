import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
import styles from './ProductDetail.styles';
import CustomButton from '../../components/CustomButton';
import {setCartItems, setFavoriteProducts} from '../../redux/features/common';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Page from '../../components/Page';
import Carousel from '../../components/Carousel';

const ProductDetail = ({route}) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {cartItems, favoriteProducts} = useSelector(state => state.common);

  const handleAddToCartPress = async () => {
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

  const handleFavoritePress = async () => {
    await dispatch(setFavoriteProducts(item));
  };

  return (
    <Page title={item.brand} leftButton>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Carousel data={item.images} />
          <TouchableOpacity
            onPress={handleFavoritePress}
            style={styles.favIconContainer}>
            {favoriteProducts.find(favItem => favItem.id === item.id) ? (
              <Image
                style={styles.favIcon}
                source={require('../../assets/Images/Star_1.png')}
              />
            ) : (
              <Image
                style={styles.favIcon}
                source={require('../../assets/Images/Star_2.png')}
              />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.brandText}>
          {item.brand} - {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.priceTagContainer}>
          <Text style={styles.priceText}>Price:</Text>
          <Text style={styles.priceTag}>{item.price} ₺</Text>
        </View>
        <CustomButton
          title="Add to Cart"
          style={styles.cartButton}
          onPress={handleAddToCartPress}
        />
      </View>
    </Page>
  );
};

export default ProductDetail;
