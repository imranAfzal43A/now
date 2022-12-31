import { useState, useEffect } from "react";
import { TextInput, Pressable, View, Image, FlatList, Text, ActivityIndicator, StatusBar, ScrollView } from "react-native";
import styles from "../styles";
import { app, db } from "../../config/firebaseConfig";
import { getAuth } from "firebase/auth";
import { collection, query, onSnapshot, addDoc, Timestamp, orderBy, doc, setDoc } from "firebase/firestore";
const Chat = (props) => {
    const auth = getAuth(app);
    const { chatId, otherUserE, otherUserN } = props.route.params;
    const docRef = collection(db, chatId);
    const [mes, setMes] = useState(null)
    const [mesData, setMesdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const userData = { Name: otherUserN, Email: otherUserE };
    const docRefUser = collection(db, auth.currentUser.email);
    const data = { mess: mes, sender: auth.currentUser.displayName, time: Timestamp.now() }
    const Loadchatdata = async () => {
        try {
            setLoading(true)
            const q = query(collection(db, chatId), orderBy('time', 'desc'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const messDoc = []
                querySnapshot.forEach((doc) => {
                    messDoc.push(doc.data());
                })
                setLoading(false);
                setMesdata(messDoc);
            })
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }
    const addChatUser = async () => {
        try {
            await addDoc(docRefUser, userData);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        addChatUser();
    }, [])
    useEffect(() => { Loadchatdata() }, [])
    const Showchat = ({ item }) => {
        return (
            item.sender == auth.currentUser.displayName ?
                <View style={styles.myChat} >
                    <Text style={{ fontSize: 14, fontWeight: "bold" }} >
                        You
                    </Text>
                    <Text>{item.mess}</Text>
                </View>
                :
                <View style={styles.otherChat}>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }} >
                        {item.sender}
                    </Text>
                    <Text>{item.mess}</Text>
                </View>
        )
    }
    const OnSend = async () => {
        setMes(null)
        try {
            await addDoc(docRef, data);
        } catch (e) {
            alert('Please check your internet connection')
            console.log(e)
        }
    }
    return (
        < View style={{ flex: 1 }} >

            <View style={{ flex: 200 }}>
                {!loading ? <FlatList data={mesData} renderItem={Showchat} /> : <ActivityIndicator size={'large'} />}
            </View>
            <ScrollView >
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput style={{ padding: 5, width: '50%' }} value={mes} multiline={true} placeholder="Message" onChangeText={(t) => setMes(t)} />
                    <Pressable onPress={() => OnSend()}>
                        <Image style={{ width: 60, height: 60 }} source={require('../../assets/send.png')} />
                    </Pressable>
                </View>
            </ScrollView>
            <StatusBar backgroundColor={'black'} />
        </ View>

    )
}
export default Chat;
