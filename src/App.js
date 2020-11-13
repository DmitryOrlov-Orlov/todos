import React from 'react'
import classes from './App.module.css'

import NewTodo from './NewTodo/NewTodo'
import TaskSheet from './TaskSheet/TaskSheet'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      count: 0,
      flag: true

    }


  }

  newTask(e) {
    let tasks = this.state.tasks;
    let value = e.target.value;
    const keyEnter = 13;
    if (value !== '' && e.which === keyEnter) {
      let newCount = this.state.count
      newCount++;
      this.setState({ count: newCount });

      let newTask = { id: this.state.count, name: value, active: true, completed: false };
      tasks.push(newTask);
      e.target.value = '';
      this.setState({ tasks: tasks });
    }
  }

  delTask(index) {
    console.log()
    const newTasks = this.state.tasks.concat();
    newTasks.splice(index, 1);
    this.setState({
      tasks: newTasks,
    });
  }

  checkedHandler(index) {
    const newTask = this.state.tasks.concat();
    newTask[index].completed = !newTask[index].completed;
    this.setState({ tasks: newTask });
  }


  markAllTasksHandler() {
    const newTask = this.state.tasks.concat();
    newTask.map(task => {
      task.completed = this.state.flag;
    })
    this.setState({ flag: !this.state.flag });
    this.setState({ tasks: newTask });
  }


  render() {
    let tasks = this.state.tasks.map((task, index) => {
      return (
        <TaskSheet
          key={index}
          id={index}
          name={task.name}
          delTask={this.delTask.bind(this, index)}
          checkedHandler={this.checkedHandler.bind(this, index)}
          completed={task.completed}

        />
      )
    })

    return (
      <div className={classes.AppContent}>
        <h1 className={classes.header}>todos</h1>
        <NewTodo
          tasksList={this.state.tasks}
          newTask={this.newTask.bind(this)}
          markAllTasksHandler={this.markAllTasksHandler.bind(this)}
          flag={this.state.flag}
        />
        {tasks}
      </div>
    )
  }
}

export default App