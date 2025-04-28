import { View, Text, Image } from 'react-native';
import { Layout } from './Screens/Layout';


export default function App() {
  return (
    <View style={{ marginTop: 60 }}>
      <Layout />
      {/* <Text style={{ fontSize: 30, color: "blue", textAlign: "center" }}>App - React Native.</Text>
      <Image source={require("./assets/rn.jpg")}
        style={{ width: "100%", height: 230, marginVertical: 20 }}
      />
      <Text>React Native is fun</Text> */}
    </View>
  );
}
