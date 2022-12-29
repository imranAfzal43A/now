import { SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, View } from "react-native";
import styles from "../styles";
const Chat = (props) => {
    return (
        <SafeAreaView>
            <KeyboardAvoidingView>
                <View style={{ flex: 5 }}>

                </View>
                <View style={{ flex: 1,backgroundColor:'blue' }} >
                    <TextInput placeholder="Message" onChangeText={(t) => setPassword(t)} />
                    <Pressable style={styles.button} onPress={() => null} ><Text>send</Text></Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default Chat;
