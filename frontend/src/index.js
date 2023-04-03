import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import axios from 'axios';

axios.defaults.baseURL = "https://secure-stream-34965.herokuapp.com";  // will need to change this value when the app is deployed
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);


