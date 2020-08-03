import React from 'react';
import './App.css';
import {Messages} from "./components/task01/Messages";
import { ListOfTasksHOC } from './components/task02/listOfTasksHOC';
import { Counter } from './components/task03/Counter';

function App() {
  return (
    <div className="App">
     {/*<Messages />*/}
     {/*<ListOfTasksHOC />*/}
     <Counter />
    </div>
  );
}

export default App;
