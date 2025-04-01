import React, { useState, useCallback } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        setCount(prevCount => prevCount + 1)
    }, [])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">Contador: {count}</span>
                <button className="btn" onClick={increment}>Incrementar</button>
            </div>
        </div>
    )
}

export default React.memo(UseCallback)
