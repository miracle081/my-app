import { Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState("Joshua stop writing");

  let num = "Johnny";
  num = "Mark"
  console.log(user);


  return (
    <ImageBackground source={{ uri: "https://images.pexels.com/photos/28291066/pexels-photo-28291066/free-photo-of-two-women-are-working-in-a-tea-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} style={{ width: "100%", height: "100%", marginTop: 20, borderRadius: 50, }}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Welcome to react Native</Text>
        <Text style={{ backgroundColor: "gray", marginTop: 20 }}>Welcome to react Native</Text>

        <TextInput
          style={{ borderWidth: 1, borderColor: "white", padding: 10, fontSize: 16, borderRadius: 30, color: "white" }}

        />

        <Button title="Submit" onPress={() => (Alert.alert("Registration", "You account has been created successfully"))} />

        <TouchableOpacity
          onPress={() => setUser("This Button has been clicked")}
          style={{ backgroundColor: "white", padding: 15, borderRadius: 50 }}>
          <Text style={{ color: "#343250", fontSize: 16, textAlign: "center", fontWeight: "bold" }}>Sign Up</Text>
        </TouchableOpacity>

        <Image source={require("./assets/rn.jpg")} style={{ width: "100%", height: 200, marginTop: 20 }} />
        <Image source={{ uri: "https://images.pexels.com/photos/28291066/pexels-photo-28291066/free-photo-of-two-women-are-working-in-a-tea-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }} style={{ width: 90, height: 90, marginTop: 20, borderRadius: 50, }} />



      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#335032ba",
    padding: 20,
    paddingTop: 60,
    height: "100%"
  },
  textHeader: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  }
})