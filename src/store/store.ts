import { Status } from "@/interface/status";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Todo = {
  id: number;
  title: string;
  client: Status;
  division: Status;
  status: "Selesai" | "Belum Selesai";
};

type TodoStore = {
  todos: Todo[];
  addTodo: (todo: Omit<Todo, "id" | "status">) => void;
  toggleStatus: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    set => ({
      todos: [],
      addTodo: todo =>
        set(state => ({
          todos: [
            ...state.todos,
            { ...todo, id: Date.now(), status: "Belum Selesai" },
          ],
        })),
      deleteTodo: id =>
        set(state => ({
          todos: state.todos.filter(todo => todo.id !== id),
        })),
      toggleStatus: id =>
        set(state => ({
          todos: state.todos.map(todo =>
            todo.id === id
              ? {
                  ...todo,
                  status:
                    todo.status === "Belum Selesai"
                      ? "Selesai"
                      : "Belum Selesai",
                }
              : todo,
          ),
        })),
    }),
    {
      name: "todo-storage",
    },
  ),
);
