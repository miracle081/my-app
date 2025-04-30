import { Alert, Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'

export function Layout() {
    const [searchValue, setSearchValue] = useState("car");
    const [data, setData] = useState(['Food', 'Laptop', 'Lamborghini', 'House', 'TV', 'Land']);

    let userText = "what the users typed";
    userText = "User is out"
    // console.log(userText);
    function handlePress() {
        Alert.alert(
            "Search Words",
            "Your searched word(s)  was not found",
            [{ text: "Try again", onPress: () => handlePress() }, { text: "Try Later" }]
        )
    }
    return (
        <View>
            <Text style={styles.header}>Layout</Text>
            <View style={{ flexDirection: "row", gap: 5, marginVertical: 10, }}>
                <TextInput
                    placeholder="Search"
                    style={styles.searchInpute}
                    onChangeText={(inp) => { setSearchValue(inp) }}
                />
                {/* <Button title="Create" color="red" onPress={() => { alert("Button clicked") }} /> */}

                <TouchableOpacity onPress={() => handlePress()} style={{ backgroundColor: "#22044f", padding: 10, paddingHorizontal: 15, borderRadius: 50, alignItems: "center" }}>
                    <Text style={{ color: "white" }}>Search</Text>
                </TouchableOpacity>
            </View>

            <FlatList style={{ marginVertical: 20, }}
                contentContainerStyle={{ gap: 10 }}
                columnWrapperStyle={{ gap: 10 }}
                numColumns={2}
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flex: 1, display: item === true ? "none" : "flex" }}>
                            <Image source={require("../assets/bg.jpg")} style={styles.img} />
                            <Text>{item}</Text>
                            <TouchableOpacity onPress={() => { setData(data.filter(text => text != item)) }} style={styles.remove}>
                                <Text style={{ color: "#22044f" }}>X</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    searchInpute: {
        // color: "white",
        // backgroundColor: "green",
        padding: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#22044f",
        flex: 1
    },
    header: {
        color: "#22044f",
        fontSize: 30,
        textAlign: "center"
    },
    img: {
        width: "100%",
        height: 100,
        borderRadius: 10
    },
    remove: {
        backgroundColor: "white",
        width: 25,
        height: 25,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 5,
        right: 5,
        zIndex: 1
    }
})