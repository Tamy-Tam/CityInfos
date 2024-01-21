import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 234, 167, 0.55)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleItemTown: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "gray"
    }, 
    button: {
        backgroundColor: "#FFCF81"
    }, 
    textInput: {
        borderColor: "#FFCF81",
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        width: '50%'
    }
})