import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import getBreeds from '../services/HttpService';
import {styles} from '../styles/CatListStyles';

type ItemProps = {
  item: any;
  onPress: any;
  style: any;
};

type ListProps = {
  navigation: any;
};

type RenderItemProps = {
  item: any;
};

const Item = ({item, onPress, style}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

const CatList = ({navigation}: ListProps) => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    getBreeds().then((res: any) => setData(res));
  }, []);
  const _onPressButton = (breed: string) => {
    let arr = data.filter((cat: {name: string}) => cat.name === breed);
    try {
      navigation.navigate('Description', {
        params: [breed, arr],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}: RenderItemProps) => {
    const backgroundColor = item.id === selectedId ? '#e6f2f5' : '#e1e5e6';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          _onPressButton(item.name);
        }}
        style={{backgroundColor}}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
export default CatList;
