import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from 'components/Header/header';
import NewTaskForm from 'components/NewTaskForm/new-task-form';
import TaskList from 'components/TaskList/task-list';
import Footer from 'components/Footer/footer';
import 'components/App/app.css';

// const tasksData = [
//    { id: 1, status: false, description: "Active task", created: Date.now() },
//    { id: 2, status: false, description: "Active task", created: Date.now() },
//    { id: 3, status: false, description: "Active task", created: Date.now() },
//    { id: 4, status: false, description: "Completed task", created: Date.now() },
// ];

export default function App() {
   const [tasks, setTasks] = useState([]);
   const [filtered, setFiltered] = useState(tasks);

   // Колчество невыполненных заданий
   const activeTasksCount = tasks.filter((task) => !task.status).length;

   // Обёртка логики
   const updateTasks = (taskUpdater) => {
      setTasks((prevTasks) => {
         const updatedTasks = taskUpdater(prevTasks);
         return updatedTasks;
      });
      setFiltered((prevTasks) => {
         const updatedTasks = taskUpdater(prevTasks);
         return updatedTasks;
      });
   };

   // Создание задачи
   const createTask = (text) => {
      const newTask = { id: uuidv4(), status: false, description: text, created: Date.now() };
      updateTasks((prevTasks) => [...prevTasks, newTask]);
   };

   // Удаление задачи
   const deleteTask = (id) => {
      updateTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
   };

   // Удаление всех выполненных задач
   const deleteCompleteTasks = () => {
      updateTasks((prevTasks) => prevTasks.filter((task) => !task.status));
   };

   // Меняем статус задачи
   const changeStatus = (status, id) => {
      setTasks((prevTasks) => {
         const updatedTasks = prevTasks.map((task) => (task.id === id ? { ...task, status } : task));
         setFiltered(updatedTasks);
         return updatedTasks;
      });
   };

   // Переименование задачи
   const renameTask = (text, itemId) => {
      setFiltered((prevData) => {
         const newTodoData = [...prevData];
         const itemIndex = newTodoData.findIndex((el) => el.id === itemId);
         newTodoData[itemIndex].description = text;
         return newTodoData;
      });
   };

   // Фильтруем задачи в зависимости от статуса и рендерим их
   const filterTasks = (status) => {
      let newFilteredTasks;
      if (status === 'Active') {
         newFilteredTasks = tasks.filter((task) => !task.status);
      } else if (status === 'Completed') {
         newFilteredTasks = tasks.filter((task) => task.status);
      } else {
         newFilteredTasks = tasks;
      }
      setFiltered(newFilteredTasks);
   };

   return (
      <section className="todoapp">
         <Header />
         <NewTaskForm onCreateTask={createTask} />
         <section className="main">
            <TaskList
               tasks={filtered}
               onChangeStatus={changeStatus}
               onDeleteTask={deleteTask}
               onRenameTask={renameTask}
            />
            <Footer
               onFilterTasks={filterTasks}
               uncompletedTasksCount={activeTasksCount}
               onDeleteCompleteTasks={deleteCompleteTasks}
            />
         </section>
      </section>
   );
}
