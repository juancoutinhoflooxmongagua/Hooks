import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseEffect = () => {
    const [number, setNumber] = useState(1)
    const [status, setStatus] = useState("Pending")

    useEffect(() => {
        const num = parseInt(number)
        if (isNaN(num)) {
            setStatus("Invalid")
        } else {
            setStatus(num % 2 === 0 ? "Par" : "Impar")
        }
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <h3>Status: {status}</h3>
            <input 
                className='input' 
                type="text" 
                value={number} 
                onChange={e => setNumber(e.target.value)}
            />
        </div>
    )
}

export default UseEffect
