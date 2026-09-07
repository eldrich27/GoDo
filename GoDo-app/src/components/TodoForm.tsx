import { useState, type SubmitEvent } from 'react';

// in react props are jus function arguments, so we can define a type for the props.
// The form component will receive a function onAdd as a prop, which will be called when the form is submitted.
interface TodoFormProps {
    onAdd: (title: string) => void;
}

export function TodoForm({ onAdd }: TodoFormProps) {
    const [title, setTitle] = useState('');

    function handleSubmit(e:SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        // TRIM the title to remove any leading or trailing whitespace and check if it's empty. If it is, we don't want to add it to the list.
        const trimmed = title.trim();

        // If the trimmed title is empty, we return early and do not call the onAdd function. This prevents adding empty todos to the list.
        if (trimmed === '' || !trimmed) return;
        onAdd(trimmed);
        setTitle('');
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                className="todo-form__input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="what needs to be done?"
                autoFocus
            />
            <button className="todo-form__button" type="submit">Add</button>
        </form>
    );
}