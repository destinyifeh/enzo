import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import Nav from '../components/Nav';
export const Home = props => {
  return (
    <ImageBackground
      imageStyle={{opacity: 0.8}}
      style={styles.container}
      source={require('../assets/images/bg8.gif')}
      resizeMode="cover">
      <Nav props={props} />
      <Text
        style={[styles.text, {textAlign: 'center', fontSize: 20, padding: 10}]}>
        About Enzo Fernandez
      </Text>
      <Text
        style={{
          color: 'white',
          lineHeight: 25,
          padding: 10,
          fontSize: 16,
          fontFamily: 'Roboto-Regular',
        }}>
        Enzo Jeremías Fernández is an Argentine professional footballer who
        plays as a central midfielder for Premier League club Chelsea and the
        Argentina national team. He played a pivotal role in helping Argentina
        win their third FIFA World Cup, also winning the tournament's Young
        Player Award.
      </Text>
      <Text
        style={[
          styles.text,
          {lineHeight: 20, fontWeight: 'bold', padding: 10, fontSize: 18},
        ]}>
        Born: 17 January 2001 (age 22 years), San Martín, Argentina
      </Text>
      <Text
        style={[
          styles.text,
          {lineHeight: 20, fontWeight: 'bold', padding: 10, fontSize: 18},
        ]}>
        Nationality: Argentine
      </Text>
      <Text
        style={[
          styles.text,
          {lineHeight: 20, fontWeight: 'bold', padding: 10, fontSize: 18},
        ]}>
        Weight: 76 kg
      </Text>
      <Text
        style={[
          styles.text,
          {lineHeight: 20, fontWeight: 'bold', padding: 10, fontSize: 18},
        ]}>
        Current teams: Argentina national football team (#24 / Midfielder),
        Chelsea F.C. (#5 / Midfielder)
      </Text>
      <Text
        style={[
          styles.text,
          {lineHeight: 20, fontWeight: 'bold', padding: 10, fontSize: 18},
        ]}>
        Height: 1.78 m
      </Text>
    </ImageBackground>
  );
};

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
    fontWeight: 'bold',
  },
});
