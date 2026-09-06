export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export type Fileter = 'all' | 'active' | 'completed';

export interface TaskState {
    tasks: Task[];
    filter: Fileter;
}