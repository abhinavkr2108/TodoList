import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TaskItems from './components/TaskItems';

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      {/* App Heading */}
      <View style={styles.taskWrapper}>
        <Text style={styles.appTitle}>Today's Tasks</Text>
      </View>
      
      {/* Task Items */}
      <View style={styles.taskItems}>
        <ScrollView>
          {
            taskItems.map((item, index)=>{
              return (
              <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                <TaskItems text={item}/>
              </TouchableOpacity>
            )
            })
          }
        </ScrollView>
      </View>

      {/* Text Input by User */}
      <KeyboardAvoidingView 
        behaviour={Platform.OS==="anonPress={()=> handleAddTask()}droid" ? "height" : "padding"}
        style={styles.inputTextWrapper}>
        <TextInput 
        style={styles.textInput}
        placeholder="Write your task"
        value={task}
        onChangeText={text => setTask(text)}>
        </TextInput>
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.inputButton}>
            <Text style={styles.inputButtonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  appTitle:{
    fontSize: 24,
    fontWeight: "bold",

  },
  taskItems:{
    margin: 15,
  },
  inputTextWrapper:{
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInput:{
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  inputButton:{
    width: 50,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  inputButtonText:{

  }
  
});
