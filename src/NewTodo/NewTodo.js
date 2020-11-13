import React from 'react';

import classes from './NewTodo.module.css'

import ButtonSelectAllItem from '../button/ButtonSelectAllItem/ButtonSelectAllItem'

function NewTodo(props) {

  return (
    <div className={classes.NewTodo}>
      <ButtonSelectAllItem
        markAllTasksHandler={props.markAllTasksHandler}
        flag={props.flag} />
      <input className={classes.Input} onKeyPress={props.newTask} type="text" placeholder="Что должно быть сделано?" />
    </div>
  )
}

export default NewTodo