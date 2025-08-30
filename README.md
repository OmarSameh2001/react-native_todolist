# 📋 React Native Task Manager (TypeScript)

A simple Task Manager app built with React Native + TypeScript.
Users can add tasks, mark them as complete/incomplete, and delete tasks with confirmation.
The app provides toast notifications for smooth feedback and uses a modular folder structure for clarity.

## ✨ Features

➕ Add Task – create a new task with a title

✅ Mark Complete/Incomplete – toggle task status with a tap

❌ Delete Task – confirm before deletion

🔔 Toast Notifications – instant feedback for add/update/delete actions

🗂️ Modular Structure – separate components, and utilities

⚡ Local State Management – lightweight and fast (no DB required or global context)

## 📂 Project Structure
App.tsx
app/
  └── (tabs)
         └── index.tsx
components/
  ├── AddTask.tsx
  └── ViewTask.tsx
hooks/
  └── useTaskDb.ts
README.md

## 🚀 Getting Started
1. Clone the repository

2. Install dependencies
`npm install`
 or
`yarn install`

3. Run the app
`npm start`
 or
`expo start`

4. Open the app

   Use Expo Go (iOS/Android) by scanning the QR code, or

   Run in an emulator/simulator

## 📦 Libraries Used

react-native-toast-message
 – toast notifications
expo-checkbox
 – task completion checkbox

React Native core components – UI & interaction

## 📌 Notes

Tasks are stored in local state only and manipulated via external ts file that handles all the tasks crud operations no global state as written in the assignment requirements.

The app ui is doing exactly what the app needs the design may be improved as needed in the future.

