import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import logo from './logo.svg';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import Board from './components/Board';


function App () {

  return (
    <div  className="App">
      <main  className="class-wrapper"> 
        <DndProvider backend={Backend}>
	        <Board/>
				</DndProvider>
      </main>
    </div>
  );
}

export default App;
