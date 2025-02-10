import React from 'react'
import GroceryItem from './GroceryItem';

function GroceryList(props){
    return(
        <ol className={"grocery-list"}>
            <GroceryItem name={'bread'} count={10} />,
            <GroceryItem name={'milk'} count={5} />,
            <GroceryItem name={'egg'} coun={10} />
        </ol>
    );
}

export default GroceryList;