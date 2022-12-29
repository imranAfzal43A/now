import { useState } from "react";
import { SafeAreaView, TextInput, Pressable, Text, View } from "react-native";
import styles from "../styles";
const Signup = (props) => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const onSignup = () => {
        if (name && email && password != null) {

        } else {
            alert('Please fill all the fields');
        }
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Signun on <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'blue' }} >Now</Text></Text>
                <TextInput style={styles.inputText} placeholder="name" onChangeText={(t) => setName(t)} />
                <TextInput style={styles.inputText} placeholder="email" onChangeText={(t) => setEmail(t)} />
                <TextInput placeholder="password" onChangeText={(t) => setPassword(t)} />
                <Pressable style={styles.button} onPress={() => onSignup()} ><Text>Login</Text></Pressable>
            </View>
            <View>
                <Text>Don't have an acount?
                    <Pressable>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'blue' }} >Create acount </Text>
                    </Pressable>
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default Signup;