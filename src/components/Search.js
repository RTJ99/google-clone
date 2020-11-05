import React from "react"

function search({handleInput, search}) {
  return (
    <section className="seachbox-wrap">

        <input onKeyPress={search} 
        onChange={handleInput} 
        className="search" 
        title="Search" 
        type="text" 
        />
        <div id="buttons">
        <input type="submit" className="button" value="Google Search"/>
        <input type="submit"className="button"value="I'm Feeling Lucky"/>
        </div>
        
    </section>
  )
}

export default search;
