import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBorderAll, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Avatar, Card, Searchbar, Button } from 'react-native-paper';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { RubikWetPaint_400Regular } from '@expo-google-fonts/rubik-wet-paint';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export function Layout() {
    const [searchValue, setSearchValue] = useState("car");
    const [data, setData] = useState(['Food', 'Laptop', 'Lamborghini', 'House', 'TV', 'Land']);
    const [searchQuery, setSearchQuery] = useState('');
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({ Pacifico_400Regular });
                await Font.loadAsync({ RubikWetPaint_400Regular });
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(() => {
        if (appIsReady) {
            SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

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
        <View style={{ flex: 1 }}>
            <Text style={styles.header}>Layout</Text>

            <ScrollView >

                <View style={{ flexDirection: "row", gap: 5, marginVertical: 10, }}>
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInpute}
                        onChangeText={(inp) => { setSearchValue(inp) }}
                        value={searchValue}
                    />
                    {/* <Button title="Create" color="red" onPress={() => { alert("Button clicked") }} /> */}

                    <TouchableOpacity onPress={() => handlePress()} style={{ backgroundColor: "#22044f", padding: 10, paddingHorizontal: 15, borderRadius: 50, alignItems: "center" }}>
                        <Text style={{ color: "white" }}>Search</Text>
                    </TouchableOpacity>
                </View>

                <View>
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
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    v
                />

                <Card style={{ marginTop: 10 }}>
                    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
                    <Card.Content>
                        <Text variant="titleLarge">Card title</Text>
                        <Text variant="bodyMedium">Card content</Text>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                    <Card.Actions>
                        <Button>Cancel</Button>
                        <Button>Ok</Button>
                    </Card.Actions>
                </Card>
            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 2, borderColor: "#22044f", borderRadius: 20, padding: 10, marginTop: 10 }}>
                <FontAwesomeIcon icon={faHome} size={30} color="#22044f" />
                <FontAwesomeIcon icon={faBorderAll} size={30} color="#22044f" />
                <FontAwesomeIcon icon={faUser} size={30} color="#22044f" />
            </View>
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
        textAlign: "center",
        // fontFamily: "Pacifico_400Regular",
        fontFamily: "RubikWetPaint_400Regular",
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