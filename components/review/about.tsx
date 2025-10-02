import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/const";

const AboutScreen = () => {
    const styles = StyleSheet.create({
        about: {
            fontSize: 30,
        }
    })

    return (
        <View>
            <Text style={[styles.about, globalStyles.globalFont]}>
                About screen
            </Text>
        </View>
    )
}

export default AboutScreen;