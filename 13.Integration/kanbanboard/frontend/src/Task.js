import React, {useState} from 'react';
import {_Task} from './assets/scss/Task.scss';
import {Task_Remove} from './assets/scss/Task.scss';


function Task({no, name, done}) {
    const [isChecked, setIsChecked] = useState(false);

    return (
        
        <li className={_Task}>
            <input 
                type='checkbox' 
                checked={isChecked} 
                onChange={() => setIsChecked(!isChecked)} />
                {name}
                <a href='#' className={Task_Remove}></a>
        </li>
        
    );
}

export default Task;