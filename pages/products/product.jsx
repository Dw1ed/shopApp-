import React, {useEffect, useState} from 'react';

import {SafeAreaView, View, FlatList, Text} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(Config.API_URL);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  function renderProduct({item}) {
    return <Text>{item.title}</Text>;
  }
  return (
    <SafeAreaView>
      <View>
        <FlatList data={data} renderItem={renderProduct} />
      </View>
    </SafeAreaView>
  );
};
export default Products;
