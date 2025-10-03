import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
    },

    header: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: "space-between",
        alignContent: 'center',
        paddingVertical: 10,
        paddingBottom: 20
    },
    groupInput: {
        marginBottom: 15
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        marginVertical: 10,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    }
});

interface IProps {
    modalVisible: boolean;
    setModalVisible: (v: boolean) => void;
    addNew: any
}

const CreateModal = (props: IProps) => {
    const { modalVisible, setModalVisible, addNew } = props;
    const [title, setTitle] = useState("");
    const [star, setStar] = useState("");

    const handleSubmit = () => {
        if (!title) {
            Alert.alert("Thông tin không hợp lệ", "Nội dung không được để trống")
            return;
        }

        if (!star) {
            Alert.alert("Thông tin không hợp lệ", "Rating không được để trống")
            return;
        }
        addNew({
            id: randomInteger(2, 2000000),
            title,
            star,
        })
        setModalVisible(false);
        setStar("");
        setTitle("");
    }

    function randomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) +
            min;
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >

                <View style={styles.container}>
                    {/* header */}
                    <View style={styles.header}>
                        <Text style={{ fontSize: 25 }}>
                            Create a review
                        </Text>
                        <AntDesign
                            name="close"
                            size={24}
                            color="black"
                            onPress={() => {
                                setModalVisible(false)
                                setTitle("");
                                setStar("");
                            }}
                        />
                    </View>

                    {/* body */}
                    <View>
                        <View style={styles.groupInput}>
                            <Text style={styles.text}>Nội dung</Text>
                            <TextInput
                                value={title}
                                style={styles.input}
                                onChangeText={(v) => setTitle(v)}
                            />
                        </View>
                        <View>
                            <Text style={styles.text}>Rating</Text>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                onChangeText={(v) => setStar(v)}
                            />
                        </View>
                    </View>

                    {/* footer */}
                    <View>
                        <View style={{ marginTop: 20 }}>
                            <Button
                                title="Add"
                                onPress={() => handleSubmit()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default CreateModal;