interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({id, title, completed, onToggle, onDelete}: TodoItemProps) {
    return(
        <li className={`todo-item ${completed ? 'todo-item--completed' : ''}`}>
            <label className="todo-item__label">
                <input
                    className="todo-item__checkbox"
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                />
                <span className="todo-item__title">
                    {title}
                </span>
            </label>
            <button className="todo-item__delete" onClick={() => onDelete(id)} aria-label={`Delete ${title}`}>
                ×
            </button>
        </li>
    );
}