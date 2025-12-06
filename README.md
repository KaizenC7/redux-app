# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler# React Redux CRUD Dashboard (React + Vite + Redux + Redux-Saga + TailwindCSS)

A simple and clean React application built using **Vite**, **Redux**, **Redux-Saga**, and **TailwindCSS**, demonstrating:

- API fetching using Redux Saga  
- State management using Redux  
- CRUD operations (Create / Read / Update / Delete)
- A responsive dashboard UI  
- Clean folder structure  

---

## Live / Repository Link

GitHub Repository: **<your-github-repository-link-here>**

---

## Tech Stack

- **React + Vite**
- **Redux Toolkit (reducers/actions/store)**
- **Redux-Saga (API side effects)**
- **Tailwind CSS**
- **Axios**
- **JSONPlaceholder API**  
  `https://jsonplaceholder.typicode.com/users`

---


---

## Features

### ✔ **READ (Fetch Users)**
- Uses Redux-Saga to fetch users from API  
- Stores response in Redux store  
- Displays in a stylized dashboard table

### ✔ **CREATE (Local Redux)**
- Add new user to local Redux state

### ✔ **UPDATE (Local Redux)**
- Edit user details in local Redux state

### ✔ **DELETE (Local Redux)**
- Remove a user from Redux store

### ✔ **Loading + Error Handling**
- Displays loading state  
- Handles and shows error messages

### ✔ **Clean UI**
- Styled using TailwindCSS  
- Responsive layout

---

## installation & Running Locally

git clone (https://github.com/KaizenC7/redux-app)

Navigate into the project
cd your-project-folder

Install dependencies
npm install

Start the development server
npm run dev

Open the project in browser
http://localhost:5173/

Building for Production
npm run build



The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
