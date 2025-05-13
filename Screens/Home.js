import { Alert, Button as RNButton, FlatList, Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { useState, useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faComment, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Button, Card } from "react-native-paper";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { MontserratAlternates_400Regular, MontserratAlternates_600SemiBold } from "@expo-google-fonts/montserrat-alternates";

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
export function Home() {
    const [search, setSearch] = useState("car");
    const [appIsReady, setAppIsReady] = useState(false);
    const [users, setUsers] = useState([
        { id: 3, name: "James Bond", img: require("../assets/rn.jpg") },
        { id: 1, name: "Harry Potter", img: require("../assets/bg.jpg") },
        { id: 2, name: "John Wick", img: require("../assets/user.jpg") },
        { id: 4, name: "Tony Stark", img: require("../assets/icon.png") },
        { id: 5, name: "Bruce Wayne", img: require("../assets/user.jpg") },
    ]);

    function handleSearch(inp) {
        setSearch(inp);
        ToastAndroid.showWithGravity(
            "Your searched word(s) was not found",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );
    }

    function handleSearchPress() {
        Alert.alert(
            "Search",
            "Your searched word(s) was not found",
            [
                { text: "Try Again", onPress: () => handleSearchPress() },
                { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "destructive" }
            ],
        )
    }

    useEffect(() => {
        setSearch("car");
        async function prepare() {
            try {
                await Font.loadAsync({ MontserratAlternates_400Regular, MontserratAlternates_600SemiBold });
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    useEffect(() => {
        // console.log("Search input changed: ", search);
    }, [search])

    useCallback(() => {
        if (appIsReady) {
            SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    const fonts = {
        text400: "MontserratAlternates_400Regular",
        text600: "MontserratAlternates_600SemiBold",
    }


    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight, }}>
            {/* <StatusBar hidden={false} backgroundColor="black" /> */}
            <View style={styles.container}>
                <View style={{
                    flexDirection: "row", gap: 10, marginBottom: 10,
                }}>
                    <Image source={require("../assets/user.jpg")} style={styles.img
                    } />
                    <TextInput
                        placeholder="Search"
                        style={styles.searchInpute}
                        onChangeText={handleSearch}
                    />
                    {/* <Button title="Create" color="red" onPress={() => { alert("Button clicked") }} /> */}
                    <TouchableOpacity onPress={() => { setSearch("Telegram"); handleSearchPress() }} style={styles.btn}>
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
                                        <Text style={{ fontSize: 20, fontFamily: "MontserratAlternates_400Regular" }}>{item.name}</Text>
                                        <TouchableOpacity style={styles.deleteBTN}>
                                            <Text style={{ color: "white" }}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                            keyExtractor={(item) => item.id}
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

                    {/* <Card>
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
                    </Card> */}

                    {users.map(item => {
                        return (
                            <View key={item.id} style={{ marginTop: 10, paddingTop: 20 }}>
                                <View style={styles.user}>
                                    <Image source={item.img} style={[styles.img, { width: 70, height: 70 }]} />
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: "200", fontFamily: fonts.text400 }}>{item.name}</Text>
                                        <Text style={styles.handle}>@telegram</Text>
                                        <Text style={styles.handle}>5 min ago</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, marginBottom: 10, fontFamily: "MontserratAlternates_400Regular" }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
                                </Text>
                                <Image source={require("../assets/bg.jpg")} style={{ width: "100%", height: 200, borderRadius: 20 }} />
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10, borderbottomWidth: 1, borderBottomColor: "#ccc", paddingBottom: 10 }}>
                                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                        <FontAwesomeIcon icon={faThumbsUp} size={24} />
                                        <Text style={{ fontFamily: "MontserratAlternates_400Regular" }}>654</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                        <FontAwesomeIcon icon={faComment} size={24} />
                                        <Text style={{ fontFamily: "MontserratAlternates_400Regular" }}>1,584</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
                                        <FontAwesomeIcon icon={faRetweet} size={24} />
                                        <Text style={{ fontFamily: "MontserratAlternates_400Regular" }}>54</Text>
                                    </View>
                                </View>
                                <Button mode="contained">Save</Button>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
        padding: 20,
        flex: 1
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#5d21b7",
    },
    searchInpute: {
        padding: 10,
        borderRadius: 30,
        fontSize: 18,
        flex: 1,
        borderWidth: 1,
        borderColor: "#5d21b7",
        fontFamily: "MontserratAlternates_400Regular",
        backgroundColor: "#fefefe",
        shadowColor: "#000000",
        shadowOffset: {
            width: 8,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,
    },
    btn: {
        backgroundColor: "#5d21b7",
        borderRadius: 30,
        paddingHorizontal: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    deleteBTN: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "#a73e3e",
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    user: {
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        gap: 15,
        marginBottom: 20,
    },
    handle: {
        fontSize: 14,
        color: "gray",
        fontStyle: "italic",
        fontFamily: "MontserratAlternates_400Regular"
    }
})