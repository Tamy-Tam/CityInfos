import { NavigationContainer } from "@react-navigation/native";
import { MainScreen } from "./screens/MainScreen";
import { ListScreen } from "./screens/ListScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Navigation() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MainScreen">
                <Stack.Screen 
                name="MainScreen" 
                component={MainScreen} 
                options={{title:"City Infos", headerStyle: {
                    backgroundColor: '#FFCF81'
                  },}} 
                />
                <Stack.Screen 
                name="ListScreen" 
                component={ListScreen}
                options={{title:"Les villes", headerStyle: "red"}} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}