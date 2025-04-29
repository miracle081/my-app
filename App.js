import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "green", fontSize: 25, textAlign: "center" }} >Introduction to React Native</Text>
      <Text>App</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    // backgroundColor: "gray",
    backgroundColor: "#ececec",
    padding: 20,
  }
})