import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../tools/styles";
import { useState } from "react";
import { Separator } from "../components/Separator";
import { City } from "../models/City";
import { Spacer } from "../components/Spacer";


export function MainScreen({ navigation }) {

    const [text, setText] = useState('')
    const [cities, setCities] = useState([])

    const findTown = (city) => {

        if (city == "") return setCities([])

        fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/places?limit=10&offset=0&types=CITY&namePrefix=${city}`)
            .then(response => response.json())
            .then(json => {
                const newData = json.data.map(cityFromapi => ({
                    id: cityFromapi.id,
                    name: cityFromapi.name,
                    country: cityFromapi.country,
                    region: cityFromapi.region,
                    latitude: cityFromapi.latitude,
                    longitude: cityFromapi.longitude,
                    population: cityFromapi.population,
                  }));

                setCities([...newData]);

            })
            .catch(error => {
                console.error(error);
            })
        }

    return (
        <View style={styles.container}>
            <Text  style={styles.title}>Entrez une ville :</Text>

            <Spacer/>

            <TextInput
                style={styles.textInput}
                placeholder="Nom de ville"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />

            <Spacer/>

            <TouchableOpacity
                onPress={() => findTown(text)}
                style={styles.button}
                accessibilityLabel="Learn more about a city"
            >
              <Text style={{ color: '#fff' }}>Clicker pour en savoir plus !</Text>
            </TouchableOpacity>

            <Spacer/>

            <FlatList
              ItemSeparatorComponent={ <Separator/> }
               data={cities}
               renderItem={({item, index}) => (
                    <City {...item} key={item.id} />
               )
               }
            />
        
        </View>
    )
}