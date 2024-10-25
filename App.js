import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const num = `this is ${90} `;
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Welcome to react Native</Text>
      <Text style={{ backgroundColor: "gray",marginTop:20 }}>Welcome to react Native {num}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#343250",
    padding: 20,
    paddingTop: 60,
    height:"100%"
  },
  textHeader: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  }
})