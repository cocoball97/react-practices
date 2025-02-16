import React, { useState } from 'react';
import TaskList from './TaskList';
import * as styles from './assets/scss/Card.scss';

function Card({no, title, description, tasks}) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles._Card}>
            <div 
                className={`${styles.Card_Title} ${isOpen ? styles.Card_Title_Open : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer' }}>
                <strong>{title}</strong>
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