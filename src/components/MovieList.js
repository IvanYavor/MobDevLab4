import React, { useContext } from "react";
import { Alert, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { MovieContext } from "providers/MovieProvider";

import { MovieCard } from "components/MovieCard/MovieCard";

export const MovieList = ({ movies, onOpenMovieDetails }) => {
  const { removeMovie } = useContext(MovieContext);

  return (
    <View style={{ height: "100%" }}>
      {movies.map((movie, idx) => (
        <TouchableOpacity
          onPress={() => onOpenMovieDetails(movie.id)}
          onLongPress={() => openRemoveMovieAlert(movie, removeMovie)}
          activeOpacity={0.6}
          key={idx}
        >
          <MovieCard movie={movie} />
        </TouchableOpacity>
      ))}

      {!movies.length && (
        <View style={{ width: "100%", paddingVertical: 20 }}>
          <Text style={{ textAlign: "center" }}>No movies to display</Text>
        </View>
      )}
    </View>
  );
};

function openRemoveMovieAlert(movie, onRemove) {
  Alert.alert("Remove movie", `Do you want to remove movie "${movie.Title}"?`, [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: "Remove",
      onPress: () => onRemove(movie.id),
      style: "destructive",
    },
  ]);
}
