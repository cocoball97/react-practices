import React from 'react'
import GroceryItem from './GroceryItem';

function GroceryList(props){
    return(
        <ol className={"grocery-list"}>
            <GroceryItem name={'bread'} count={10} />
        </ol>
    );
}

export default GroceryList;