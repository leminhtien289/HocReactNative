import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import AboutScreen from "../review/about";
import AppHeader from "./app.header";

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator
        // screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ header: () => <AppHeader /> }}
            />
            <Stack.Screen
                name="review-detail"
                component={DetailScreen}
                options={{ title: 'Chi tiết Review' }} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}

const AppNavigation = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
        // screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen
                name="Home1"
                component={HomeLayout}
                options={{
                    title: "Trang chủ",
                    header: () => <></>
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{
                    title: "Thông tin",
                    header: () => <AppHeader />
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppNavigation;