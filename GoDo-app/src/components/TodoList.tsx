import type { Task } from "../types";
import { TodoItem } from "./TodoItem";

interface TodoListProps{
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoList({ tasks, onToggle, onDelete }: TodoListProps) {
    // check if the tasks array is empty, and if it is, we return a message indicating that there are no tasks available. This provides feedback to the user when there are no tasks to display.
    if (tasks.length === 0) {
        return <p className="empty-state">No tasks available</p>;
    }

    // We use the map function to iterate over the tasks array and render a TodoItem component for each task. 
    // We pass the necessary props to each TodoItem, including the task's id, title, completed status, and the onToggle and onDelete functions. 
    // The key prop is set to the task's id to help React identify which items have changed, are added, or are removed.
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    completed={task.completed}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}