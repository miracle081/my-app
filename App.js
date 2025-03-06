import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <ImageBackground source={{ uri: "https://dianapps.com/blog/wp-content/uploads/2022/12/How-to-improve-the-performance-of-a-React-Native-app-2048x1152.png" }} style={{ height: "100%", width: "100%", }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, color: "white", textAlign: "center" }}>React Native</Text>
        <Text style={styles.text}>
          React native is a framework for building mobile applications with JavaScript and React.
        </Text>
        <Image source={require("./assets/rn.jpg")} style={styles.img} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60,
    // backgroundColor: '#3d3c4b',
    height: "100%",
  },
  text: {
    fontSize: 18,
    color: "#ffffff",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#ffffff10",
    width: "100%",
  },
  img: {
    width: "100%",
    height: 200,
    marginTop: 20,
    borderRadius: 10,
  }
})