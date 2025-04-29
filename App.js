import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={{ color: "green", fontSize: 25, textAlign: "center", marginBottom: 10 }} >Introduction to React Native</Text>
      <Text>React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.</Text>
      <Image source={require("./assets/bg.jpg")} style={styles.img} />
      <ImageBackground
        style={styles.bg}
        source={{ uri: "https://dianapps.com/blog/wp-content/uploads/2022/12/How-to-improve-the-performance-of-a-React-Native-app.png" }}
        borderRadius={20}
      >
        <View style={styles.overlay}>

          <Text style={styles.header}>React Native</Text>
          <Text style={styles.header}>Best Framework</Text>
          <Text style={[styles.header, { fontSize: 20 }]}>React Native brings the best parts of developing with React to native development. It's a best-in-class JavaScript library for building user interfaces.</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    // backgroundColor: "gray",
    backgroundColor: "#ececec",
    padding: 20,
  },
  img: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginVertical: 10,
  },
  bg: {
    width: "100%",
    height: 300,
  },
  overlay: {
    backgroundColor: "#0000007a",
    width: "100%",
    height: "100%",
    padding: 20,
    borderRadius: 20
  },
  header: {
    color: "white",
    fontSize: 40
  }
})