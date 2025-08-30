import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, Text, useColorScheme, View } from "react-native";
import Toast from "react-native-toast-message";
import AddTask from "../../components/AddTask";
import ViewTask from "../../components/ViewTask";
import { Task } from "../../hooks/useTaskDb";


// main screen of the app
const TaskScreen = () => {
  // dark mode support
  const colorScheme = useColorScheme();
  // tasks state
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    // keyboard avoiding view to handle input focus
    <KeyboardAvoidingView
      style={{ flex: 1, marginTop: "10%" }}
      behavior="padding"
    >

      {/* title of the screen */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: colorScheme === 'dark' ? '#fff' : '#000' }}>Tasks</Text>
      </View>

      {/* if there are no tasks, show a message */}
      {tasks?.length === 0 && <Text style={{ textAlign: 'center', fontSize: 18 }}>No tasks yet</Text>}

      {/* list of tasks handles delete and mark complete */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ViewTask task={item} setTasks={setTasks} />}
      />

      {/* add task form */}
      <AddTask setTasks={setTasks} />
      
      {/* toast notifications */}
      <Toast position="top" topOffset={0} visibilityTime={1000} />
    </KeyboardAvoidingView>
  );
};

export default TaskScreen;
