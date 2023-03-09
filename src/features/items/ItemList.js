import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {savePaymentDetail} from '../../utils/helper';
import ItemPayment from './ItemPayment';
export const ItemList = props => {
  const [show, setShow] = React.useState(true);

  const theItems = props.items?.map(item => item.price);

  const totalPrice = theItems.reduce((prev, cur) => prev + cur, 0);

  const handleRemove = name => {
    const newItem = props.items.filter(item => item.name !== name);
    props.setItems(newItem);
    savePaymentDetail('paymentDetails', newItem);
  };

  const handleCheckout = () => {
    const loader = props.loader;
    props.setLoader({...loader, cartLoader: true});
    setTimeout(() => {
      props.setLoader({...loader, cartLoader: false});
      setShow(false);
    }, 3000);
  };
  return (
    <View style={styles.body}>
      {show && props.loader?.cartLoader !== true ? (
        <>
          <Text style={{color: 'white', textAlign: 'center', marginBottom: 20}}>
            Your Cart Items
          </Text>
          {props.items?.length !== 0 ? (
            <>
              <View
                style={{
                  marginBottom: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  gap: 0,
                }}>
                <Text style={[styles.text, {marginLeft: 20, color: 'yellow'}]}>
                  Item Name
                </Text>
                <Text style={[styles.text, {marginLeft: 5, color: 'yellow'}]}>
                  Item Price
                </Text>
              </View>

              <FlatList
                contentContainerStyle={{}}
                data={props.items}
                keyExtractor={(item, idx) => item.name + idx}
                renderItem={({item}) => {
                  return (
                    <View style={styles.item} key={item.name}>
                      <Text style={styles.text}>{item.name}</Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>${item.price} </Text>
                        <TouchableOpacity
                          onPress={() => handleRemove(item.name)}>
                          <Text
                            style={{
                              backgroundColor: 'red',
                              margin: 5,
                              width: 20,
                              height: 20,
                              borderRadius: 20,
                              textAlign: 'center',
                              color: 'white',
                            }}>
                            X
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
                ListFooterComponent={() => (
                  <View style={{marginVertical: 20}}>
                    <Text
                      style={{
                        color: 'yellow',
                        alignSelf: 'flex-end',
                        marginRight: 40,
                      }}>
                      Total: ${totalPrice}
                    </Text>
                    <TouchableOpacity onPress={handleCheckout}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'red',
                          backgroundColor: 'white',
                          width: 100,
                          padding: 5,
                          borderRadius: 20,
                          alignSelf: 'center',
                          marginBottom: 20,
                          marginTop: 10,
                          fontWeight: 'bold',
                        }}>
                        Checkout
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </>
          ) : (
            <Text style={{textAlign: 'center', color: 'white'}}>
              No Item Yet
            </Text>
          )}
        </>
      ) : null}
      {!show ? (
        <ItemPayment
          totalPrice={'$' + totalPrice}
          setItems={props.setItems}
          items={props.items}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    margin: 5,
  },
});
