/* eslint-disable react/no-unstable-nested-components */
import {View, FlatList, Text, Alert, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';

import SearchBox from '../../components/SearchBox';
import styles from './ProductList.styles';
import getMockDataThunk from '../../redux/features/common/thunks/getMockDataThunk';
import {useDispatch, useSelector} from 'react-redux';
import {
  setCartItems,
  setFavoriteProducts,
  setProductLimitReached,
} from '../../redux/features/common';
import ProductCard from '../../components/Cards/ProductCard';
import {useNavigation} from '@react-navigation/native';
import {objectFunctionRunner, turkishToUpper} from '../../utils/utils';
import Page from '../../components/Page';
import {colors} from '../../components/styles';

const ProductList = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const {mockData, cartItems, favoriteProducts, productLimitReached} =
    useSelector(state => state.common);

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(mockData ? mockData : []);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    handleSearch(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, mockData]);

  const getData = async () => {
    if (productLimitReached) {
      return;
    }
    setDataLoading(true);
    await dispatch(getMockDataThunk({page})).unwrap();
    setDataLoading(false);
  };

  const handleSearch = async val => {
    const searchVal = turkishToUpper(val);
    const result = {data: mockData};
    const object = {
      searchRule: () => {
        if (!searchVal) {
          return;
        }
        const filteredProducts = mockData.filter(element => {
          const nameVal = element.brand ? turkishToUpper(element.brand) : '';
          const nameVal2 = element.title ? turkishToUpper(element.title) : '';
          return nameVal.includes(searchVal) || nameVal2.includes(searchVal);
        });
        result.data = filteredProducts;
      },
    };
    await objectFunctionRunner(object);
    setFilteredData(result.data);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await dispatch(getMockDataThunk({page})).unwrap();
    dispatch(setProductLimitReached(false));
    setRefreshing(false);
  };

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

  const handleFavoritePress = async item => {
    await dispatch(setFavoriteProducts(item));
  };

  const handlePressDetail = item => {
    navigation.navigate('ProductDetail', {item});
  };

  return (
    <Page title={'Product List'}>
      <View>
        <View style={styles.topContainer}>
          <View style={styles.searchContainer}>
            <SearchBox
              setSearchText={setSearchText}
              search={handleSearch}
              placeholder="Search"
              icon
            />
          </View>
        </View>
        <FlatList
          style={styles.flatList}
          data={filteredData}
          onEndReachedThreshold={0.4}
          onEndReached={() => setPage(page + 1)}
          contentContainerStyle={styles.flatListContent}
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
          onRefresh={handleRefresh}
          refreshing={refreshing}
          ListFooterComponent={() =>
            dataLoading ? (
              <ActivityIndicator
                style={styles.activityIndicator}
                size="large"
                color={colors.theme}
              />
            ) : productLimitReached ? (
              <View style={styles.productLimitReached}>
                <Text>End of the Products</Text>
              </View>
            ) : null
          }
        />
      </View>
    </Page>
  );
};

export default ProductList;
