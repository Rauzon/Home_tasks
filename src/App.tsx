import React from 'react';
import './App.css';
import {Messages} from "./components/task01/Messages";
import { ListOfTasksHOC } from './components/task02/listOfTasksHOC';

function App() {
  return (
    <div className="App">
     <Messages />
     <ListOfTasksHOC />
    </div>
  );
}

export default App;
