import React, {useRef, useState, useEffect} from 'react';
import Carousel, {
  ParallaxImage,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ParallaxImageProperties,
} from 'react-native-snap-carousel';
import {View, Text, Dimensions} from 'react-native';
import {getImages} from '../services/HttpService';
import {styles} from '../styles/ImageStyles';

export const {width: screenWidth} = Dimensions.get('window');

type Props = {
  breedName: string;
};
const Images = ({breedName}: Props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    getImages(breedName).then((res: any) => setEntries(res));
  }, [breedName]);

  const _renderItem = (
    {item}: any,
    parallaxProps: JSX.IntrinsicAttributes &
      JSX.IntrinsicClassAttributes<ParallaxImage> &
      Readonly<ParallaxImageProperties> &
      Readonly<{children?: React.ReactNode}>,
  ) => (
    <View style={styles.item}>
      <ParallaxImage
        //@ts-ignore
        source={{uri: item.url}}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text numberOfLines={2}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        //@ts-ignore
        renderItem={_renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default Images;
