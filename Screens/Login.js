import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Alert, FlatList, SafeAreaView, StatusBar, } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { ActivityIndicator, MD2Colors, Snackbar } from "react-native-paper";
import { Rubik_400Regular, Rubik_900Black_Italic } from "@expo-google-fonts/rubik";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { RubikWetPaint_400Regular } from "@expo-google-fonts/rubik-wet-paint";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";


export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  function handleLogin() {
    // console.log("Button clicked 2");
    const data = {
      username,
      password,
    };
    // users.push(data);
    setUsers([...users, data]);
    setUsername("");
    setPassword("");
    setloading(!loading)
    onToggleSnackBar()
    // Alert.alert(
    //   "Login",
    //   "Login Successful",
    //   [
    //     { text: "OK", onPress: () => console.log("OK Pressed") },
    //     { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "destructive" }
    //   ]
    // );
  }

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Rubik_400Regular,
          Rubik_900Black_Italic,
          RubikWetPaint_400Regular,
          Pacifico_400Regular
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", padding: 20, }}>
        <Text style={styles.text}>Login</Text>

        <TextInput
          style={[styles.inp, { borderColor: "red" }]}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.inp}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        {/* <Button title="Login" color="#ff7700" onPress={() => console.log("Button clicked")} /> */}
        <TouchableOpacity onPress={() => handleLogin()} style={{ backgroundColor: "#ff7700", padding: 10, borderRadius: 10, marginVertical: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>Login</Text>
        </TouchableOpacity>

        <Text style={{ textAlign: "center", marginTop: 10, fontSize: 20, color: "gray" }}>OR</Text>
        <View style={{ flexDirection: "row", gap: 10, }}>
          <TouchableOpacity style={{ flex: 1, borderColor: "#ebb382", padding: 10, borderRadius: 50, marginVertical: 10, borderWidth: 1 }}>
            {/* <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#ebb382" }}>Google</Text> */}
            <FontAwesomeIcon icon={faGoogle} size={25} color="#ebb382" style={{ alignSelf: "center" }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, borderColor: "#ebb382", padding: 10, borderRadius: 50, marginVertical: 10, borderWidth: 1 }}>
            {/* <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold", color: "#ebb382" }}>X</Text> */}
            <FontAwesomeIcon icon={faXTwitter} size={25} color="#ebb382" style={{ alignSelf: "center" }} />
          </TouchableOpacity>
        </View>

        <ActivityIndicator animating={loading} color={MD2Colors.red800} size={90} />

        {/* <View style={{ flexWrap: "wrap", flexDirection: "row", flex: 1, backgroundColor: "#0000001d", marginTop: 30 }}>
          <View style={{ backgroundColor: "green", width: 110, height: 110, margin: 3, position: "absolute", right: 0, top: -20, zIndex: 1 }} />
          <View style={{ backgroundColor: "gray", width: 100, height: 100, margin: 3, }} />
          <View style={{ backgroundColor: "gray", width: 100, height: 100, margin: 3, }} />
          <View style={{ backgroundColor: "gray", width: 100, height: 100, margin: 3, }} />
        </View> */}

      </ScrollView>
      {/* <FlatList horizontal={false}
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
              <Text>{item.username}</Text>
              <Text>{item.password}</Text>
            </View>
          );
        }}
      /> */}


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: StatusBar.currentHeight,
    // justifyContent: "center",
    // flexDirection: "row",
    // alignItems: "center"
  },
  text: {
    color: "#ff7700",
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Pacifico_400Regular",
    // fontStyle: "italic",
    // fontWeight: "900"
  },
  inp: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ff7700",
    borderRadius: 10,
    // display: "flex"
  },
});