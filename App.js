import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthNavigator from './navigation/AuthNavigator';

import BooksDetailScreen from './screens/BookDetailScreen';

export default function App() {
  return (
    <BooksDetailScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
