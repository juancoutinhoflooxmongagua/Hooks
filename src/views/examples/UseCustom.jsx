import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = () => {
    const [count, inc, dec] = useCounter(10)  

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const { data: estados, loading } = useFetch(url)

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

            {}
            {loading ? (
                <p>Carregando dados...</p>
            ) : (
                <div>
                    <h2>Lista de Estados</h2>
                    <ul>
                        {estados.map((estado, index) => (
                            <li key={index}>{estado.sigla} - {estado.nome}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default UseRef
