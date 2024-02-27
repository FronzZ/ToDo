import PropTypes from 'prop-types';

import Task from 'components/Task/task';
import 'components/TaskList/task-list.css';

export default function TaskList({ tasks, onChangeStatus, onDeleteTask, onRenameTask }) {
   return (
      <ul className="todo-list">
         {tasks.map((task) => (
            <Task
               key={task.id}
               description={task.description}
               status={task.status}
               created={task.created}
               onChangeStatus={(status) => onChangeStatus(status, task.id)}
               onDeleteTask={() => onDeleteTask(task.id)}
               onRenameTask={(text) => onRenameTask(text, task.id)}
            />
         ))}
      </ul>
   );
}

TaskList.propTypes = {
   tasks: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         status: PropTypes.bool.isRequired,
         description: PropTypes.string.isRequired,
         created: PropTypes.number.isRequired,
      }).isRequired,
   ).isRequired,
   onChangeStatus: PropTypes.func.isRequired,
   onDeleteTask: PropTypes.func.isRequired,
   onRenameTask: PropTypes.func.isRequired,
};
