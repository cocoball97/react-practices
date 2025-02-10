import React from 'react';

function App() {
          
    // JSX 없이 리액트 기본 문법
    // const App = React.createElement('div', null, 'Hello World', '10', parseInt('20'));
    // return App;

    // JSX 사용하여 쉽게 코드 작성
    return(
        <div>
            {'Hello World!!!'}
            {10}
            {parseInt('20')}
            <p>
                {'test'}
                <span>
                    {'test2'}
                </span>
            </p>
        </div>
    )
}

export {App};