import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import New1Screen from './New1Screen';

export default function InfoScreen({ navigation }) {
    return (
      <View style={styles.sectionDrawer}>
        <View style={styles.sectionDrawer}>
          <Text style={styles.sectionTitle}>Rpool</Text>
          <Text style={styles.sectionDescription}>Инфо page</Text>
        </View>
      </View>
    );
}



const styles = StyleSheet.create({
  sectionDrawer: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionContainer: {
    flex: 2,
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
