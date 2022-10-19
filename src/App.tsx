import React from 'react';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Technology/>
        </div>
    );
}

const Header = () => {
    return (
        <>
            <a>Profile</a>
            <a>News</a>
            <a>Messages</a>
            <a>Music</a>

        </>
    )
}

const Technology = () => {
    return (
        <>
            <li>html</li>
            <li>css</li>
            <li>js</li>
            <li>ts</li>

        </>
    )
}

export default App;
