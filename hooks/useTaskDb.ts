
// this is a simple in-memory database to manage tasks state

// Type for a task
export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

// Function to add a new task it takes a title and a callback to update the state
export const addTask = (
    title: string,
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
    const newTask: Task = {
        id: Date.now().toString(),
        title,
        isCompleted: false,
    };
    setTask(prevTasks => [...prevTasks, newTask]);
};

// Function to toggle the completion status of a task it takes an id and a callback to update the state
export const toggleTask = (
    id: string,
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
    setTask(prevTasks =>
        prevTasks.map(task =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        )
    );
};

// Function to delete a task it takes an id and a callback to update the state
export const deleteTask = (
    id: string,
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
    setTask(prevTasks =>
        prevTasks.filter(task => task.id !== id)
    );
};
