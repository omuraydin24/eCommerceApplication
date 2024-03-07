import {View, FlatList, Image, Dimensions, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './Carousel.styles';
import {colors} from '../styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const Carousel = ({data}) => {
  const flatListRef = useRef(null);
  const [slide, setSlide] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const onPrevious = () => {
    if (slide === 0) {
      return;
    }
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: slide - 1});
    }
  };

  const onNext = () => {
    if (slide === data.length) {
      return;
    }
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({index: slide + 1});
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        keyExtractor={(item, index) => {
          return item;
        }}
        data={data}
        onScroll={scrollData => {
          const offset = scrollData.nativeEvent.contentOffset.x / width;
          const hasDecimal = offset - Math.floor(offset) !== 0;
          if (!hasDecimal) {
            setSlide(offset);
            setPrevDisabled(offset === 0);
            setNextDisabled(offset === data.length - 1);
          }
        }}
        // keyExtractor={}
        scrollEventThrottle={0}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
      <View style={styles.carouselPointerContainer}>
        <Pressable
          onPress={onPrevious}
          disabled={prevDisabled}
          style={({pressed}) => [
            {
              opacity: pressed || prevDisabled ? 0.5 : 1,
              position: 'absolute',
              top: -115,
              left: 10,
            },
          ]}>
          <MaterialCommunityIcons
            name="menu-left"
            size={40}
            color={colors.primaryText}
          />
        </Pressable>
        {data.map((item, index) => {
          return (
            <View style={styles.imageBullets} key={item}>
              <MaterialCommunityIcons
                name="circle-small"
                size={35}
                color={slide === index ? colors.primaryText : colors.border}
              />
            </View>
          );
        })}
        <Pressable
          onPress={onNext}
          disabled={nextDisabled}
          style={({pressed}) => [
            {
              opacity: pressed || nextDisabled ? 0.5 : 1,
              position: 'absolute',
              top: -115,
              right: 10,
            },
          ]}>
          <MaterialCommunityIcons
            name="menu-right"
            size={40}
            color={colors.primaryText}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Carousel;
