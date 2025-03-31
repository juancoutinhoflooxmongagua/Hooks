import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const UseState = (props) => {
    const [count, setCound] = useState(0)

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
    
            <SectionTitle></SectionTitle>
        </div>
    )
}

export default UseState
