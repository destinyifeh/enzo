import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Footer = () => {
  return (
    <View>
      <View style={styles.Footer}>
        <Text style={{color: 'white', fontFamily: 'Roboto-Regular'}}>
          Made with{' '}
        </Text>
        <FontAwesome name="heart" size={20} color="red" />
        <Text
          style={{color: 'white', marginLeft: 2, fontFamily: 'Roboto-Regular'}}>
          by dez
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Footer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default Footer;
