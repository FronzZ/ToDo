import React from 'react';
import PropTypes from 'prop-types';

import TasksFilter from 'components/TasksFilter/tasks-filter';
import 'components/Footer/footer.css';

export default function Footer({ onFilterTasks, uncompletedTasksCount, onDeleteCompleteTasks }) {
   return (
      <footer className="footer">
         <span className="toto-count">{uncompletedTasksCount} items left</span>
         <TasksFilter onFilterTasks={onFilterTasks} />
         <button type="button" className="clear-completed" onClick={onDeleteCompleteTasks}>
            Clear completed
         </button>
      </footer>
   );
}

Footer.propTypes = {
   onFilterTasks: PropTypes.func.isRequired,
   uncompletedTasksCount: PropTypes.number.isRequired,
   onDeleteCompleteTasks: PropTypes.func.isRequired,
};
