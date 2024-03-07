import React from 'react';
import {Image, TextInput, View} from 'react-native';
import styles from './SearchBox.styles';
import {colors} from '../styles';

const SearchBox = ({setSearchText, placeholder, icon, search}) => {
  let timeoutId = 0;
  function handleSearch(val) {
    setSearchText(val);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      search(val);
    }, 700);
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <TextInput
          onChangeText={val => handleSearch(val)}
          placeholder={placeholder}
          placeholderTextColor={colors.secondaryText}
          style={styles.searchBox}
          autoCorrect={false}
        />
        {icon && (
          <View style={styles.iconContainer}>
            <Image
              style={styles.favIcon}
              source={require('../../assets/Images/Search.png')}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchBox;
