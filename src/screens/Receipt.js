import React from 'react';
import {StyleSheet, View} from 'react-native';
import Nav from '../components/Nav';
import {PaymentReceipt} from '../features/items/ItemReceipt';
import {previousRoute} from '../utils/constant';
import {saveData} from '../utils/helper';
export const Receipt = props => {
  React.useEffect(() => {
    console.log(props, 'receipt props');
    saveData(previousRoute, props.route.name);
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'grey'}}>
      <Nav props={props} />

      <View style={styles.mainView}>
        <View>
          <PaymentReceipt />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    justifyContent: 'center',
  },
});
