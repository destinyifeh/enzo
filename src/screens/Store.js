import React from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Nav from '../components/Nav';
import {
  BootProduct,
  CapProduct,
  JerseyProduct,
  SocksProduct,
} from '../components/Products';
import {ItemList} from '../features/items/ItemList';
export default function Store(props) {
  const [items, setItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState([]);

  // const [items, setItems] = React.useState({name:"", price:""});
  const [status, setStatus] = React.useState({
    jersey: true,
    boot: false,
    cap: false,
    sock: false,
    cart: false,
  });
  const [loader, setLoader] = React.useState({
    loader1: false,
    loader2: false,
    loader3: false,
    loader4: false,
    loader5: false,
    cartLoader: false,
  });
  const theHeight = Dimensions.get('window').height;
  const [showText, setShowText] = React.useState(true);
  const [showProduct, setShowProduct] = React.useState({
    showProduct1: false,
    showProduct2: false,
    showProduct3: false,
    showProduct4: false,
    showCart: false,
  });

  React.useEffect(() => {
    setLoader({...loader, loader1: true});

    setTimeout(() => {
      setLoader({...loader, loader1: false});
      setShowProduct({...showProduct, showProduct1: true});
    }, 3000);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prevState => !prevState);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const handleStore = value => {
    console.log(value, 'the value');
    if (value === 'jersey') {
      setLoader({...loader, loader1: true});
      setShowProduct({
        ...showProduct,
        showProduct1: false,
        showProduct2: false,
        showProduct3: false,
        showProduct4: false,
        showCart: false,
      });

      setTimeout(() => {
        setLoader({...loader, loader1: false});
        setShowProduct({
          ...showProduct,
          showProduct1: true,
          showProduct2: false,
          showProduct3: false,
          showProduct4: false,
          showCart: false,
        });
      }, 3000);
      setStatus({
        ...status,
        boot: false,
        jersey: true,
        cap: false,
        sock: false,
        cart: false,
      });
    } else if (value === 'boot') {
      setLoader({...loader, loader2: true});
      setShowProduct({
        ...showProduct,
        showProduct1: false,
        showProduct2: false,
        showProduct3: false,
        showProduct4: false,
        showCart: false,
      });

      setTimeout(() => {
        setLoader({...loader, loader2: false});
        setShowProduct({
          ...showProduct,
          showProduct1: false,
          showProduct2: true,
          showProduct3: false,
          showProduct4: false,
          showCart: false,
        });
      }, 3000);
      setStatus({
        ...status,
        boot: true,
        jersey: false,
        cap: false,
        sock: false,
        cart: false,
      });
    } else if (value === 'cap') {
      setLoader({...loader, loader3: true});
      setShowProduct({
        ...showProduct,
        showProduct1: false,
        showProduct2: false,
        showProduct3: false,
        showProduct4: false,
        showCart: false,
      });

      setTimeout(() => {
        setLoader({...loader, loader3: false});
        setShowProduct({
          ...showProduct,
          showProduct1: false,
          showProduct2: false,
          showProduct3: true,
          showProduct4: false,
          showCart: false,
        });
      }, 3000);
      setStatus({
        ...status,
        boot: false,
        jersey: false,
        cap: true,
        sock: false,
        cart: false,
      });
    } else if (value === 'sock') {
      setLoader({...loader, loader4: true});
      setShowProduct({
        ...showProduct,
        showProduct1: false,
        showProduct2: false,
        showProduct3: false,
        showProduct4: false,
        showCart: false,
      });

      setTimeout(() => {
        setLoader({...loader, loader4: false});
        setShowProduct({
          ...showProduct,
          showProduct1: false,
          showProduct2: false,
          showProduct3: false,
          showProduct4: true,
          showCart: false,
        });
      }, 3000);
      setStatus({
        ...status,
        boot: false,
        jersey: false,
        cap: false,
        sock: true,
        cart: false,
      });
    } else {
      setLoader(false);
      setShowProduct({
        ...showProduct,
        showProduct1: false,
        showProduct2: false,
        showProduct4: false,
        showProduct3: false,
        showCart: false,
      });

      setStatus({
        ...status,
        boot: false,
        jersey: true,
        cap: false,
        sock: false,
        cart: false,
      });
    }
  };

  // const handleCart = React.useCallback((name, price) => {
  //   console.log(name, price, 'details');
  // }, []);

  const handleCart = (name, price) => {
    console.log(name, price, 'details');

    const checkItem = items?.find(item => item.name === name);
    console.log(checkItem, 'the item');

    if (!checkItem) {
      const cartDetail = {
        name: name,
        price: price,
      };
      setItems(items => [...items, cartDetail]);
      console.log(items, 'items');
    } else {
      Alert.alert('Error', 'This item already added to your cart');
    }
  };

  const handleCartItems = () => {
    setLoader({...loader, cartLoader: true});
    setShowProduct({
      ...showProduct,
      showProduct1: false,
      showProduct2: false,
      showProduct3: false,
      showProduct4: false,
      showCart: false,
    });

    setTimeout(() => {
      setLoader({...loader, loader2: false});
      setShowProduct({
        ...showProduct,
        showProduct1: false,
        showProduct2: false,
        showProduct3: false,
        showProduct4: false,
        showCart: true,
      });
    }, 3000);
    setStatus({
      ...status,
      boot: false,
      jersey: false,
      cap: false,
      sock: false,
      cart: true,
    });
  };
  return (
    <View style={storeStyles.body}>
      <Nav props={props} />
      <View style={{height: 130}}>
        <Text
          style={{
            color: 'yellow',
            textAlign: 'center',
            fontSize: 15,
            marginVertical: 10,
            fontFamily: 'Roboto-Light',
          }}>
          Get your quality jersey, boot, cap, socks right here
        </Text>

        <View style={{height: 130, backgroundColor: 'white'}}>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../assets/images/jersey3.png')}
              style={{width: 100, height: 100}}
              resizeMode="stretch"
            />
            <Image
              source={require('../assets/images/nike.png')}
              style={{width: 100, height: 100}}
              resizeMode="stretch"
            />
            <Image
              source={require('../assets/images/cap4.png')}
              style={{width: 100, height: 100}}
              resizeMode="stretch"
            />
          </View>

          <Text
            style={{
              position: 'absolute',
              top: 30,
              alignSelf: 'center',
              padding: 10,
              fontSize: 20,
              display: showText ? 'none' : 'flex',
              color: 'yellow',
              fontFamily: 'Roboto-Italic',
            }}>
            20% Off Everyday. Shop now !
          </Text>
        </View>
      </View>

      <View style={storeStyles.storeNav}>
        <TouchableOpacity onPress={() => handleStore('jersey')}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              borderBottomWidth: status.jersey ? 1 : 0,
              borderBottomColor: status.jersey ? 'yellow' : null,
              fontFamily: 'Roboto-Regular',
            }}>
            Jersey
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStore('boot')}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              borderBottomWidth: status.boot ? 1 : 0,
              borderBottomColor: status.boot ? 'yellow' : null,
              fontFamily: 'Roboto-Regular',
            }}>
            Boot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStore('sock')}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              borderBottomWidth: status.sock ? 1 : 0,
              borderBottomColor: status.sock ? 'yellow' : null,
              fontFamily: 'Roboto-Regular',
            }}>
            Socks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStore('cap')}>
          <Text
            style={{
              color: 'white',
              fontSize: 17,
              borderBottomWidth: status.cap ? 1 : 0,
              borderBottomColor: status.cap ? 'yellow' : null,
              fontFamily: 'Roboto-Regular',
            }}>
            Cap
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleCartItems}
          style={{
            borderBottomWidth: status.cart ? 1 : 0,
            borderBottomColor: status.cart ? 'yellow' : null,
          }}>
          <Text
            style={{
              position: 'absolute',
              bottom: 10,
              left: 15,
              zIndex: 1,
              color: 'white',
              backgroundColor: 'red',
              height: 20,
              width: 20,
              borderRadius: 10,
              textAlign: 'center',
            }}>
            {items.length}
          </Text>
          <FontAwesome name="shopping-cart" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <View>
          {status.jersey ? (
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Roboto-Italic',
              }}>
              Get your quality jersey
            </Text>
          ) : null}

          {loader.loader1 ? (
            <ActivityIndicator
              size={40}
              color={'white'}
              style={{height: theHeight / 2}}
            />
          ) : null}
          {showProduct.showProduct1 ? (
            <JerseyProduct handleCart={handleCart} />
          ) : null}
        </View>
        <View>
          {status.boot ? (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Roboto-Italic',
              }}>
              Get your quality boot
            </Text>
          ) : null}
          {loader.loader2 ? (
            <ActivityIndicator
              size={40}
              color={'white'}
              style={{height: theHeight / 2}}
            />
          ) : null}
          {showProduct.showProduct2 ? (
            <BootProduct handleCart={handleCart} />
          ) : null}
        </View>
        <View>
          {status.cap ? (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Roboto-Italic',
              }}>
              Get your quality cap
            </Text>
          ) : null}
          {loader.loader3 ? (
            <ActivityIndicator
              size={40}
              color={'white'}
              style={{height: theHeight / 2}}
            />
          ) : null}
          {showProduct.showProduct3 ? (
            <CapProduct handleCart={handleCart} />
          ) : null}
        </View>
        <View>
          {status.sock ? (
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Roboto-Italic',
              }}>
              Get your quality socks
            </Text>
          ) : null}
          {loader.loader4 ? (
            <ActivityIndicator
              size={40}
              color={'white'}
              style={{height: theHeight / 2}}
            />
          ) : null}
          {showProduct.showProduct4 ? (
            <SocksProduct handleCart={handleCart} />
          ) : null}
        </View>
        <View style={{flex: 1}}>
          {/* {status.cart ? (
            <Text style={{color: 'white', textAlign: 'center'}}>
              Your Cart Items
            </Text>
          ) : null} */}
          {loader.cartLoader ? (
            <ActivityIndicator
              size={40}
              color={'white'}
              style={{height: theHeight / 2}}
            />
          ) : null}
          {showProduct.showCart ? (
            <ItemList
              items={items}
              setItems={setItems}
              loader={loader}
              setLoader={setLoader}
              showProduct={showProduct}
              setShowProduct={setShowProduct}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const storeStyles = StyleSheet.create({
  body: {
    backgroundColor: 'grey',
    flex: 1,
    paddingHorizontal: 10,
  },
  storeNav: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
    paddingBottom: 5,
  },
});
