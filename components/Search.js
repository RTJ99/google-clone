import React, { useState } from "react"
import axios from "axios"
import Suggestions from './Suggestions.jsx';


function SearchForm(props){

  const [state, setState] = useState(
    {
      
      query:props.query,
      suggestions:{}
    }
  );

  const handleValueChanged = (e) => {
		let queryText = e.target.value;
		let fetchedSuggestions = [];

		axios.get("https://suggestqueries.google.com/complete/search?&output=toolbar&hl=EN_US&q=" + queryText)
			.then(res => {
				let parser = new DOMParser();
				let suggestionsXml = parser.parseFromString(res.data, "text/xml");
				let dataNodes = suggestionsXml.getElementsByTagName("suggestion");
				
				for (var x = 0; x < dataNodes.length; x++) {
					fetchedSuggestions.push(dataNodes[x].getAttribute("data"));
				}

				setState({query: queryText, suggestions: fetchedSuggestions});
			});

		setState({query: queryText, suggestions: fetchedSuggestions});
  };
  
  
	
		return (
			<section className="seachbox-wrap">
        <div className="input">
        <input onKeyPress={props.search} 
              onChange={props.handleInput} 
               
              title="Search" 
              type="text"  value={state.query} onInput={handleValueChanged} />
              <img className="voice" src="img/mic.png" alt="Search By Voice" />
				<div className="sug-list">
					{state.suggestions.length > 0 ? (
            
						<div id="suggestion-list-container" >
					{state.suggestions.length > 0 ? (
						<Suggestions 
							suggestions={state.suggestions} 
							 
						/>) 
					: ""}
				</div>)
             
					: ""}
          
              
				</div>
        
        </div>
        <div className="mainContainer">
              <div className="buttons">
                <button>Google Search</button>
                <button>I'm Feeling Lucky</button>
              </div>
              <p className="language">Google offered in: <a href="#">ChiShona IsiZulu Chichewa Setswana</a></p>
              </div>
        </section>
				
		);
	
}










export default SearchForm