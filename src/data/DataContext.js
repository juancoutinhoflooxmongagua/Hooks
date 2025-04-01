import React from "react";

export const data = {
    number: 123,
    text: 'api rodando'
}

const DataContext = React.createContext(data)
export default DataContext