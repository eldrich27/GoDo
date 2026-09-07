export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export interface TaskState {
    tasks: Task[];
    filter: Filter;
}