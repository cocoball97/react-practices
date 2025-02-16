import React from 'react';
import Task from './Task';
import {Task_List} from './assets/scss/TaskList.scss';

function TaskList({tasks}) {
    return (
        <div className={Task_List}>
            <ul>
                {tasks.map(e => (
                    <Task 
                        key={'task-'+e.no}
                        no={e.no}
                        name={e.name}
                        done={e.done} />
                ))}
            </ul>
            <input className='Input_Add_Task' type='text' placeholder='태스크 추가'></input>
        </div>
    );
}

export default TaskList;
