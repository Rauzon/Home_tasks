import React from 'react';
import './App.css';
import {Counter} from './components/task03/Counter';
import {Messages} from "./components/task01/Messages";
import {ListOfTasksHOC} from './components/task02/listOfTasksHOC';
import {ShowCustomComponents} from './components/task04/ShowCustomCompoents';
import {NavBar} from './components/NavBar';
import {Route} from 'react-router-dom';
import {ShowEditeMode} from './components/task05/ShowEditeMode';
import {SelectContainer} from './components/common/CustomSelect';
import {RadioContainer} from './components/common/CustomRadio';
import HW8 from "./components/h8/HW8";
import HW9 from './components/h9/HW9';
import {HW10} from "./components/h10/HW10";
import { HW11 } from './components/h11/HW11';
import {HW12} from "./components/h12/HW12";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route path={'/pre-junior'} render={() => <Messages/>}/>
            <Route path={'/pre-junior'} render={() => <ListOfTasksHOC/>}/>
            <Route path={'/pre-junior'} render={() => <Counter/>}/>
            <Route path={'/pre-junior'} render={() => <ShowCustomComponents/>}/>
            <Route path={'/junior'} render={() => <ShowEditeMode/>}/>
            <Route path={'/junior'} render={() => <SelectContainer />}/>
            <Route path={'/junior'} render={() => <RadioContainer />}/>
            <Route path={'/junior'} render={() => <HW8 />}/>
            <Route path={'/junior'} render={() => <HW9 />}/>
            <Route path={'/junior'} render={() => <HW10 />}/>
            <Route path={'/junior'} render={() => <HW11 />}/>
            <Route path={'/junior-plus'} render={() => <HW12 />}/>
        </div>
    );
}

export default App;
