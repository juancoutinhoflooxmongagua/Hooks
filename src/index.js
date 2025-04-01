import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta para React 18

import App from './views/App';
import DataContext, { data } from './data/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataContext.Provider value={data}>
            <App />
        </DataContext.Provider>
    </React.StrictMode>
);
