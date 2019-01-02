import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TestComponentFul from './stateful/TestComponenFul';
// import TestComponent from './stateles/TestComponent';
// import HelloComponent from './stateles/HelloComponent';

// ReactDOM.render(<TestComponentFul />, document.getElementById('root'));
// ReactDOM.render(<TestComponent />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));


// function TestComponent() {
    //     return <p>hello test1</p>
    // }

    // const TestComponent = () => {
    //     return <p>hello test1 lagi</p>
    // }

// class TestComponent2 extends React.Component {
//     render() {
//         return (
//             <p>helo test2</p>
//         )
//     }
// }

// class TestComponent3 extends React.Component {
//     render() {
//         return <h1>haii</h1>
//     }
// }

// class TestComponent4 extends React.Component {
//     render() {
//         return <h2>hehehe</h2>
//     }
// }

// ReactDOM.render(<TestComponent4 />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
