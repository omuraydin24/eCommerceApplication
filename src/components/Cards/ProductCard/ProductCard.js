import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './ProductCard.styles';
import CustomButton from '../../CustomButton';

const ProductCard = ({
  item,
  onAddToCartPress,
  onPressDetail,
  onFavoritePress,
  favoriteProducts,
}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => onPressDetail(item)}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.images.slice(-1)[0]}} />
        <TouchableOpacity
          style={styles.favIconContainer}
          onPress={() => onFavoritePress(item)}>
          {favoriteProducts.find(favItem => favItem.id === item.id) ? (
            <Image
              style={styles.favIcon}
              source={require('../../../assets/Images/Star_1.png')}
            />
          ) : (
            <Image
              style={styles.favIcon}
              source={require('../../../assets/Images/Star_2.png')}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text>{item.price} ₺</Text>
        <Text numberOfLines={2} style={styles.brandName}>
          {item.brand} - {item.title}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={3}>{item.description}</Text>
      </View>
      <CustomButton
        title="Add to Cart"
        style={styles.cartButton}
        onPress={() => onAddToCartPress(item)}
      />
    </TouchableOpacity>
  );
};

export default ProductCard;
