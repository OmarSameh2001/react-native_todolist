import { useColorScheme } from '@/hooks/useColorScheme';
import React, { useState } from "react";
import { FlatList, View } from "react-native";
import Toast from "react-native-toast-message";
import AddTask from "../../components/AddTask";
import ViewTask from "../../components/ViewTask";
import { Task } from "../../hooks/useListDb";

const TaskScreen = () => {
  const colorScheme = useColorScheme();
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <View style={{ flex: 1, marginTop: 50 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ViewTask task={item} setTasks={setTasks} />}
      />
      <AddTask setTasks={setTasks} />
      
      <Toast position="top" topOffset={100} visibilityTime={1000} />
    </View>
  );
};

export default TaskScreen;
