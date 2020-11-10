import React from 'react'

function Result({ result }) {
    return (
        <div className= "result">
            <p className="Tlink">{result.displayLink}</p>
            <h3>{result.title}</h3>
            <p>{result.snippet}</p>
            
            
    
            
            
        </div>
    )
}

export default Result
