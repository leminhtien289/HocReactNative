import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import AboutScreen from "../review/about";

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Trang Chủ' }}
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
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home1"
                component={HomeLayout}
                options={{ title: "Trang chủ" }}
            />
            <Drawer.Screen
                name="About"
                component={AboutScreen}
                options={{ title: "Thông tin" }}
            />
            <Drawer.Screen name="Chi tiết Review" component={DetailScreen} />
        </Drawer.Navigator>
    )
}

export default AppNavigation;