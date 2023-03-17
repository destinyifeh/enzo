import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Share from 'react-native-share';
import ViewShot from 'react-native-view-shot';
import {paymentDetails} from '../../utils/constant';
import {formatCardNumber, formatDate} from '../../utils/formatter';
import {generateOrderNumber, getPaymentDetail} from '../../utils/helper';
export const PaymentReceipt = () => {
  const navigation = useNavigation();
  const ref = React.useRef();
  const [PaymentDetail, setPaymentDetail] = React.useState('');
  const [orderNo, setOrderNo] = React.useState('');
  const [formattedCardNumber, setFormattedCardNumber] = React.useState('');
  React.useEffect(() => {
    const getSavedItem = async () => {
      let savedItem = await getPaymentDetail(paymentDetails);
      console.log(savedItem, 'the saved item');
      setPaymentDetail(savedItem);
      let formatCard = formatCardNumber(savedItem.card.replace(/ /g, ''));
      setFormattedCardNumber(formatCard);
      console.log(formatCard, 'formatCard');
    };
    getSavedItem();
  }, []);

  React.useEffect(() => {
    let orderNumber = generateOrderNumber();
    console.log(orderNumber, 'random');
    setOrderNo(orderNumber);
    console.log(orderNo, 'order no');
  }, []);
  const orderedDate = formatDate();
  console.log(orderedDate, 'datee');

  const onCapture = React.useCallback(() => {
    ref.current.capture().then(uri => {
      console.log(uri, 'urii');

      CameraRoll.save(uri, {type: 'photo'});
    });
    showAlert();
    //Alert.alert('Saved', 'Receipt successfully captured and saved');
  }, []);

  const showAlert = () => {
    Alert.alert(
      'Saved',
      'Receipt successfully captured and saved to your gallery',
      [
        {
          text: 'cancel',
          onPress: () => console.log('Pressed OK'),
          style: 'cancel',
        },
        {
          text: 'GO TO Store',
          onPress: () =>
            navigation.reset({index: 0, routes: [{name: 'Store'}]}),
        },
      ],
    );
  };

  const customOptions = {
    title: 'Enzo Store Transaction Receipt OrderNo',
    message: 'Enzo Store Transaction Receipt with order number enzo21364',
  };

  const handleShare = async customOptions => {
    try {
      const res = await Share.open(customOptions);
      console.log(res, 'my res');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <ViewShot
        ref={ref}
        options={{
          fileName: "Enzo's Transaction Receipt",
          format: 'jpg',
          quality: 0.9,
        }}>
        <View style={styles.body}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 'bold',
              padding: 5,
            }}>
            Enzo's Store Transaction Receipt
          </Text>

          <Text>
            This is a original copy of your receipt. Thanks for transacting with
            us
          </Text>

          <View style={{borderBottomWidth: 1, padding: 10}}>
            <View style={{alignSelf: 'center'}}>
              <QRCode value="Enzo's Store Transaction Receipt" />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                padding: 10,
                marginTop: 10,
              }}>
              Item Details
            </Text>
            <View style={styles.detail}>
              <View>
                <Text stylele={styles.text}>Date/Time</Text>
                <Text style={styles.text}>Order No</Text>
                <Text style={styles.text}>Card No</Text>
                <Text style={[styles.text, {fontWeight: 'bold'}]}>Amount</Text>
              </View>
              <View>
                <Text style={styles.text}>{orderedDate}</Text>
                <Text style={styles.text}>enzo{orderNo}</Text>
                <Text style={styles.text}>{formattedCardNumber}</Text>
                <Text style={[styles.text, {fontWeight: 'bold'}]}>
                  {PaymentDetail.price}
                </Text>
              </View>
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 20,
                fontSize: 18,
              }}>
              Approved
            </Text>
          </View>
          <Text style={{textAlign: 'center', padding: 10, fontSize: 15}}>
            Contact Us: +2349007008000
          </Text>
        </View>
      </ViewShot>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          onPress={() => handleShare(customOptions)}
          style={{
            backgroundColor: 'ghostwhite',
            width: 150,
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 10,
          }}>
          <Text
            style={{
              padding: 10,
              fontWeight: 'bold',
              alignSelf: 'center',
              color: 'blue',
            }}>
            Share OrderNo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onCapture()}
          style={{
            backgroundColor: 'ghostwhite',
            width: 150,
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 10,
          }}>
          <Text
            style={{
              padding: 10,
              fontWeight: 'bold',
              alignSelf: 'center',
              color: 'blue',
            }}>
            Save Receipt
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
    marginTop: 15,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
