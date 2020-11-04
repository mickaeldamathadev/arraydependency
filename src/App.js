import './App.css';
import React,{useState,useEffect} from 'react'

function App() {

  const [ caughtChange,setCaught ] = useState([])

  const [ uncaughtChange,setUncaught ] = useState([]) 

  const click = (e) => {

    let oldCaught = caughtChange
    let oldUncaught = uncaughtChange

    oldCaught.includes(e.target.name) ? oldCaught.splice(oldCaught.indexOf(e.target.name),1) : oldCaught.push(e.target.name)
    setCaught(caught => [...oldCaught])

    oldUncaught.includes(e.target.name) ? oldUncaught.splice(oldUncaught.indexOf(e.target.name),1) : oldUncaught.push(e.target.name)
    setUncaught(uncaught => oldUncaught)

    
  }

  useEffect(() => {
    console.log('Change has been caught by useEffect at ' +  new Date().toLocaleTimeString())
  },[caughtChange])

  useEffect(() => {
    // This instruction will never been executed
    console.log('Change has not been caught by useEffect')
  },[uncaughtChange])

  return (
    <div className="App">
      <button onClick={(e)=>click(e)} name='value'> click </button>
    </div>
  );
}

export default App;
