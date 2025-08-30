import React from "react";
import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";
import { Task, deleteTask, toggleTask } from "../hooks/useListDb";

type Props = {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
};

const ViewTask = ({ task, setTasks }: Props) => {

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

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {
        toggleTask(task.id, setTasks);
        Toast.show({
          type: "info",
          text1: "Task updated",
          text2: task.isCompleted ? "Marked incomplete" : "Marked complete",
        });
      }}>
        <Text style={[styles.text, task.isCompleted && styles.completed]}>
          {task.title}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" color="red" onPress={confirmDelete} />
    </View>
  );
};

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
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

export default ViewTask;
