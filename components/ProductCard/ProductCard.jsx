import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({product}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: product}} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price} TL</Text>
      </View>
    </View>
  );
};
export default ProductCard;
