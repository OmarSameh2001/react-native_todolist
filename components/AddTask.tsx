import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, useColorScheme } from "react-native";
import Toast from "react-native-toast-message";
import { Task, addTask } from "../hooks/useTaskDb";




const AddTask = ({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) => {
const colorScheme = useColorScheme();
  const [title, setTitle] = useState("");

  const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
    color: colorScheme === "dark" ? "#fff" : "#000",
    backgroundColor: colorScheme === "dark" ? "#444" : "#fff",
  },
});
  const onSubmit = () => {
    if (!title.trim()) return;
    addTask(title, setTasks); 
    Toast.show({
      type: "success",
      text1: "Task added",
      text2: `"${title}" was added ✅`,
    });
    setTitle("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Enter task..."
      />
      <Button title="Add" onPress={onSubmit} disabled={!title} />
    </View>
  );
};



export default AddTask;
