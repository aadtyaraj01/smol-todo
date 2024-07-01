import React from 'react'

export default function TodoList() {
   let todos = [
        'Go to the market',
        'Check the mail',
        'Call mom',
        'Go to the gym',
        'Buy some milk'
    ];
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <li className="todoItem" key={todoIndex}>{todo}
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          </li>
        )
      })}
    </ul>
  )
}
