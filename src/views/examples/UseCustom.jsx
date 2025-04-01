import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'

const UseRef = () => {
    const [count, inc, dec] = useCounter(10)  // Passando 10 como valor inicial

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <div>
                <span>{count}</span>
                <button className="btn" onClick={() => inc()}>+1</button>
                <button className="btn" onClick={() => dec()}>-1</button>
            </div>
        </div>
    )
}

export default UseRef
