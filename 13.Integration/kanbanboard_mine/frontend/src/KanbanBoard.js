import React from 'react';
import CardList from './CardList';
import {Kanban_Board} from './assets/scss/KanbanBoard.scss';
import data from './assets/json/data';

function KanbanBoard() {
    return (
        <div className={Kanban_Board}>
            <CardList data={data.filter(item => item.status === 'ToDo')} />
            <CardList data={data.filter(item => item.status === 'Doing')} />
            <CardList data={data.filter(item => item.status === 'Done')} />
        </div>
    );
}

export default KanbanBoard;