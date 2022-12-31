import { SafeAreaView, Text, FlatList, ActivityIndicator, TouchableOpacity, StatusBar, Pressable, Image } from "react-native";
import styles from "../styles";
import { app, db } from "../../config/firebaseConfig";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
const Home = (props) => {
    const auth = getAuth(app);
    const [userData, setUserdata] = useState([]);
    const [loading, setLoading] = useState(false);
    const loginUser = auth.currentUser.email;
    const Loaduserdata = async () => {
        try {
            setLoading(true)
            const q = query(collection(db, auth.currentUser.email));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const userDoc = []
                querySnapshot.forEach((doc) => {
                    userDoc.push(doc.data());
                })
                setLoading(false)
                setUserdata(userDoc);
            })
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }
    const generateChatId = (emailLogin, emailOther) => {
        const arr = [emailLogin, emailOther];
        arr.sort();
        return arr[0] + '_' + arr[1];
    }
    useEffect(() => { Loaduserdata() }, [])
    const ShowUsers = ({ item }) => {
        return (
            item.Name == auth.currentUser.displayName ?
                null
                :
                <TouchableOpacity style={styles.showUserStyle} onPress={() => props.navigation.navigate('Chat', { chatId: generateChatId(loginUser, item.Email), otherUserE: item.Email, otherUserN: item.Name })} >
                    <Text style={{ fontSize: 14, fontWeight: "bold" }} >
                        {item.Name}
                    </Text>
                </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.inputText} >Wellcome Dear <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'blue' }}>{auth.currentUser.displayName}</Text></Text>
            {!loading ? <FlatList data={userData} renderItem={ShowUsers} keyExtractor={item => item.Email} /> : <ActivityIndicator size={'large'} />}
            <Pressable style={styles.Fab} onPress={() => props.navigation.navigate('Users')}>
                <Image style={{ width: 50, height: 50, margin: 2 }} source={require('../../assets/addChat.png')} />
            </Pressable>
            <StatusBar backgroundColor={'black'} />
        </SafeAreaView>
    )
}
export default Home;