import React, { useState, useEffect, useId } from 'react';
import { formatDistanceToNow } from 'date-fns';
import 'components/Task/task.css';

export default function Task({ description, status, created, onChangeStatus, onDeleteTask, onRenameTask }) {
   const [date, setDate] = useState(formatDistanceToNow(new Date(created), { includeSeconds: true, addSuffix: true }));
   const [clickEdit, setClickEdit] = useState(false);
   const [inputValue, setInputValue] = useState(description);
   const id = useId();

   useEffect(() => {
      const interval = setInterval(() => {
         setDate(formatDistanceToNow(new Date(created), { includeSeconds: true, addSuffix: true }));
      }, 5000);

      return () => clearInterval(interval);
   }, [created]);

   const handleCheckboxChange = () => {
      onChangeStatus(!status);
   };

   const handleClickEdit = () => {
      setClickEdit((prevClick) => !prevClick);
   };

   const handleRenameTask = (e) => {
      setInputValue(e.target.value);
   };

   const submitRenamedTask = (e) => {
      e.preventDefault();
      setClickEdit((prevClick) => !prevClick);
      onRenameTask(inputValue);
   };

   let classNames = status ? 'completed' : 'active';

   if (clickEdit) {
      classNames = 'editing';
   }

   return (
      <li className={classNames}>
         <div className="view">
            <input
               id={`chekedArea${id}`}
               type="checkbox"
               className="toggle"
               checked={status}
               onChange={handleCheckboxChange}
            />
            <label htmlFor={`chekedArea${id}`}>
               <span className="description">{description}</span>
               <span className="created">{date}</span>
            </label>
            <button type="button" aria-label="Edit task" className="icon icon-edit" onClick={handleClickEdit} />
            <button type="button" aria-label="Delete task" className="icon icon-destroy" onClick={onDeleteTask} />
         </div>
         {classNames === 'editing' && (
            <form onSubmit={submitRenamedTask}>
               <input type="text" className="edit" value={inputValue} onChange={handleRenameTask} />
            </form>
         )}
      </li>
   );
}
