import React, { useState, useRef } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseRef = () => {
    const [val, setVal] = useState("")
    const changeCount = useRef(0) 
    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    const handleChange = (e) => {
        setVal(e.target.value)
        changeCount.current += 1 
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <div>
                <input 
                    ref={inputRef} 
                    className='input' 
                    value={val} 
                    onChange={handleChange}
                />
                <button className="btn" onClick={focusInput}>Focar</button>
                <p>Alterações: {changeCount.current}</p> {}
            </div>
        </div>
    )
}

export default UseRef
