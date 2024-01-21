import { Button, ScrollView, Text, TextInput, View } from "react-native";
import { styles } from "../tools/styles";
import { useState } from "react";
import { Separator } from "../components/Separator";
import { City } from "../models/City";
import { SafeAreaView } from "react-native-safe-area-context";


export function MainScreen({ navigation }) {

    function createInitialCities() {
        const initialCities = [];
        for (let i = 0; i < 5; i++) {
          initialCities.push({
            title: 'Item ' + (i + 1)
          });
        }
        return initialCities;
      }
    
    const [text, setText] = useState('')
    const [city, setCity] = useState()
    const [cities, setCities] = useState([])

    const findTown = (city) => {

        if (city == "") return setCities([])

        fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/places?limit=5&offset=0&types=CITY&namePrefix=${city}`)
            .then(response => response.json())
            .then(json => {
                console.log("BLBLA :"  + JSON.stringify(json.data))

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
            <Text>Entrez une ville :</Text>

            <TextInput
                style={styles.textInput}
                placeholder="Nom de ville"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Button 
                style={styles.button}
                title="Click to find the town"
           // onPress={() => navigation.navigate('ListScreen')}
                onPress={() => findTown(text)}
            />

            <Text >{cities.length}</Text>
            {cities.map((citytoPlace, index) => (
                <ScrollView >
                    <City {...citytoPlace} key={citytoPlace.id} />

                    {(cities > 1) && <Separator/>}
                </ScrollView>
            ))}
           
        </View>
    )
}