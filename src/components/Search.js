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
        <button className="button"> Google Search</button>
        <input type="submit"className="button"value="I'm Feeling Lucky"/>
        </div>
        
    </section>
    
  )
  
}
<script>
      
      </script>

export default search;
