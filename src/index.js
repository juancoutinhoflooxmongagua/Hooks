import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta para React 18

import App from './views/App';
import { DataContext } from './data/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DataContext.Provider>
            <App />
        </DataContext.Provider>
    </React.StrictMode>
);
