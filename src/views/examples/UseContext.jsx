import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'

const UseContext = () => {
    const context = useContext(DataContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div>
                <span>
                    {context.text}
                    {context.number}
                </span>
            </div>
        </div>
    )
}

export default React.memo(UseContext)
