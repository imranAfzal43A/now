import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    inputText: {
        width: '90%',
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
        backgroundColor: '#F2DEBA',
        margin: 3,
        padding: 5,
        alignSelf: "center"
    },
    Fab: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10, right: 10,
    },
    showUserStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF6C3',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 15,
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