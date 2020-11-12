import React from "react"

function search({handleInput, search}) {
  return (
    
    <section className="seachbox-wrap">

          
              <div className="input">
              <input onKeyPress={search} 
              onChange={handleInput} 
               
              title="Search" 
              type="text" 
              />
                <img className="voice" src="img/mic.png" alt="Search By Voice" />
              </div>
              <div className="mainContainer">
              <div className="buttons">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
              </div>
              <p className="language">Google offered in: <a href="#">ChiShona IsiZulu Chichewa Setswana</a></p>
              </div>
            

        
        
        
    </section>
    
  )
  
}
<script>
      
      </script>

export default search;
