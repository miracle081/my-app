import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'

export function Layout() {
    const [searchValue, setSearchValue] = useState("car");

    let userText = "what the users typed";
    userText = "User is out"
    // console.log(userText);

    return (
        <View>
            <Text style={styles.header}>Layout {userText}</Text>
            <Text style={styles.header}>{searchValue}</Text>

            <TextInput
                placeholder="Search"
                style={styles.searchInpute}
                onChangeText={(inp) => { setSearchValue(inp) }}
            />
            <Button title="Create" color="red" onPress={() => { alert("Button clicked") }} />
        </View>
    )
}

const styles = StyleSheet.create({
    searchInpute: {
        // color: "white",
        // backgroundColor: "green",
        padding: 10,
        margin: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "green"
    },
    header: {
        color: "green",
        fontSize: 30,
        textAlign: "center"
    }
})