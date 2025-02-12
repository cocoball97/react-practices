import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {
    // 과거 방식
    // const groceryItems = [];
    // groceries.forEach((grocery) => {
    //    groceryItems.push(<GroceryItem name={grocery.name} count={grocery.count} />); 
    // });

    return (
        <ol className={"grocery-list"}>
            {   
                // map 함수는 index 자동 전달
                groceries.map( (grocery, index) => <GroceryItem
                                                        key={index}
                                                        name={grocery.name}
                                                        count={grocery.count}/> )
            }
        </ol>
    );
}

export default GroceryList;