
export type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

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

export const deleteTask = (
    id: string,
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
): void => {
    setTask(prevTasks =>
        prevTasks.filter(task => task.id !== id)
    );
};
