import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/CatListStyles';

type Props = {
  navigation: any;
  route: any;
  info: any;
};
const CatList = ({info, navigation}: Props) => {
  const [selectedId, setSelectedId] = useState(null);
  const _onPressButton = (breed: string) => {
    let arr = info.filter((cat: {name: string}) => cat.name === breed);
    try {
      navigation.navigate('Description', {
        params: [breed, arr],
      });
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedId(item.id);
          _onPressButton(item.name);
        }}
        style={[styles.item]}>
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={info}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};
export default CatList;
