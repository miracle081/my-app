import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export function LogIn() {
  const notes = [
    { text: "Going to the market to get food", title: "Shopping" },
    { text: "Meeting my friends at school", title: "Study" },
    { text: "Telling someone about my products", title: "Marketing" },
    { text: "Helping my boss to get new products", title: "Purchase" },
  ]
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
      <View style={styles.container}>
        <Text>Log In</Text>
        {/* <ScrollView>
        </ScrollView> */}
        <View style={styles.parent}>
          <FlatList horizontal
            data={notes}
            renderItem={({ item }) => {
              return (
                <View style={styles.child}>
                  <Text>Title: {item.title}</Text>
                  <Text>{item.text}</Text>

                  <TouchableOpacity style={{ backgroundColor: "#216ddf", padding: 10, paddingHorizontal: 20, borderRadius: 50, display: "flex", position: "absolute", top: "50%", right: "45%" }}>
                    <Text style={{ color: "white", textAlign: "center" }}>Edit</Text>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
          {/* {notes.map((item, i) => {
              return (
                <View style={styles.child}>
                  <Text>{i}. Title: {item.title}</Text>
                  <Text>{item.text}</Text>
                </View>
              )
            })} */}
        </View>
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
    height: 300,
  }
})