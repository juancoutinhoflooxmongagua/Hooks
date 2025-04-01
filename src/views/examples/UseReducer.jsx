import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const estadoInicial = { contador: 0 }

function redutor(estado, acao) {
    switch (acao.tipo) {
        case 'incrementar':
            return { contador: estado.contador + 2 } 
        case 'multiplicar':
            return { contador: estado.contador * 7 } 
        case 'dividir':
            return { contador: estado.contador / 25 } 
        case 'decrementar':
            return { contador: estado.contador - 1 } 
        default:
            throw new Error('Ação desconhecida')
    }
}

const UseReducer = () => {
    const [estado, despachar] = useReducer(redutor, estadoInicial)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div>
                <span>
                    Contador: {estado.contador}
                </span>

                <div>
                    <button onClick={() => despachar({ tipo: 'incrementar' })} className="btn">+2</button>
                    <button onClick={() => despachar({ tipo: 'multiplicar' })} className="btn">*7</button>
                    <button onClick={() => despachar({ tipo: 'dividir' })} className="btn">/25</button>
                    <button onClick={() => despachar({ tipo: 'decrementar' })} className="btn">-1</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(UseReducer)
