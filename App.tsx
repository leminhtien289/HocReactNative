import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0);
  //jsx
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "600" }}>
        count={count}
      </Text>
      <View>
        <Button
          color={"red"}
          title='Increase' onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
}


// ko có khái niệm css
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: 'red',
    fontSize: 60,
    borderColor: 'green',
    borderWidth: 1,
    padding: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "600"
  },
  parent: {
    fontSize: 60,
    color: 'green'
  },
  child: {
    fontSize: 30,
    color: 'pink'
  }
});
