import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 234, 167, 0.55)',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }, 
    titleItemTown: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 7
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "gray",
        marginVertical: 13
    }, 
    spacer: {
        height: 20,
    }, 
    button: {
        backgroundColor: "#FFCF81", 
        padding: 10,
        borderTopLeftRadius: 5, 
        borderBottomRightRadius: 5
    }, 
    textInput: {
        borderColor: "#FFCF81",
        borderWidth: 1,
        height: 40,
        borderRadius: 5,
        width: '50%'
    },
    scrollView: {
        width: "100%",
        height: "100%"
    },
    italicText: {
        fontStyle: 'italic',
        fontSize: 14
    },
    position: {
        textAlign: 'center', 
        paddingBottom: 5,
        fontStyle: 'italic',
    }
})