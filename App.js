
import React,{ useState } from "react"
import Search from "./components/Search"
import Results from "./components/Results"
import axios from "axios"
function App() {
  const [state, setState] = useState(
    {
      s:"",
      results:[],
      selected:{}
    }
  );

  
  const apiurl ="https://www.googleapis.com/customsearch/v1?key=AIzaSyCzmYKdspQYRDwr_MRfbUpcyXVMsQ5bPX4&cx=9fd12759a063b29d1&q="
    ;
  const search = (e) => {
    if(e.key === "Enter") {
      axios(apiurl + state.s).then(({data})=>{
        let results = data.items;
        
        setState(prevState => {
          return{...prevState, results:results} 
        })
        console.log(data);
      
        
      });
    }
  }
  const handleInput = (e) =>{
    
    let s = e.target.value;
    setState(prevState => {
      return{ ...prevState, s: s }
      }
    );
    console.log(state.s);
  }
  if(state.results.length >0){
    return(
    <div className="">
          <Results results = {state.results}
          query={state.s}/>
          
          </div>
    );
    
  }
  else{


  
  return (
    <div className="App">
      <header className="App-header">
        <nav className="clearfix">
            <ul className="left">
              
            </ul>

            <ul className="right">
              <li><a href="#">Gmail</a></li>
              <li><a href="#">Images</a></li>
              <li className="menu"><a href="#">Menu</a></li>
              
              <li className="profile-pic"><a href="#">Profile Pic</a></li>
            </ul>
        </nav>
        <div className="mainContainer">

        
            <img className="logo" src="img/logo.png" alt="Google Logo" />

            

            
          </div>
      </header>

      <main>
        
        
      
        <Search handleInput= {handleInput} search={search}/>
        
        
      </main>
        <footer>
        <p className="location">Zimbabwe</p>
        <nav className="clearfix">
          <ul className="left">
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Business</a></li>
            <li><a href="#">About</a></li>
              <li><a href="#">How Search Works</a></li>
          </ul>

          <ul className="right">
            <li><a href="#">Privary</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}
}

export default App
