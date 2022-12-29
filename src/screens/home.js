import { SafeAreaView,Pressable } from "react-native";
import styles from "../styles";
const Home=()=>{
return(
    <SafeAreaView>
              <Pressable style={styles.button} onPress={() => null} ><Text>Chat</Text></Pressable>
    </SafeAreaView>
)
}
export default Home;