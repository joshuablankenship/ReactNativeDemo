import React, {useState} from 'react';
import {Linking, StatusBar, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CatInfo from '../assets/CatInfo';
import Star from 'react-native-star-view';
import Images from '../components/Images';
const Description = props => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{CatInfo[0].name}</Text>
      <Images breedId={CatInfo[0].id} />
      <Text style={styles.text}>{CatInfo[0].description}</Text>
      <Text style={styles.textBold}>{CatInfo[0].temperament}</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(CatInfo[0].wikipedia_url)}>
        Wikipedia
      </Text>
      <Text style={styles.text}>Affection Level</Text>
      <Star score={CatInfo[0].affection_level} style={styles.starStyle} />
      <Text style={styles.text}>Adaptability</Text>
      <Star score={CatInfo[0].adaptability} style={styles.starStyle} />
      <Text style={styles.text}>Child Friendly</Text>
      <Star score={CatInfo[0].child_friendly} style={styles.starStyle} />
      <Text style={styles.text}>Dog Friendly</Text>
      <Star score={CatInfo[0].dog_friendly} style={styles.starStyle} />
      <Text style={styles.text}>Energy Level</Text>
      <Star score={CatInfo[0].energy_level} style={styles.starStyle} />
      <Text style={styles.text}>Health Issues</Text>
      <Star score={CatInfo[0].health_issues} style={styles.starStyle} />
      <Text style={styles.text}>Intelligence</Text>
      <Star score={CatInfo[0].intelligence} style={styles.starStyle} />
      <Text style={styles.text}>Shedding Level</Text>
      <Star score={CatInfo[0].shedding_level} style={styles.starStyle} />
      <Text style={styles.text}>Grooming</Text>
      <Star score={CatInfo[0].grooming} style={styles.starStyle} />
      <Text style={styles.text}>Social Needs</Text>
      <Star score={CatInfo[0].social_needs} style={styles.starStyle} />
      <Text style={styles.text}>Stranger Friendly</Text>
      <Star score={CatInfo[0].stranger_friendly} style={styles.starStyle} />
      <Text style={styles.text}>Vocalization</Text>
      <Star score={CatInfo[0].intelligence} style={styles.starStyle} />
      <Text style={styles.text}>Shedding Level</Text>
      <Star score={CatInfo[0].vocalisation} style={styles.starStyle} />
    </ScrollView>
  );
};

export default Description;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  link: {
    marginHorizontal: 16,
    marginTop: 5,
    color: 'blue',
  },
  text: {
    marginHorizontal: 16,
    marginTop: 5,
  },
  textBold: {
    marginHorizontal: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
  starStyle: {
    width: 100,
    height: 20,
    marginBottom: 5,
    marginLeft: 13,
    marginTop: 5,
  },
});
