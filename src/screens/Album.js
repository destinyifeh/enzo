import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';
import Nav from '../components/Nav';
import {PhotoCollection, PhotoCollection2} from '../components/PhotoCollection';
export default function Album(props) {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../assets/images/enzo.jpg')}
        style={{height: 100}}
        imageStyle={{opacity: 1}}>
        <Nav props={props} />
      </ImageBackground>

      <PhotoCollection />
      <PhotoCollection2 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
