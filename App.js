import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,  Button, Alert, TouchableOpacity,  } from 'react-native';

export default function App() {
  // Create a variable which is called a counter
  // To change the value of the variable, I will use setCounter method...
  // counter = counter + 1 <-- in React normally you will not use this...
  // The initial value is 0
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello world welcome to my first app</Text>
      <Text style={styles.header2}>I am so happy with this app</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/pagePropertiesOgImage/kuala-lumpur.jpg.jpg',
        }}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

      <Text style={styles.header2}>Counter example</Text>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter+1)}
      style={styles.increment}>
      <Text style={styles.buttonColor}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter(counter-1)}
      style={styles.decrement}>
      <Text style={styles.buttonColor}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCounter(0)}
      style={styles.reset}>
      <Text style={styles.buttonColor}>Reset</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
  header: {
    fontSize:24,
    color:'#f00'
  },
  header2: {
    fontSize:24,
    color:'#0f0',
    marginTop:8
  },
  tinyLogo: {
    width: 400,
    height: 300,
    marginTop:8,
  },
  increment: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    width:'100%',
  },
  decrement: {
    alignItems: "center",
    backgroundColor: "blue",
    padding:  10,
    width:'100%',

  },
  reset: {
    alignItems: "center",
    backgroundColor: "red",
    width: '100%',
    padding: 10
  },
  buttonColor: {
    color:'white',
  }
});
