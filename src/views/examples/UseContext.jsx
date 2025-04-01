import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'

const UseContext = () => {
    const context = useContext(DataContext)

    const AddNumber = (n) => {
        context.setState(prevState => ({
            ...prevState,       // Preserva o estado anterior
            number: prevState.number + n  // Atualiza o número com o valor de n
        }))
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div>
                <span>
                    {context.state.text}
                    {context.state.number}
                </span>

                <div>
                    <button onClick={() => AddNumber(1)} className="btn">+1</button>
                    <button onClick={() => AddNumber(-1)} className="btn">-1</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(UseContext)
