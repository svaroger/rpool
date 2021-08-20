import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

//export default class New1Screen extends React.Component {

export default function New1Screen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed Screen</Text>
      </View>
    );
  }

// onPress={() => this.props.navigation.navigate('Home')}



/*
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Rpool</Text>
        <Text style={styles.sectionDescription}>New page</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
});
*/
