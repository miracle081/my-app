import { Button, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {

    return (
        <SafeAreaView style={{ marginTop: StatusBar.currentHeight, }}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image source={require("../assets/user.jpg")} style={styles.img} />
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInpute}
                        onChangeText={(inp) => { console.log(inp) }}
                    />
                    {/* <Button title="Create" color="red" onPress={() => { alert("Button clicked") }} /> */}
                    <TouchableOpacity onPress={() => { alert("Button clicked") }} style={styles.btn}>
                        <Text style={{ color: "white", fontSize: 20 }}>Search</Text>
                    </TouchableOpacity>
                </View>
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