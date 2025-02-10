import React from 'react';
import TabItem from './TabItem';

function Tabs({tabs}) {
    return (
        <ul>
            {
                // tabs 객체를 TabItem 컴포넌트로 변환
                tabs.map(tab => <TabItem
                                    key={tab.no}
                                    name={tab.name}
                                    active={tab.active} />)
            }
        </ul>
    );
}

export default Tabs;