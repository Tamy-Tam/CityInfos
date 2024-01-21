import React from 'react';
import { View, Text } from 'react-native';

/*export class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      country: props.country,
      region: props.region,
      latitude: props.latitude,
      longitude: props.longitude,
      population: props.population,
    };
  }
}*/

export function City(props) {
    return (
        <View className="city">
            <Text className="city--title">{props.name}</Text>
            <Text className="city--country" style={{fontWeight: 'bold'}}>Pays : {props.country}</Text>
            <Text className="city--region">Région: {props.region}</Text>
            <Text className="city--position">({props.latitude} - {props.longitude})</Text>
            <Text className="city--population">Population : {props.population}</Text>
        </View>
    )
}