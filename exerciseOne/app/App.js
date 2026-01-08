import { StyleSheet, Text, View,  Platform, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from '../components/PokemonCard';

const App = () => {

  const charmanderData = {
    name: "Charmander",
    image: require("../assets/images/charmander.png"),
    type: "Fire",
    hp: 40,
    moves: ["Scratch" , "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"] 
  }
  const bulbasaurData = {
  name: "Bulbasaur",
  image: require("../assets/images/bulbasaur.png"), // Replace with the actual image
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

const pikachuData = {
  name: "Pikachu",
  image: require("../assets/images/pikachu.png"), // Replace with the actual image
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weaknesses: ["Ground"],
};

const squirtleData = {
  name: "Squirtle",
  image: require("../assets/images/squirtle.png"), // Replace with the actual image
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};


  
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView>
        <View style={styles.container}>
          <PokemonCard {...charmanderData}/>
          <PokemonCard {...squirtleData}/>
          <PokemonCard {...pikachuData}/>
          <PokemonCard {...bulbasaurData}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App


const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25: 0
  },
  
})