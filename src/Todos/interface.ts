// Objective: Define the interface of 
// the Todo object
export interface I_Todo {
    id: number;
    title: string;
    isCompleted: boolean;
}

export interface I_PropListTodo {
    todos: I_Todo[];
    handleDelete: (id:number)=> void;
}

export interface I_PropTodo {
    todo: I_Todo;
    handleDelete: (id:number)=>void;
}

export interface I_PropFormTodo{
    handleCreate: (todo:I_Todo)=>void;
}