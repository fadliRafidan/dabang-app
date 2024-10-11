This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# dabang-app

### **state management  `Zustand`**

Saya menggunakan state management [ZUSTAND](https://zustand-demo.pmnd.rs/) karena beberapa alasan utama.

---
#### **`Sederhana dan Minimalis`**
Zustand adalah state management yang lebih ringan dibandingkan dengan Redux, tetapi tetap powerful untuk mengelola global state. API Zustand yang sederhana membuatnya mudah dipahami dan cepat diimplementasikan.
#### **`Reaktivitas yang Efisien`**
Zustand hanya membuat komponen yang bergantung pada state tertentu untuk re-render, sehingga memastikan performa aplikasi tetap optimal, terutama ketika ada banyak komponen yang bergantung pada state yang sama.
#### **`TypeScript Support`**
Zustand mendukung TypeScript secara penuh, yang sangat penting untuk memastikan keamanan tipe data di seluruh aplikasi. Hal ini membantu saya menghindari banyak bug yang terkait dengan tipe data.
#### **`Tanpa Boilerplate Berlebihan`**
Tidak seperti Redux yang memerlukan banyak setup dan boilerplate (actions, reducers, selectors), Zustand menawarkan pendekatan yang lebih minimalis dengan tetap memberikan kontrol penuh atas state management.

### **Implementasi  `Zustand`**
Saya menggunakan Zustand untuk mengelola global state todos yang melibatkan penambahan, penghapusan, dan perubahan status tugas (todo). Berikut adalah function utama implementasi zustand di fitur Todo:

```ruby
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
```


### **Gambar**

- **[DASHBOARD](https://www.fadli-rafidan.dev/dashboard)**

![alt text](https://github.com/fadliRafidan/dabang-app/blob/main/image-dashboard.png?raw=true)

- **[PRODUCTS](https://www.fadli-rafidan.dev/dashboard/products)**

![alt text](https://github.com/fadliRafidan/dabang-app/blob/main/image-products.png?raw=true)

- **[TODO](https://www.fadli-rafidan.dev/dashboard/todo)**

![alt text](https://github.com/fadliRafidan/dabang-app/blob/main/image-todo.png?raw=true)
