import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";


export function LogIn() {

  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
      <View style={styles.container}>
        <Text>Log In</Text>
        <ScrollView>
          <View style={styles.parent}>
            <View style={styles.child}></View>
            <View style={styles.child}></View>
            <View style={styles.child}></View>
            <View style={styles.child}></View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  parent: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    // flexDirection: "row",
    // justifyContent: "space-between"
  },
  child: {
    backgroundColor: "#2dc3ff",
    padding: 20,
    margin: 3,
    height: 300
  }
})