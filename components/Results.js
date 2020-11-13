import React,{ useState} from 'react'
import Result from './Result'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios"
import Suggestions from './Suggestions.jsx';

function Results({ results, query ,handleInput, search,props}) {
  const [state, setState] = useState(
    {
      query:query,
      
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
        <section className="results">
            
            
            <div className="logo1">
            <img className="small-google-logo" src="img/logo.png" alt="google logo"/>
            </div>
            
            <div className="input2">
            <input onKeyPress={search} 
              onChange={handleInput} 
               
              title="Search" 
              type="text"  value={state.query} onInput={handleValueChanged} />
            
            
        
        </div>
        
        <div className="resultsWrap">
        <section className="navbar clearfix">
      <nav className="nav">
        <ul>
          <li><a className="first-navbar" href="#">All</a></li>
          <li><a href="#">Images</a></li>
          <li><a href="#">Maps</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Videos</a></li>
         
          <li><a href="#">More </a></li>
          
        </ul>
      </nav>
      
    </section>
        <p class="number-speed-results">About 2,860,000 results (0.24 seconds) </p>
        </div>
        
            
             {
                results && results.map((result, index)=>(
                <Result result ={result} key={index}/>
            ))
        }
    
        </section>
    )
}


export default Results
