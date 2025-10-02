import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

interface ITodo {
  id: number;
  name: string;
}

export default function App() {

  const [todo, setTodo] = useState("");

  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi input todo", "Todo không được để trống", [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Xác nhận', onPress: () => console.log('OK Pressed') }
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 2000000), name: todo }]);
    setTodo("");
  }

  const deleteTodo = (id: number) => {
    const newTodos = listTodo.filter((item) => item.id != id);
    setListTodo(newTodos);
  }

  //jsx
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Todo App</Text>

        {/* form  */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button
            title='Add Todo'
            onPress={handleAddTodo}
          />
        </View>

        {/* list todo  */}
        <View style={styles.todo}>
          <FlatList
            keyExtractor={item => item.id + ""}
            data={listTodo}
            renderItem={data => {
              return (
                <Pressable
                  onPress={() => deleteTodo(data.item.id)}
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{data.item.name}</Text>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                </Pressable>
              )
            }}
          />
        </View>
      </View >
    </TouchableWithoutFeedback>
  );
}


// ko có khái niệm css
const styles = StyleSheet.create({
  groupTodo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderStyle: 'dashed',
    marginBottom: 15,
    marginHorizontal: 10,
    padding: 15
  },

  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 60,
  },

  form: {
    // flex: 2,
    marginBottom: 20
  },

  todo: {
    flex: 1,
  },

  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    padding: 5,
    margin: 15,
  },

  todoItem: {
    fontSize: 20,
    borderWidth: 1,
    padding: 10
  },

  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1
  }

});
