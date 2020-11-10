
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
  
  return (
    <div className="App">
      <header className="App-header">
      <div id="container">
    
        <div className="g_image" >
        <img src="img/google-logo.png" height="95" width="260"   alt=" google logo "/>
          </div>
        </div>
        
      </header>
      <main>
      <Search handleInput= {handleInput} search={search}/>
      <Results results = {state.results}/>
      </main>
    </div>
  )
}

export default App
