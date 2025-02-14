import React, { useState } from 'react';
import TaskList from './TaskList';
import {_Card} from './assets/scss/Card.scss';

function Card({no, title, description, tasks}) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={_Card}>
            <div className='Card_Title  Card_Title_Open' 
                onClick={() => setIsOpen(!isOpen)} 
                style={{ cursor: 'pointer' }}>
                {isOpen ? '▼' : '▶'} <strong>{title}</strong>  
            </div>

            {isOpen && (
                <>
                    <div className='Card_Details'>{description}</div>
                    <TaskList tasks={tasks}/>
                </>
            )}
        </div>
    );
}

export default Card;