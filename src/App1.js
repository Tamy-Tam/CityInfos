import * as React from 'react';
import Navigation from './Navigation';

/*function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App1Bis() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="MainScreen">
              <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Overview' }}
              />
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="ListScreen" component={ListScreen} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}*/
function App1() {
  return (
    <Navigation/>
  );
}

export default App1;