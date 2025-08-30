import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, Text, useColorScheme, View } from "react-native";
import Toast from "react-native-toast-message";
import AddTask from "../../components/AddTask";
import ViewTask from "../../components/ViewTask";
import { Task } from "../../hooks/useTaskDb";

const TaskScreen = () => {
  const colorScheme = useColorScheme();
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, marginTop: "10%" }}
      behavior="padding"
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colorScheme === 'dark' ? '#fff' : '#000' }}>Tasks</Text>
      </View>
      {tasks?.length === 0 && <Text style={{ textAlign: 'center', fontSize: 18 }}>No tasks yet</Text>}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ViewTask task={item} setTasks={setTasks} />}
      />
      <AddTask setTasks={setTasks} />
      
      <Toast position="top" topOffset={0} visibilityTime={1000} />
    </KeyboardAvoidingView>
  );
};

export default TaskScreen;
