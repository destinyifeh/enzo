import {Alert} from 'react-native';

export const cardValidator = (value, email) => {
  if (!value) {
    return Alert.alert('Error', 'Enter card number');
  } else if (value?.length !== 16) {
    return Alert.alert(
      'Error',
      'Please provide a valid card number and card number must be 16 digits',
    );
    //   } else if (!email) {
    //     return Alert.alert('Error', 'Please enter your email');
    //   } else if (
    //     !String(email)
    //       .toLowerCase()
    //       .match(
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //       )
    //   ) {
    //     return Alert.alert('Error', 'Invalid email');
  } else {
    return true;
  }
};

export const emailValidator = email => {
  console.log(email, 'emm');
  if (!email) {
    return Alert.alert('Error', 'Please enter your email');
  } else if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  ) {
    return Alert.alert('Error', 'Invalid email');
  } else {
    return true;
  }
  // return String(email)
  //   .toLowerCase()
  //   .match(
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  //   );
};

export const isExist = value => {
  if (!value) {
    return Alert.alert('Error', 'Please enter your email');
  }
};
