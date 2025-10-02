import { Button, Text, View } from "react-native"

const HomeScreen = () => {
    return (
        <View>
            <Text style={{ fontSize: 40 }}>
                Home screen
            </Text>
            <Button
                title="View Detail"
                onPress={() => alert('me')}
            />
        </View>
    )
}

export default HomeScreen;