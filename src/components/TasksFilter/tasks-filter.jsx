import PropTypes from 'prop-types';
import React, { useState } from 'react';
import 'components/TasksFilter/tasks-filter.css';

export default function TasksFilter({ arrFilters, onFilterTasks }) {
   const [filter, setFilter] = useState(arrFilters);

   // Функция обработки клика на фильтры
   const handleFilterClick = (e) => {
      const filterName = e.target.textContent;
      setFilter((prevFilter) =>
         prevFilter.map((el) => ({
            ...el,
            selected: el.filterName === filterName,
         })),
      );
      onFilterTasks(filterName);
   };

   const elements = filter.map((el) => {
      let classNames = 'filter';
      if (el.selected) {
         classNames = 'selected';
      }

      return (
         <li key={el.filterName}>
            <button type="button" className={classNames} onClick={handleFilterClick}>
               {el.filterName}
            </button>
         </li>
      );
   });

   return <ul className="filters">{elements}</ul>;
}

// Пропсы по умолчанию
TasksFilter.defaultProps = {
   arrFilters: [
      { filterName: 'All', selected: true },
      { filterName: 'Active', selected: false },
      { filterName: 'Completed', selected: false },
   ],
};

// Проверка
TasksFilter.propTypes = {
   arrFilters: PropTypes.arrayOf(
      PropTypes.shape({
         filterName: PropTypes.string,
         selected: PropTypes.bool,
      }),
   ),
};
