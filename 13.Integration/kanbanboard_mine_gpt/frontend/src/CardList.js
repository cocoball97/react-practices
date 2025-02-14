import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({data}) {
    return (
        <div>
            <div className={Card_List}>
                <h1>To Do</h1>
                {data.filter(item => item.status === "ToDo").map(item => (
                    <Card 
                    key={item.no}
                    title={item.title}
                    description={item.description}
                    tasks={item.tasks} />
                ))}
            </div>
            <div className={Card_List}>
                <h1>Doing</h1>
                {data.filter(item => item.status === "Doing").map(item => (
                    <Card 
                        key={item.no}
                        title={item.title}
                        description={item.description}
                        tasks={item.tasks} />
                ))}
            </div>

            <div className={Card_List}>
                <h1>Done</h1>
                {data.filter(item => item.status === "Done").map(item => (
                    <Card 
                    key={item.no}
                    title={item.title}
                    description={item.description}
                    tasks={item.tasks} />
                ))}
            </div>

        </div>
    );
}


export default CardList;