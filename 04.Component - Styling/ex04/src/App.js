import React from 'react';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
import './assets/css/App.css';      // 전역 css 가져오기

function App() {
    return (
        <div id={'App'}>
            <h1 className={'Header'}> CSS Module II</h1>
            <Banner01 />
            <Banner02 />
        </div>
    );
}

export default App;