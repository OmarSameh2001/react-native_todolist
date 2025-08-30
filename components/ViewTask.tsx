import Checkbox from 'expo-checkbox';
import React from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    useColorScheme,
    View
} from "react-native";
import Toast from "react-native-toast-message";
import { deleteTask, Task, toggleTask } from "../hooks/useTaskDb";


type Props = {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};



const ViewTask = ({ task, setTasks }: Props) => {
    
const colorScheme = useColorScheme();
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    fontSize: 16,
    color: colorScheme === "dark" ? "#fff" : "#000",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
  const confirmDelete = () => {
    Alert.alert(
      "Delete Task",
      `Are you sure you want to delete "${task.title}"?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            deleteTask(task.id, setTasks);
            Toast.show({
              type: "error",
              text1: "Task deleted",
              text2: `"${task.title}" removed ❌`,
            });
          },
        },
      ]
    );
  };

  const handleToggle = () => {
    toggleTask(task.id, setTasks);
    Toast.show({
      type: "info",
      text1: "Task updated",
      text2: task.isCompleted ? "Marked incomplete" : "Marked complete",
    });
  }

  return (
    <View style={styles.item}>
      <View
        style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
      >
        <Checkbox
          value={task.isCompleted}
          onValueChange={() => {
            handleToggle();
          }}
        />
        <Text style={[styles.text, task.isCompleted && styles.completed]}>
          {task.title}
        </Text>
      </View>
      <Button title="Delete" color="red" onPress={confirmDelete} />
    </View>
  );
};



export default ViewTask;
