import { StyleSheet, Text, View } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";

const DetailScreen = () => {
    const styles = StyleSheet.create({
        review: {
            fontSize: 30,
            fontFamily: OPENSANS_REGULAR
        }
    });

    return (
        <View>
            <Text style={styles.review}>
                Detail screen
            </Text>
        </View>
    )
}

export default DetailScreen;