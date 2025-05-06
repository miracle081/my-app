import { Button, FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export function Home() {
    const [search, setSearch] = useState("car");
    const [users, setUsers] = useState([
        { id: 1, name: "Harry Potter", img: require("../assets/bg.jpg") },
        { id: 1, name: "John Wick", img: require("../assets/user.jpg") },
        { id: 1, name: "James Bond", img: require("../assets/rn.jpg") },
        { id: 1, name: "Tony Stark", img: require("../assets/icon.png") },
        { id: 1, name: "Bruce Wayne", img: require("../assets/user.jpg") },
    ]);

    function handleSearch(inp) {
        console.log(inp);

    }

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight, }}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image source={require("../assets/user.jpg")} style={styles.img} />
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInpute}
                        onChangeText={(inp) => { handleSearch(inp) }}
                    />
                    {/* <Button title="Create" color="red" onPress={() => { alert("Button clicked") }} /> */}
                    <TouchableOpacity onPress={() => { setSearch("Telegram"); alert("Button clicked") }} style={styles.btn}>
                        <Text style={{ color: "white", fontSize: 20 }}>Search</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    {/* <Text style={{ fontSize: 20 }}>{search}</Text> */}
                    <View style={{ marginTop: 20, gap: 20, }}>
                        <FlatList
                            horizontal
                            data={users}
                            contentContainerStyle={{ gap: 10 }}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ alignItems: "center" }}>
                                        <Image source={item.img} style={[styles.img, { width: 100, height: 100 }]} />
                                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                    </View>
                                )
                            }}
                        />
                        {/* {
                            users.map((item) => {
                                return (
                                    <View style={{ alignItems: "center" }}>
                                        <Image source={require("../assets/user.jpg")} style={[styles.img, { width: 100, height: 100 }]} />
                                        <Text style={{ fontSize: 20 }}>Telegram</Text>
                                    </View>
                                )
                            })
                        } */}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null
        padding: 20,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    searchInpute: {
        padding: 10,
        borderRadius: 30,
        fontSize: 18,
        flex: 1,
        borderWidth: 1,
        borderColor: "#5d21b7",
    },
    btn: {
        backgroundColor: "#5d21b7",
        borderRadius: 30,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    }
})