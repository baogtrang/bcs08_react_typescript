// Objective: Define the interface of the Todo object
export interface I_Todo {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface I_PropListTodo {
    todos: I_Todo[];
}