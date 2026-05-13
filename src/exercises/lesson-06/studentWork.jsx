import { useState } from 'react';
import { listFilter } from './utils/listFilter.js';
import { useCustomHook } from './hooks/useCustomHook.jsx';
import { Button } from './componets/button.jsx';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  const { tasks, loading } = useCustomHook();
  const visibleTasks = listFilter(tasks, filter);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, Student</h2>

      {/* #4: Repeated button JSX */}
      <div>
        <Button label="All" onClick={() => setFilter('all')} />
        <Button label="Completed" onClick={() => setFilter('completed')} />
        <Button label="Pending" onClick={() => setFilter('pending')} />
        <p>Current filter: {filter}</p>
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : '⏳'}
          </li>
        ))}
      </ul>
    </div>
  );
}
