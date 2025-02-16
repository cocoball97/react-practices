import React from 'react';
import Card from './Card';
import {Card_List} from './assets/scss/CardList.scss';

function CardList({data}) {
    return (
            <div className={Card_List}>
                <h1>{data[0].status}</h1>
                {data.map(item => (
                    <Card 
                        key={item.no}
                        title={item.title}
                        description={item.description}
                        tasks={item.tasks} />
                ))}
            </div>
    );
}


export default CardList;