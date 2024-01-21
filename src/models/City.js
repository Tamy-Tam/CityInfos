import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../tools/styles';

export function City(props) {
  const population = props.population.toLocaleString('fr-FR')
    return (
        <View className="city">
            <Text className="city--title" style= {styles.titleItemTown}>{props.name}</Text>
            <Text className="city--position" style={styles.position}>({props.latitude}, {props.longitude})</Text>
            <Text className="city--country" style={{fontWeight: 'bold'}}>
                 <Text style={styles.italicText}>Pays : </Text>
              {props.country}
            </Text>
            <Text className="city--region">
              <Text style={styles.italicText}>Région : </Text>
                {props.region}
              </Text>
            <Text className="city--population">
              <Text style={styles.italicText}>Population : </Text>
              {population} habitants
            </Text>
        </View>
    )
}

/*
              {props.population.toLocalString('fr-FR')} habitants
*/