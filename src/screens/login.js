import { useState } from "react";
import { TextInput, Pressable, Text, View, StatusBar, ActivityIndicator } from "react-native";
import styles from "../styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../config/firebaseConfig";
const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const auth = getAuth(app);
    const onLogin = async () => {
        if (email && password != null) {
            try {
                setLoading(true)
                await signInWithEmailAndPassword(auth, email, password).then(() => { setLoading(false); props.navigation.navigate('Home') }, () => { setLoading(false); alert('Email/Password is wrong') })
            } catch (e) {
                setLoading(false)
                console.log(e)
            }
        } else {
            setLoading(false)
            alert('Please fill all the fields');
        }
    }
    return (
        < View style={{ flex: 1 }}>
            <View style={{ flex: 9, alignItems: "center", justifyContent: "center" }} >
                <Text>Login to your <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'blue' }} >Now</Text> acount</Text>
                <TextInput style={styles.inputText} placeholder="email" onChangeText={(t) => setEmail(t)} />
                <TextInput style={styles.inputText} placeholder="password" onChangeText={(t) => setPassword(t)} />
                <Pressable style={{ alignSelf: 'flex-start', marginLeft: 40 }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'blue', margin: 5 }} onPress={() => props.navigation.navigate('Sign up')} >Forgot Password ?</Text>
                </Pressable>
                {!loading ? <Pressable style={styles.button} onPress={() => onLogin()} ><Text style={{ fontWeight: 'bold' }} >Login</Text></Pressable> : <ActivityIndicator />}
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}  >
                <Text>Don't have an acount?
                    <Pressable>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'blue' }} onPress={() => props.navigation.navigate('Sign up')} >Create acount </Text>
                    </Pressable>
                </Text>
            </View>
            <StatusBar barStyle={'light-content'} />
        </View>
    )
}
export default Login;