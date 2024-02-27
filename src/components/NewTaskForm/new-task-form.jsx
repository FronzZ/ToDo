import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'components/NewTaskForm/new-task-form.css';

export default function NewTaskForm({ onCreateTask }) {
   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValue.trim() !== '') {
         onCreateTask(inputValue);
         setInputValue('');
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={handleInputChange}
            value={inputValue}
         />
      </form>
   );
}

NewTaskForm.propType = {
   onCreateTask: PropTypes.func.isRequired,
};
