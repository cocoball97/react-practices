import React from 'react';
import KanbanBoard from './KanbanBoard';
import './assets/scss/App.scss';

function App(props) {
    return (
        <div id={'App'}>
             <KanbanBoard />
        </div>
    );
}

export default App;