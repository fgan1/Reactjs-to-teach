import React, { Component } from 'react';
import TaskList from '../components/Task/TaskList';
import './App.css';


// Main "Main component"
class App extends Component {
  state = {
    tasks: [
      { id: 1, text : 'Something One' },
      { id: 2, text : 'Something Two' },
      { id: 3, text : 'Something Three' }
    ]
  }

  componentDidMount() {
    console.log('(App.js Debug lvl) - Method: componentDidMount');
  }

  componentWillUnmount() {
    console.log('(App.js Debug lvl) - Method: componentWillUnmount');
  }  

  componentWillUpdate ( nextProps, nextState ) {
    console.log( '(App.js Debug lvl) - componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '(App.js Debug lvl) - componentDidUpdate' );
  }

  shouldComponentUpdate ( nextProps, nextState ) {
    console.log( '(App.js Debug lvl) - shouldComponentUpdate', nextProps, nextState );
    return true;
  }

  taskClicked = (index) => {
    console.log( '(App.js Debug lvl) - task clicked: ' + index );
    const tasks = [...this.state.tasks];
    tasks.splice( tasks, 1 );
    this.setState( { tasks: tasks } );    
  }

  render() {
    console.log('(App.js Debug lvl) - Method: render');
    const styleTypeOne = 'typeOne';
    const styleTypeTwo = 'typeTwo';
    return (
      <div className="App">
        <h1>
          <p>Task List</p>
        </h1>
        <h3>
          <p>v1</p>
        </h3>
        <TaskList styleType={styleTypeOne} taskClicked={this.taskClicked} tasks={this.state.tasks} title="Main"/>
        <h3>
          <p>v2</p>
        </h3>
        <TaskList styleType={styleTypeTwo} taskClicked={this.taskClicked} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
