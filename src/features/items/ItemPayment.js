import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {paymentDetails} from '../../utils/constant';
import {savePaymentDetail} from '../../utils/helper';
import {cardValidator} from '../../utils/validator';
export default function ItemPayment({totalPrice, setItems, items}) {
  const navigation = useNavigation();
  const [loader, setLoader] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState('');
  const theWidth = Dimensions.get('window').width;

  const handlePayment = value => {
    let removeEmptySpaces = value.replace(/ /g, ''); //Remove all the empty spaces in the input
    let getOnlyDigits = removeEmptySpaces.replace(/\D/g, ''); //Get only digits
    if (getOnlyDigits.length > 16) {
      getOnlyDigits = getOnlyDigits.slice(0, 16);
      console.log(getOnlyDigits, 'the digits');
      return false;
    }
    setCardNumber(value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '));
    console.log(items, 'items');
    console.log(value, 'val');
    console.log(cardNumber, 'card');
  };

  const onSubmit = async () => {
    setLoader(true);
    setTimeout(async () => {
      setLoader(false);

      if (cardValidator(cardNumber.replace(/\D/g, '')) !== true) {
        return false;
      } else {
        const details = {
          card: cardNumber,

          price: totalPrice,
        };
        await savePaymentDetail(paymentDetails, details);

        console.log(details, 'pay');
        items.length = 0;
        Alert.alert('Payment received', 'Download your receipt');
      }
      navigation.navigate('Receipt');
    }, 2000);
  };

  return (
    <View
      style={{
        width: theWidth / 1.1,
        maxWidth: theWidth / 1,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 25,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'grey',
          marginBottom: 10,
          fontSize: 17,
        }}>
        Pay With Enzo Pay
      </Text>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        {/* <Image
          source={require('../../assets/images/verve.png')}
          resizeMode="stretch"
          style={{width: 70, height: 30}}
        />
        <Image
          source={require('../../assets/images/master.png')}
          resizeMode="stretch"
          style={{width: 70, height: 50}}
        />
        <Image
          source={require('../../assets/images/visa.png')}
          resizeMode="stretch"
          style={{width: 70, height: 30}}
        /> */}
        <Text style={{color: '#F7B600', fontSize: 18}}>Visa</Text>
        <Text style={{color: '#23395d', fontSize: 18}}>verve</Text>
        <Text style={{color: '#eb001b', fontSize: 18}}>Mater card</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <KeyboardAvoidingView behavior="position">
          <Text style={{alignSelf: 'flex-start', color: 'black', padding: 5}}>
            Card Number
          </Text>
          <TextInput
            value={cardNumber}
            onChangeText={value => handlePayment(value)}
            placeholder="your card number..."
            placeholderTextColor={'grey'}
            keyboardType="number-pad"
            style={[styles.input, {alignSelf: 'center', width: theWidth / 1.2}]}
          />
          {/* <Text style={{alignSelf: 'flex-start', padding: 5, color: 'white'}}>
            Email
          </Text>
          <TextInput
            onChangeText={value => handlePayment('email', value)}
            placeholder="your email..."
            placeholderTextColor={'white'}
            style={[styles.input, {width: theWidth / 1.1}]}
            keyboardType="email-address"
          /> */}
          <Text style={{alignSelf: 'flex-start', padding: 5, color: 'black'}}>
            Total Price
          </Text>
          <TextInput
            value={String(totalPrice)}
            placeholderTextColor={'black'}
            style={[styles.input, {width: theWidth / 1.2, marginBottom: 5}]}
            editable={false}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={onSubmit}
          style={{
            marginVertical: 8,
            borderRadius: 5,
            backgroundColor: loader ? '#8B0000' : 'red',
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                width: 50,
              }}>
              PAY
            </Text>
            {loader ? <ActivityIndicator color={'white'} /> : null}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,

    borderRadius: 10,
    borderColor: 'black',
    alignSelf: 'center',
    color: 'grey',
  },
});
