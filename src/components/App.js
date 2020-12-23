import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "styled-components/native";

import { theme } from "styles/theme";
import { Routes } from "constants/Routes";
import { MovieProvider } from "providers/MovieProvider";

import { MovieListFrame } from "frames/MovieListFrame";
import { MovieDetailsFrame } from "frames/MovieDetailsFrame";
import { addMovieFrame } from "frames/addMovieFrame";

const Tab = createBottomTabNavigator();
const Movie = createStackNavigator();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MovieProvider>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName = "md-home";

                if (route.name === Routes.MOVIES) {
                  iconName = "md-film";
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name={Routes.MOVIES}>
              {() => (
                <Movie.Navigator>
                  <Movie.Screen
                    name={Routes.MOVIES_LIST}
                    component={MovieListFrame}
                  />
                  <Movie.Screen
                    name={Routes.MOVIE_DETAILS}
                    component={MovieDetailsFrame}
                  />
                  <Movie.Screen
                    name={Routes.ADD_MOVIE}
                    component={addMovieFrame}
                  />
                </Movie.Navigator>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </MovieProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};
