import React, {Component} from 'react';
import Header from './Header'
import Contents from './Contents';

// Component : 클래스 컴포넌트에 사용하기 위해 
class App extends Component {

    render(){
        return (
            <div>
                <Header />
                <Contents />
            </div>
        );
    }
}

export {App};