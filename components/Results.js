import React,{ useState} from 'react'
import Result from './Result'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Results({ results, query }) {
  const [state, setState] = useState(
    {
      query:query
      
    }
  );
    return (
        <section className="results">
            
            
            <div className="logo1">
            <img className="small-google-logo" src="img/logo.png" alt="google logo"/>
            </div>
            
            <div className="input2">
              <input 
              value={state.query}
              title="Search" 
              type="text" 
              className="inputStyle"
              />
            
            
        
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
