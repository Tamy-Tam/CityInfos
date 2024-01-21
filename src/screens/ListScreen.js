import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "../tools/styles";
import { Separator } from "../components/Separator";


export function ListScreen({navigation}) {
    return (
        <ScrollView>
            <ListItem></ListItem>
            <Separator></Separator>
            <ListItem></ListItem>
            <Separator></Separator>
            <ListItem></ListItem>
        </ScrollView>
    )
}


const ListItem = () => {
    return (
        <View>
            <Text style={styles.titleItemTown}>Item 1 Title</Text>
        </View>
    )
}