// import 'antd/dist/antd.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Homepage from './homepage';

const App = () => {
    return (
        <div>
            <Homepage />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />)