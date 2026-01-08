import { useEffect, useState } from 'react'
import { StyleSheet, Platform, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const App = () => {
  const [pokemons, setPokemons] = useState([])

  // const fetchPokemon = async() => {
  //   try {
  //     const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  //   const data = await res.json()
  //   console.log(data)
  //   } catch(err){
  //     console.error(err.message)
  //   }
  // }


  
 const fetchPokemon = async() => {
      try {
          // 1️⃣ Get list of Pokémon
      const listRes = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );

       // 2️⃣ Fetch details for each Pokémon
        const pokemonDetails = await Promise.all(
        listRes.data.results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          const data = res.data;
          return {
            id: data.id.toString(),
            name: data.name,
            image: { uri: data.sprites?.front_default },
            type: data.types?.[0]?.type?.name ?? "unknown",
            // hp:
            //   data.stats?.find(
            //     (stat) => stat.stat.name === "hp"
            //   )?.base_stat ?? 0,
            moves:
              data.moves?.slice(0, 10).map(m => m.move.name) ?? [],
            // weaknesses: [],
          };
        })
      );
        setPokemons(pokemonDetails)
        
      } catch(err){
        console.error(err.message)
      }
    }
  
    useEffect(() => {
      fetchPokemon()
    }, [])
  
  return (
    pokemons && (
   <SafeAreaView style={styles.safeContainer}>
        <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <PokemonCard {...item}/>}
        // or renderItem={(params) => <PokemonCard {...params.item}/>}
        contentContainerStyle={styles.list}
         showsVerticalScrollIndicator={false}
        />
    </SafeAreaView>)
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