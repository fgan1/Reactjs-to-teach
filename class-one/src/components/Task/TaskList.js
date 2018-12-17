import React, { Component } from 'react';
import Task from './Task';

import './TaskList.css';

class TaskList extends Component {
  render() {

    let className; 
    switch (this.props.styleType) {
      case 'typeOne':        
        className = 'ModelOne';   
        break;
      default:
        className='ModelTwo'; 
    }    

    const tasks = this.props.tasks.map(( task, index ) => {
      return <Task
          click={ () => this.props.taskClicked(index) }
          id={task.id}
          text={task.text}
          key={task.id}
          index={index}
          />
    } );

    return (
      <div className={className}>      
        <ul> 
          { tasks } 
        </ul>
      </div>
    )
  };
};

export default TaskList;