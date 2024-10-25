import { Alert, FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightToBracket';
import { Avatar, Button, Card, Text } from "react-native-paper";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico"

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
SplashScreen.preventAutoHideAsync();

export function Login() {
  const [email, setEmail] = useState("ben@gmail.com");
  const [users, setUsers] = useState(["ben@gmail.com", "john@gmail.com", "joy@gmail.com"]);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Pacifico_400Regular });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  // console.log(onLayoutRootView);


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", gap: 10, justifyContent: "center", marginBottom: 20, alignItems: "center" }}>
          <FontAwesomeIcon icon={faArrowRightToBracket} size={30} color='#005ca8' />
          <Text style={{ fontWeight: "bold", fontSize: 20, fontFamily: "Pacifico_400Regular" }}>Login</Text>
        </View>

        {/* <Text>Email: {email}</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="white"
          onChangeText={(inp) => setEmail(inp)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="white"
          onChangeText={(inp) => setEmail(inp)}
        />

        {/* <Button title="Create Account" onPress={() => {
          console.log("Account created successfully");
        }} /> */}

        <TouchableOpacity onPress={() => {
          console.log("Account created successfully");
          Alert.alert(
            "Registration Status",
            "Account has been created successfully",
            [
              { text: "Delete", style: 'destructive', onPress: () => console.log("Account deleted") },
              { text: "Activate", onPress: () => alert("Your account has been activated") },
            ]
          )
        }} style={styles.input}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontFamily: "Pacifico_400Regular", fontWeight: "bold" }}>Sign In</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#1454f3", fontWeight: "bold", fontSize: 16, fontFamily: "Pacifico_400Regular" }}>Forgot Password?</Text>
          <Text style={{ color: "#1454f3", fontWeight: "bold", fontSize: 16, fontFamily: "Pacifico_400Regular" }}>Create Account</Text>
        </View>

        <FlatList horizontal={true}
          data={users}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text>{item}</Text>
                <Text style={{ backgroundColor: "#b42b2be6", padding: 3, paddingHorizontal: 8, color: "white", position: "absolute", top: -10, right: -10, }}>Delete</Text>

              </View>
            )
          }}
        />

        <Button mode="contained" icon="file" >Upload Image</Button>

        <View style={styles.shadow}></View>

        <Card>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20,
    flex: 1
  },
  input: {
    backgroundColor: "#1454f3",
    padding: 12,
    borderRadius: 50,
    marginVertical: 10,
    color: 'white',
    fontSize: 20,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 0.5,
    borderColor: "#1454f3",
    borderRadius: 10
  },
  shadow: {
    backgroundColor: "#ffffff",
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 30,
    elevation: 10,
    shadowColor: "#2b2b2b",
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: { height: 0, width: 70 }
  }
})