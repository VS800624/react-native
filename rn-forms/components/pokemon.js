import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList, SectionList} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { groupedData, pokemonList } from '../constants/data';


export default function() {
  return (
     <View className="p-4">
      {/* <ScrollView>
      {pokemonList.map((pokemon) => (
        <View
          key={pokemon.id}
          className="bg-zinc-900 rounded-xl p-4 mb-6 items-center shadow-md"
        >
          <Text className="text-white font-bold text-lg capitalize">
            {pokemon.type}
          </Text>

          <Text className="text-gray-400 mb-2">
            {pokemon.name}
          </Text>

          <Image
            source={{ uri: pokemon.image }}
            className="w-20 h-20"
            resizeMode="contain"
          />
          
        </View>
      ))}
      </ScrollView> */}
      {/* <FlatList
      data={pokemonList}
      // data={[]}
      renderItem={({item}) => {
        return (
          <View
          key={item.id}
          className="bg-zinc-900 rounded-xl p-4 items-center shadow-md"
        >
          <Text className="text-white font-bold text-lg capitalize">
            {item.type}
          </Text>

          <Text className="text-gray-400 mb-2">
            {item.name}
          </Text>

          <Image
            source={{ uri: item.image }}
            className="w-20 h-20"
            resizeMode="contain"
          />
          
        </View>
        )
      }}
      // horizontal
      keyExtractor={(item,index) => item.id.toString()}
      ItemSeparatorComponent={<View className="mb-6"/>}
      ListEmptyComponent={<Text>No items found</Text>}
      ListHeaderComponent={<Text className="text-lg text-center font-bold mb-6">Pokemon List</Text>}
      ListFooterComponent={<Text className="text-lg text-center mt-6">End of List</Text>}
      /> */}

      <SectionList
       sections={groupedData}
       renderItem={({item}) => {
        return (
        <View className="px-4 py-3 bg-white rounded-xl border shadow-sm">
          <Text className="text-base text-gray-800">
            {item}
          </Text>
        </View>
        )
       }}
       renderSectionHeader={({section}) => {
        return <Text className="text-lg font-bold text-gray-900 ">{section.type}</Text>
       }}
       ItemSeparatorComponent={() => <View className="h-3"/>}
       SectionSeparatorComponent={() => <View className="h-6" />}
      />

    </View>
  )
}



//Note: FlatList component ensures it generates a few devices length of content in advance to ensure smooth scrolling
// ScrollView renders all its react child component once and has a performance  FlatList on the other hand renders items lazily when they are about to appears and removes items that scrolls way off the screen to save memory in processing time using flat list is the recommended approach to render lists in react native