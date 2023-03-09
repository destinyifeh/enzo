import AsyncStorage from '@react-native-async-storage/async-storage';

async function savePaymentDetail(key, value) {
  try {
    let savePayment = await AsyncStorage.setItem(key, JSON.stringify(value));
    return savePayment;
  } catch (error) {
    console.log(error);
  }
}
async function getPaymentDetail(key) {
  try {
    let getPayment = await AsyncStorage.getItem(key);
    return getPayment !== null ? JSON.parse(getPayment) : null;
  } catch (error) {
    console.log(error);
  }
}

async function removePaymentDetail(key) {
  try {
    let removePayment = await AsyncStorage.removeItem(key);
    return removePayment;
  } catch (error) {
    console.log(error);
  }
}

async function saveData(key, value) {
  try {
    let saveData = await AsyncStorage.setItem(key, JSON.stringify(value));
    return saveData;
  } catch (error) {
    console.log(error);
  }
}

async function getData(key) {
  try {
    let getData = await AsyncStorage.getItem(key);
    return getData !== null ? JSON.parse(getData) : null;
  } catch (error) {
    console.log(error);
  }
}

async function deleteData(key) {
  try {
    let deleteData = await AsyncStorage.removeItem(key);
    return deleteData;
  } catch (error) {
    console.log(error);
  }
}

function generateOrderNumber() {
  let generatedOrderNumber = Math.random().toString().substring(2, 7);
  return generatedOrderNumber;
}
export {
  savePaymentDetail,
  getPaymentDetail,
  removePaymentDetail,
  saveData,
  getData,
  deleteData,
  generateOrderNumber,
};
