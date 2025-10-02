import { StyleSheet, Text, View } from "react-native"

const DetailScreen = () => {
    const styles = StyleSheet.create({
        review: {
            fontSize: 30,
            fontFamily: 'OpenSans-Regular',
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