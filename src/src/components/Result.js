import React from 'react'

function Result({ result }) {
    return (
        
        
        <section >
            
            <section className="resultsWrap">
            
            <div className= "result">
            <p className="Tlink">{result.displayLink}</p>
            <a href={result.link}>{result.title}</a>
            <p>{result.snippet}</p>
            
        
        </div>
            </section>
        
        </section>
    )
        
        
}

export default Result
