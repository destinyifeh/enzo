import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../components/Footer';
export default function LandingScreen(props) {
  return (
    <ImageBackground
      imageStyle={{opacity: 0.7, backgroundColor: 'green'}}
      source={require('../assets/images/bg4.jpg')}
      resizeMode="cover"
      style={styles.container}>
      {/* <Navigation/> */}

      <View style={styles.container2}>
        <Text style={styles.text}>Enzo Fernandez</Text>

        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              opacity: 0.8,
              backgroundColor: 'blue',
              padding: 8,
              borderRadius: 15,
              fontFamily: 'Roboto-Bold',
              marginTop: 20,
            }}>
            Explore more...
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  container2: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Roboto-BoldItalic',
  },
});
