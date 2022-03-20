import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

 const TodoList = () => {
	const todos = useSelector((state) => state.todos.todos)
  console.log(todos);
	return (
		<ul>
			{todos.map((el) => {
				return (
					<TodoItem
						key={el.id}
						id={el.id}
						title={el.title}
						completed={el.completed}
					/>
				)
			})}
		</ul>
	)
}
export default TodoList