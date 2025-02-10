import React from 'react';
import TabView from './TabView';
import data from './assets/json/data';
import Tabs from './Tabs';

function TabBox(props) {
    return (
        <div className={"tab-box"}>
            <Tabs tabs={data}/>
            <TabView contents={data}/>
        </div>
    );
}

export default TabBox;