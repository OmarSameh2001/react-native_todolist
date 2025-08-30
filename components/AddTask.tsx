import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { Task, addTask } from "../hooks/useListDb";

const AddTask = ({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<Task[]>> }) => {
  const [title, setTitle] = useState("");

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
    
  },
});

export default AddTask;
