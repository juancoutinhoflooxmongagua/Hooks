import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import DataContext, { data } from '../data/DataContext' // Certifique-se que o caminho está correto

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

const App = () => {
    const [state, setState] = useState(data)

    return (
        <DataContext.Provider value={{ state, setState }}>
            <div className="App">
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        </DataContext.Provider>
    )
}

export default App;
