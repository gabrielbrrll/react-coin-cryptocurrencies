import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/common/header';
import List from './components/list/list';
import './index.css';

const App = () => {
    return (
        <div>
            <Header />

            <List />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);