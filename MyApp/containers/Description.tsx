import React from 'react';
import {Linking, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Star from 'react-native-star-view';
import Images from '../components/Images';
import {styles} from '../styles/DescriptionStyles';

type Props = {
  route: any;
};
const Description = ({route}: Props) => {
  const info = route.params.params[1][0];
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{info.name}</Text>
      <Images breedName={info.id} />
      <Text style={styles.text}>{info.description}</Text>
      <Text style={styles.textBold}>{info.temperament}</Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(info.wikipedia_url)}>
        Wikipedia
      </Text>
      <Text style={styles.text}>Affection Level</Text>
      <Star score={info.affection_level} style={styles.starStyle} />
      <Text style={styles.text}>Adaptability</Text>
      <Star score={info.adaptability} style={styles.starStyle} />
      <Text style={styles.text}>Child Friendly</Text>
      <Star score={info.child_friendly} style={styles.starStyle} />
      <Text style={styles.text}>Dog Friendly</Text>
      <Star score={info.dog_friendly} style={styles.starStyle} />
      <Text style={styles.text}>Energy Level</Text>
      <Star score={info.energy_level} style={styles.starStyle} />
      <Text style={styles.text}>Health Issues</Text>
      <Star score={info.health_issues} style={styles.starStyle} />
      <Text style={styles.text}>Intelligence</Text>
      <Star score={info.intelligence} style={styles.starStyle} />
      <Text style={styles.text}>Shedding Level</Text>
      <Star score={info.shedding_level} style={styles.starStyle} />
      <Text style={styles.text}>Grooming</Text>
      <Star score={info.grooming} style={styles.starStyle} />
      <Text style={styles.text}>Social Needs</Text>
      <Star score={info.social_needs} style={styles.starStyle} />
      <Text style={styles.text}>Stranger Friendly</Text>
      <Star score={info.stranger_friendly} style={styles.starStyle} />
      <Text style={styles.text}>Vocalization</Text>
      <Star score={info.intelligence} style={styles.starStyle} />
      <Text style={styles.text}>Shedding Level</Text>
      <Star score={info.vocalisation} style={styles.starStyle} />
    </ScrollView>
  );
};

export default Description;
