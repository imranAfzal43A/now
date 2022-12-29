import { useState } from "react";
import { SafeAreaView, TextInput, Pressable, Text, View } from "react-native";
import styles from "../styles";
const Login = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const onLogin = () => {
        if (email && password != null) {

        } else {
            alert('Please fill all the fields');
        }
    }
    return (
        <SafeAreaView>
            <View>
                <Text>Login to your <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'blue' }} >Now</Text> acount</Text>
                <TextInput style={styles.inputText} placeholder="email" onChangeText={(t) => setEmail(t)} />
                <TextInput placeholder="password" onChangeText={(t) => setPassword(t)} />
                <Pressable style={styles.button} onPress={() => onLogin()} ><Text>Login</Text></Pressable>
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
export default Login;