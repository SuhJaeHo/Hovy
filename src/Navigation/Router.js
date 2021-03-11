import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../Screens/Main";
import LocationSearch from "../Screens/LocationSearch";

const Stack = createStackNavigator();

const Router = (props) => {
    
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Main"}
          component={Main}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"LocationSearch"}
          component={LocationSearch}
          options={{
            title: "Search your destination"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;