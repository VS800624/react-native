import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Trash2, Check } from "lucide-react-native";
import "./global.css"

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editingId, setEditingId] = useState(null)

  // Save Todos to Storage
  const saveTodos = async(todoList) => {
    try{
      await AsyncStorage.setItem("TODOS", JSON.stringify(todoList))
    } catch(err){
      console.log(err)
    }
  }

  // It loads saved todos from the phone’s local storage and puts them back into app state.
  const loadToads = async() => {
    try {
      const storedTodos = await AsyncStorage.getItem("TODOS")
      if(storedTodos){
        setTodoList(JSON.parse(storedTodos))
      }

    } catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    loadToads()
  }, [])

  useEffect(() => {
    saveTodos(todoList)
  }, [todoList])

  const addTodo = () => {
    // If the input is empty or contains only spaces, stop the function immediately.
    if (!todo.trim()) return;

    // Updating the todo (EDIT LOGIC)
    if(editingId){
      setTodoList(todoList.map((item) => {
        return item.id === editingId ? {...item, text: todo} : item
      }))
      setEditingId(null)
    }
    else {
      // This code adds a new todo object to the existing todo list state using the spread operator while keeping state immutable.
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          text: todo,
          done: false,
        },
      ]);
    }
    setTodo("");
  };

  // This function toggles the completed state of a todo by mapping over the list and updating only the matched item immutably.
  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((item) => {
        return item.id === id ? { ...item, done: !item.done } : item;
      })
    );
  };

  // It keeps all todos whose id is NOT equal to the given id, and removes the one that matches.
  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  // It prepares the app to edit an existing todo
  const editTodo = (item) => {
    setTodo(item.text)
    setEditingId(item.id)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.title} className="text-red-600">My Todo App</Text>

      {/* Input + Button */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your todo"
          value={todo}
          onChangeText={setTodo}
          style={styles.input}
        />

        <Pressable style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.todoItem}>
              <Pressable
                onPress={() => toggleTodo(item.id)}
                style={{ flex: 1 }}
              >
                <Text
                  style={[styles.todoText, item.done && styles.completedText]}
                >
                  {item.text}
                </Text>
              </Pressable>

              <Pressable onPress={() => deleteTodo(item.id)}>
                <Text style={styles.deleteText}>❌</Text>
              </Pressable>
              <Pressable onPress={() => editTodo(item)}>
                <Text style={{ fontSize: 18}}>✏️</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    justifyContent: "center",
    marginLeft: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginTop: 10,
    borderRadius: 8,
  },
  todoText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  deleteText: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
  },
});
