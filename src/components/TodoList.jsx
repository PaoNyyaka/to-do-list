import { useSelector } from 'react-redux'
import { TodoItem } from './TodoItem'


export const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm;

    return todos.filter((todo) => {
      const matchsFilter = (filter === 'COMPLETED' && todo.completed) || (filter === 'INCOMPLETE' && !todo.completed) ||(filter === 'ALL');
      const matchsSearch = todo.text.toLowerCase().includes(searchTerm);

      return matchsFilter && matchsSearch
    })
  })

  console.log('Filtered todos: ', filteredTodos)
  return (
    <ul>
      <li className='my-2 text-sm italic'>All your Notes Here...</li>
      {
        filteredTodos.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))
      }
    </ul>
  )
}
