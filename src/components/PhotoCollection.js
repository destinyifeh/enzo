import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
export const PhotoCollection = () => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={{textAlign: 'center', marginBottom: 15}}>
        Photo collection of enzo fernandez
      </Text>
      <ScrollView horizontal>
        <Image
          source={require('../assets/images/enzo10.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo12.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo4.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo13.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo4.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo3.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo2.jpg')}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginHorizontal: 5,
          }}
        />
      </ScrollView>
    </View>
  );
};

export const PhotoCollection2 = () => {
  return (
    <>
      <Text style={{marginTop: 30, textAlign: 'center', marginBottom: 10}}>
        Enzo D Fernandez
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/enzo1.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo2.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo3.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo13.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo5.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo6.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo7.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo8.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
        <Image
          source={require('../assets/images/enzo9.jpg')}
          style={{
            width: 120,
            height: 120,
            borderRadius: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
        />
      </View>
    </>
  );
};

export const FansPhoto = () => {
  return (
    <View style={styles.fansImage}>
      <View>
        <Image
          source={require('../assets/images/enzo1.jpg')}
          style={{height: 120, width: 120, borderRadius: 100}}
        />
      </View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
          padding: 10,
        }}>
        8,000,000+ Fans
      </Text>
      {/* <View>
        <Image
          source={require('../assets/images/bg2.jpg')}
          style={{height: 100, width: 100, borderRadius: 100}}
        />
        <Text>Destiny AJ from Nigeria</Text>
      </View> */}
      {/* <View>
        <Image
          source={require('../assets/images/bg2.jpg')}
          style={{height: 100, width: 100, borderRadius: 100}}
        />
        <Text>Destiny AJ from Nigeria</Text>
      </View>
      <View>
        <Image
          source={require('../assets/images/bg2.jpg')}
          style={{height: 100, width: 100, borderRadius: 100}}
        />
        <Text>Destiny AJ from Nigeria</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  fansImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
