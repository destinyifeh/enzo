import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {previousRoute} from '../utils/constant';
import {deleteData, getData} from '../utils/helper';
const Navigation = ({props}) => {
  async function goToStore() {
    let previous = await getData(previousRoute);
    console.log(previous, 'prev');
    if (previous === 'Receipt') {
      props.navigation.reset({index: 0, routes: [{name: 'Store'}]});
      await deleteData(previousRoute);
    } else {
      props.navigation.navigate('Store');
    }
  }
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity onPress={() => props.navigation.navigate('Landing')}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text
          style={[
            styles.text,
            props.route?.name === 'Home'
              ? {borderBottomWidth: 1, borderBottomColor: 'white'}
              : '',
          ]}>
          Player
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Album')}>
        <Text
          style={[
            styles.text,
            props.route?.name === 'Album'
              ? {borderBottomWidth: 1, borderBottomColor: 'white'}
              : '',
          ]}>
          Album
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Fans')}>
        <Text
          style={[
            styles.text,
            props.route?.name === 'Fans'
              ? {borderBottomWidth: 1, borderBottomColor: 'white'}
              : '',
          ]}>
          Fans
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToStore()}>
        <Text
          style={[
            styles.text,
            props.route?.name === 'Store'
              ? {borderBottomWidth: 1, borderBottomColor: 'white'}
              : '',
          ]}>
          Store
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: 'Roboto-Bold',
  },
});

export default Navigation;
