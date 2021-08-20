import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Icon } from 'react-native-elements'
import {Provider} from 'react-redux';

import LoginScreen from './screens/LoginScreen';
import InfoScreen from './screens/InfoScreen';
import DevicesScreen from './screens/DevicesScreen';
import PaymentsScreen from './screens/PaymentsScreen';
import New1Screen from './screens/New1Screen';
import New2Screen from './screens/New2Screen';
import Colors from './constants/Colors';
import LogoTitle from './constants/Logo';
import store from './redux/store';
import {connect} from 'react-redux';

/*
function InfoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Info Screen</Text>
    </View>
  );
}
*/

/*
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../src/ruspool.png')}
    />
  );
*/

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

function Tabn() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Info" component={InfoScreen} />
      <Tab.Screen name="Devices" component={DevicesScreen} />
      <Tab.Screen name="Payments" component={PaymentsScreen} />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="New1Screen" component={New1Screen} />
      <Drawer.Screen name="New2Screen" component={New2Screen} />
    </Drawer.Navigator>
  );
}

const myIcon = <Icon name="rocket" size={30} color="#002222" />;

export default class App extends React.Component {


  state = {
    isLoggedIn: true
  };


  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {this.state.isLoggedIn ? (
              <>
                <Stack.Screen
                  name="Home"
                  component={Tabn}
                  options={{
                    headerTitle: props => <LogoTitle {...props} />,
                    headerRight: () => (
                      <TouchableOpacity onPress={() => alert('This is a button!')}>
                        <Image
                          style={styles.MenuContainer}
                          source={require('./src/menu.png')}
                        />
                      </TouchableOpacity>
                    ),
                  }}
                 />
                <Stack.Screen name="Drawer" component={MyDrawer} />
              </>
            ) : (
              <Stack.Screen name="Login" component={LoginScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  MenuContainer: {
    width: 25,
    height: 20,
    marginHorizontal: 20
  },
});
