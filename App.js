import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BooksScreen from './src/Screens/BookScreen';

export default function App() {
  return (
<BooksScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'green',
    
  },
});
