import React from 'react';
import Header from './Header'
import Contents from './Contents';

function App() {
    /*
    return (
        <div>
            <Header />
            <Contents />
        </div>
    );
    */

    // 2번째 인자는 attribute
    return React.createElement('div', {id: 'App'}, React.createElement(Header, null), React.createElement(Contents, null))
}

export {App};