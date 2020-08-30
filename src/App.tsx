import React from 'react';
import './App.css';
import { Counter } from './components/task03/Counter';
import {Messages} from "./components/task01/Messages";
import { ListOfTasksHOC } from './components/task02/listOfTasksHOC';
import { ShowCustomComponents } from './components/task04/ShowCustomCompoents';

function App() {
  return (
    <div className="App">
     {/*<Messages />*/}
     {/*<ListOfTasksHOC />*/}
     <Counter />
     <ShowCustomComponents />
    </div>
  );
}

export default App;
