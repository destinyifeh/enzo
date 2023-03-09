import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const JerseyProduct = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/jersey.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Jersey</Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('blue jersey', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/jersey2.jpg')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Jersey</Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('yellow jersey', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/jersey4.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Jersey</Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('white jersey', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/jersey5.jpg')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Quality</Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('quality jersey', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const BootProduct = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/adidas.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Adidas Boot</Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('adidas boot', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/nike.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Nike</Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('nike boot', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/puma.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Puma</Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('puma boot', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/puma1.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Quality Boot </Text>
          <Text style={{color: 'black'}}>$20</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('quality boot', 20)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const SocksProduct = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/sock7.jpg')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Puma</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('puma socks', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/sock8.jpg')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Nike</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('nike socks', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/sock9.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Adidas</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('adidas socks', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/sock12.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Yellow Socks</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('yellow socks', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const CapProduct = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/cap.jpg')}
          style={styles.productImage}
          resizeMode="stretch"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Adidas</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('adidas cap', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/cap3.png')}
          style={styles.productImage}
          resizeMode="stretch"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Nike</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('nike cap', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/cap6.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Puma</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('puma cap', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            position: 'absolute',
            top: 4,
            padding: 5,
            alignSelf: 'flex-end',
            color: 'red',
            zIndex: 1,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          -20%
        </Text>
        <Image
          source={require('../assets/images/cap7.png')}
          style={styles.productImage}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={{color: 'black'}}> Quality Cap</Text>
          <Text style={{color: 'black'}}>$5</Text>
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 1,
            paddingTop: 2,
            alignSelf: 'center',
          }}
          onPress={() => props.handleCart('quality cap', 5)}>
          <Text
            style={{
              color: 'blue',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginVertical: 30,
    gap: 20,
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'white',
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  productImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
});
