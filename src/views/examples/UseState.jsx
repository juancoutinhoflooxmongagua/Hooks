import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("oi")

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
    
            <SectionTitle title="oi"/>
            <div className='center'>
                <span className='center'>{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                </div>
            </div>
            
            <SectionTitle title="tchau"/>
    
            <input type='text' className="input" value={name} onChange={e => setName(e.target.value)}></input>
        </div>
    )
}

export default UseState
