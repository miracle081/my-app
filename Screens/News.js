import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export function News() {
  return (
    <ImageBackground source={require("../assets/bg.jpg")}>
      <View style={{ padding: 50, paddingHorizontal: 10, backgroundColor: "#011d484a", height: "100%", }}>
        <Text style={{ color: "#ff7700", margin: 10, fontSize: 35, textAlign: "center" }}>React Native</Text>
        <Text style={{ color: "white" }}>Open up App.js to start working on your app!</Text>
        <Image source={require("../assets/rn.jpg")} style={{ width: "100%", height: 230, marginVertical: 20 }} />
        <Image source={{ uri: "https://www.uplers.com/wp-content/uploads/2022/09/React-BLOG-IMAGES-01-891x505.jpg" }} style={{ width: "100%", height: 230, marginVertical: 20 }} />
      </View>
    </ImageBackground>
  );
}


