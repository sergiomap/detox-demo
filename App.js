import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,TextInput, View } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View testID='welcome' style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 25, marginBottom: 30}}>
      Welcome
    </Text>
    <TextInput
      testID='input'
      style={{ height: 0,width:0, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

