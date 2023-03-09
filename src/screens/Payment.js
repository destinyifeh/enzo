import React from 'react';
import {View} from 'react-native';
import Nav from '../components/Nav';
import ItemPayment from '../features/items/ItemPayment';

export const Payment = () => {
  return (
    <View>
      <Nav />
      <ItemPayment />
    </View>
  );
};
