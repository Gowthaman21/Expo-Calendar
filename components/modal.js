import React, { useState } from "react";
import { Alert, Button, Modal, StyleSheet, Text, View, TextInput } from "react-native";


const InModal = ({ modalVisible, setModalVisible, date, mark, setMark }) => {
    const [msg, setMsg] = useState("Remainder me")
    const remaind = () => {
        let temp = mark
        temp[date] = { selected: true, marked: true, selectedColor: 'blue', msg: msg }
        setMark(temp)
        console.log(mark)
        setModalVisible(false)
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontWeight: 'bold' }}>Remainder message</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setMsg}
                            value={msg}
                            placeholder=""

                        />
                        <Button
                            title="Remind!"
                            color="#ef233c"
                            onPress={remaind}
                        />
                    </View>
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
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
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#ef233c",
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

export default InModal;