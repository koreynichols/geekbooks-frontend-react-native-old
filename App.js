import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator';

import BookNavigator from './navigation/BookNavigator';
export default function App() {
  return (
    <BookNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
