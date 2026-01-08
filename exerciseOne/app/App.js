import { StyleSheet, Text, View,  Platform, ScrollView, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from '../components/PokemonCard';

const App = () => {

 const POKEMONS = [
  {
    id: "1",
    name: "Charmander",
    image: require("../assets/images/charmander.png"),
    type: "Fire",
    hp: 40,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  },
  {
    id: "2",
    name: "Squirtle",
    image: require("../assets/images/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  },
  {
    id: "3",
    name: "Pikachu",
    image: require("../assets/images/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"],
  },
  {
    id: "4",
    name: "Bulbasaur",
    image: require("../assets/images/bulbasaur.png"),
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  },
];


  
  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* <ScrollView> */}
        <FlatList
        data={POKEMONS}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PokemonCard {...item}/>}
        // or renderItem={(params) => <PokemonCard {...params.item}/>}
        contentContainerStyle={styles.list}
         showsVerticalScrollIndicator={false}
        />
      {/* </ScrollView> */}
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