import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on me!';
}

const App = () => {
    const buttonText = 'Click Me';

    return (
        <div>
            <label className="label" htmlFor="name">Enter Name</label>
            <input id="name" type="text"/>
            <button style={{border: '1px solid black'}}>{getButtonText() }</button>
        </div>
    )
};

ReactDOM.render( 
    <App />, 
    document.querySelector('#root') 
);