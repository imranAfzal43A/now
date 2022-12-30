import { useState } from "react";
import { TextInput, Pressable, Text, View, StatusBar, ActivityIndicator } from "react-native";
import styles from "../styles";
import { app, db } from "../../config/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const Signup = (props) => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const auth = getAuth(app);
    const data = { Name: name, Email: email, Password: password };
    const onSignup = async () => {
        if (name && email && password != null) {
            setLoading(true)
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                const docRef = doc(db, 'users', auth.currentUser.email);
                try {
                    await updateProfile(auth.currentUser, { displayName: name })
                    await setDoc(docRef, data)
                    setLoading(false)
                    alert('Acount created successfully')
                    props.navigation.goBack();
                } catch (e) {
                    setLoading(false)
                    console.log('error in adding document ', e)
                }
            } catch (e) {
                setLoading(false)
                alert('Email already in use')
                console.log(e)
            }
        } else {
            setLoading(false)
            alert('Please fill all the fields');
        }
    }
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Signup on <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'blue' }} >Now</Text></Text>
            <TextInput style={styles.inputText} placeholder="name" onChangeText={(t) => setName(t)} />
            <TextInput style={styles.inputText} placeholder="email" onChangeText={(t) => setEmail(t)} />
            <TextInput style={styles.inputText} placeholder="password" onChangeText={(t) => setPassword(t)} />
            <Text>By signing up you are agree with
                <Pressable>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'blue' }} onPress={() => alert('Terms and conditions')} >Terms & Conditions </Text>
                </Pressable>
            </Text>
            {!loading ? <Pressable style={styles.button} onPress={() => onSignup()} ><Text>Sign up</Text></Pressable> : <ActivityIndicator />}
            <StatusBar barStyle={'light-content'} />
        </View>
    )
}
export default Signup;