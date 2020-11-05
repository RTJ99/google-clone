
import React,{ useState } from "react"
import Search from "./components/Search"
import axios from "axios"
function App() {
  const [state, setState] = useState(
    {
      s:"",
      results:[],
      selected:{}
    }
  );

  
  const apiurl ="http://www.omdbapi.com/?apikey=377f16f7";
  const search = (e) => {
    if(e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then((data)=>{
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
      </main>
    </div>
  )
}

export default App
