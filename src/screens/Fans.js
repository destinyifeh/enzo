import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Nav from '../components/Nav';
import {FansPhoto} from '../components/PhotoCollection';
import {emailValidator} from '../utils/validator';
export const FansScreen = props => {
  const initialState = {
    name: '',
    email: '',
    nationality: '',
    photo: '',
  };
  const [fan, setFan] = React.useState(initialState);

  const [showText, setShowText] = React.useState(false);
  const [loader, setLoader] = React.useState(false);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowText(prevState => !prevState);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const handleText = (name, text) => {
    console.log(text, 'text');
    setFan({...fan, [name]: text});
    //setFan(prevState => ({...prevState, [name]: text}));
    console.log(fan, 'fan');
  };

  const onSubmit = () => {
    setLoader(true);
    if (fan.name === '') {
      setLoader(false);
      // Alert.alert(
      //   'Error',
      //   'You cannot submit the form without entering your name',
      // );
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: 'You cannot submit the form without entering your name',
        position: 'top',
      });
    } else if (fan.nationality === '') {
      setLoader(false);
      // Alert.alert(
      //   'Error',
      //   'You cannot submit the form without entering your country name',
      // );
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: 'You cannot submit the form without entering your country name',
      });
    } else if (emailValidator(fan.email) !== true) {
      setLoader(false);
      return;
    } else if (fan.photo === '') {
      setLoader(false);
      // Alert.alert(
      //   'Error',
      //   'You cannot submit the form without uploading your photo',
      // );
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: 'You cannot submit the form without uploading your photo',
        position: 'top',
      });
    } else {
      setTimeout(() => {
        setLoader(false);
        console.log(fan, 'the fan');
        setShowText(false);
        setFan({...initialState});
        Alert.alert(
          'Sucessful!',
          `Hi ${fan.name}! You have successfully registered as a fan of enzo fernandez. Welcome to the family!`,
        );
      }, 2000);
    }
  };

  const selectImage = async () => {
    const options = {
      mediaType: 'photo',
      quality: 0.1,
    };
    try {
      const result = await launchImageLibrary(options);
      console.log(result.assets, 'result');

      if (result.didCancel) {
        console.log('cancelled');
        return false;
      }
      for (const file of result.assets) {
        console.log(file.uri, 'des');
        setShowText(true);
        setTimeout(() => {
          setFan({...fan, photo: file.uri});
        }, 1000);
      }
    } catch (error) {
      console.log(error, 'error');
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/images/pitch2.png')}
        style={styles.body}
        imageStyle={{opacity: 0.8, backgroundColor: 'grey'}}>
        <Nav props={props} />
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 16,
            marginBottom: 20,
            fontFamily: 'Roboto-Italic',
          }}>
          Welcome To Enzo Fernandez's Fans Page
        </Text>
        <FansPhoto />
        <ImageBackground
          imageStyle={{opacity: 0.8, backgroundColor: 'black'}}
          style={{flex: 1}}
          resizeMode="cover"
          source={require('../assets/images/enzo.jpg')}>
          <Text
            style={{
              fontFamily: 'Roboto-BoldItalic',
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              marginBottom: 15,
              paddingVertical: 10,
            }}>
            Become a Fan
          </Text>

          <KeyboardAvoidingView style={{margin: 5}} behavior="padding">
            <Text style={styles.text}>Name</Text>
            <TextInput
              onChangeText={val => handleText('name', val)}
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="your name..."
              value={fan.name}
            />
            <Text style={styles.text}>Email</Text>

            <TextInput
              onChangeText={val => handleText('email', val)}
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="your email address..."
              textContentType="emailAddress"
              value={fan.email}
            />
            <Text style={styles.text}>Nationality</Text>

            <TextInput
              onChangeText={val => handleText('nationality', val)}
              style={styles.textInput}
              placeholderTextColor="white"
              placeholder="your country..."
              value={fan.nationality}
            />

            <Text
              style={[
                styles.text,
                {marginBottom: 10, fontFamily: 'Roboto-Regular'},
              ]}>
              Upload Photo
            </Text>
            <TouchableOpacity style={styles.upload} onPress={selectImage}>
              {fan.photo !== '' ? (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{uri: fan.photo}}
                    style={{
                      alignSelf: 'center',
                      backgroundColor: 'grey',
                      height: 110,
                      width: 130,
                      borderRadius: 20,
                    }}
                    resizeMode="cover"
                  />

                  <TouchableOpacity
                    onPress={() => (
                      setFan({...fan, photo: ''}), setShowText(false)
                    )}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 10,
                      marginLeft: 15,
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        paddingHorizontal: 5,
                        paddingVertical: 3,
                        textAlign: 'center',
                      }}>
                      Remove photo
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <>
                  <Text
                    style={{
                      position: 'absolute',
                      color: 'blue',
                      top: 40,
                      alignSelf: 'center',
                      zIndex: 1,
                      fontWeight: 'bold',
                      // display: showText ? 'none' : 'flex',
                      display: !showText ? 'none' : 'flex',
                    }}>
                    Uploading...
                  </Text>
                  {/* <ActivityIndicator
                    style={{
                      position: 'absolute',
                      top: 40,
                      alignSelf: 'center',
                      zIndex: 1,
                      fontWeight: 'bold',
                    }}
                    size={30}
                    color={'blue'}
                  /> */}
                  <FontAwesome name="image" size={110} style={styles.image} />
                </>
              )}
            </TouchableOpacity>
          </KeyboardAvoidingView>

          <TouchableOpacity style={styles.btn} onPress={onSubmit}>
            <Text
              style={{
                color: 'blue',
                textAlign: 'center',
                fontSize: 15,
                marginRight: 5,
                fontFamily: 'Roboto-Bold',
              }}>
              Register
            </Text>
            {loader ? <ActivityIndicator color={'blue'} size={20} /> : null}
          </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  upload: {
    backgroundColor: 'grey',
    height: 110,
    width: 130,
    borderRadius: 20,
  },
  image: {alignSelf: 'center', color: 'white'},
  btn: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
