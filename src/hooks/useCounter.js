import { useState } from "react";

export const useCounter = initialValue => {
    const [count, setCount] = useState(initialValue)
 
    function inc() {
        setCount(prevCount => prevCount + 1)  
    }

    function dec() {
        setCount(prevCount => prevCount - 1) 
    }

    return [count, inc, dec]
}
