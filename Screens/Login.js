import { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card, Drawer } from "react-native-paper"

const LeftContent = props => <Avatar.Icon {...props} icon="account" />

export function LogIn() {
  const [active, setActive] = useState('');


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
        <ScrollView>
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

          <Button mode='contained'>Clear</Button>
          <Drawer.Section title="Some title">
            <Drawer.Item
              label="First Item"
              active={active === 'first'}
              onPress={() => setActive('first')}
            />
            <Drawer.Item
              label="Second Item"
              active={active === 'second'}
              onPress={() => setActive('second')}
            />
          </Drawer.Section>

          <Card>
            <Card.Title title="David James" subtitle="Post - 2m ago" left={LeftContent} />
            <Card.Content>
              <Text variant="titleLarge">David went to the City of NY, to see his parents</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>

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
    // justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 10,
    shadowColor: "gray",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { height: 10, width: 10 }
  },
  child: {
    backgroundColor: "#2dc3ff",
    padding: 20,
    margin: 3,
    height: 300,
  }
})