import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    inputText: {
        width: '80%',
        height: 60,
        backgroundColor: '#F8F4EA',
        elevation: 2,
        margin: 3,
        padding: 5,
        borderRadius: 10,
        alignSelf: "center"
    },
    button: {
        width: '40%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        borderRadius: 10,
        backgroundColor: '#2C74B3',
        margin: 3,
        padding: 5,
        alignSelf: "center"
    },
    showUserStyle: {
        width: '100%',
        height: 60,
        backgroundColor: '#ECE8DD',
        elevation: 3,
        margin: 3,
        padding: 15,
        borderRadius: 10,
        alignSelf: "center"
    },
    myChat: {
        width: '80%',
        backgroundColor: '#ECE8DD',
        elevation: 3,
        margin: 3,
        padding: 15,
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    otherChat: {
        width: '80%',
        backgroundColor: '#F8F4EA',
        elevation: 3,
        margin: 3,
        padding: 5,
        borderRadius: 10,
        alignSelf: 'flex-start'
    }
})
export default styles;