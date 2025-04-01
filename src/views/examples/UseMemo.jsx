import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className='center'>
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))} />
            </div>
        </div>
    )
}

export default UseMemo
