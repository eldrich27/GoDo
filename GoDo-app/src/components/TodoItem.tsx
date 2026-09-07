interface TodoItemProps {
    id: string;
    title: string;
    completed: boolean;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export function TodoItem({id, title, completed, onToggle, onDelete}: TodoItemProps) {
    return(
        <li>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggle(id)}
                />
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {title}
                </span>
            </label>
            <button onClick={() => onDelete(id)} aria-label={`Delete ${title}`}>
                ×
            </button>
        </li>
    );
}