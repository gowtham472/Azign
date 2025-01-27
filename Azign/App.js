import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button, TextInput } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Hello, React Native!</Text>
        <TextInput 
          placeholder="Enter your name" 
          style={styles.textInput} 
        />
        <Button title="Submit" onPress={() => alert("Button pressed")} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  innerContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: 200,
    backgroundColor: "white",
  },
});

export default App;
