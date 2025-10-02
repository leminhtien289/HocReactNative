import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface IReview {
    id: number;
    title: string;
    star: number;
}

const styles = StyleSheet.create({
    reviewItem: {
        padding: 15,
        backgroundColor: '#ccc',
        marginBottom: 15
    }
});

const HomeScreen = (props: any) => {
    const { navigation } = props;

    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: 'React Native', star: 3 },
        { id: 2, title: 'React Native', star: 4 },
        { id: 3, title: 'React Native', star: 5 },
    ]);

    return (
        <View>
            <Text style={{ fontSize: 30 }}>
                Review list:
            </Text>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id + ""}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('review-detail')}
                            >
                                <View style={styles.reviewItem}>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default HomeScreen;