import { StyleSheet, Platform, Text, View, Image } from "react-native";

export default function({
  name,
  image,
  type,
  moves
}){

    

    return(
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
        {/* <Text style={styles.hp}>❤️{hp}</Text> */}
      </View>
      <Image style={styles.image} source={image} accessibilityLabel={`${name} pokemon`}/>

      <View style={styles.typeContainer}>
        <View style={[styles.badge, ]}>
          {/* <Text style={styles.emoji}>{emoji}</Text> */}
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
      </View>

      {/* <View style={styles.weaknessesContainer}>
        <Text style={styles.movesText}>Weaknesses: {weaknesses.join(", ")}</Text>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 2, height: 2},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      }
    })
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32
  },
  name: {
    fontSize: 30,
    fontWeight: "bold"

  },
  hp: {
    fontSize: 22,
  },
image: {
  width: "100%",
  height: 200,
  borderRadius: 10,
  resizeMode: "contain",
  marginBottom: 10,
},
typeContainer:{
  alignItems: "center",
  marginBottom: 40
},
badge: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 6,
  paddingHorizontal: 12,
  borderRadius: 20,
  borderWidth: 4
},
typeText: {
  fontSize: 22,
  fontWeight: "bold"
},
movesContainer: {
  marginBottom: 14
},
movesText: {
  fontSize: 22,
  fontWeight: "bold"
},
weaknessesContainer: {
  marginBottom: 8
}
})
