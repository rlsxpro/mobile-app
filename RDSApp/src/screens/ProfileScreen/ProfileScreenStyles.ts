
import { StyleSheet } from 'react-native';

export const profileScreenStyles = StyleSheet.create({
    mainview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#041484',

    },
    imageView: {
        marginVertical: 24,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200
    },
    buttonGroup: {
        flexDirection: "row"
    },
    button: {
        padding: 15
    }
})

export const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        marginTop: 4,
        marginBottom: 4,
        padding: 10,
        width: 120,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
