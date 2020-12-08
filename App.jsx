import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { auth } from './src/services/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  // const [token, setToken] = useState();
  // useEffect(() => {
  //   const bla = async () => {
  //     const token = await auth();
  //     setToken(token);
  //   };
  //   bla();
  // }, [setToken]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={auth} title="Push" />
      <StatusBar />
    </View>
  );
}
