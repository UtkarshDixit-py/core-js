import './App.css';
import Input from './components/Input';
import List from './components/List';
import Card from './components/Card';
import { useState } from 'react';
import Hooks from './components/Hooks';

function App() {

  const [listArr,setListArr] = useState([]);

  const handleAdd =(item)=>{
    setListArr([...listArr,item])
  }

  // const list = ["apple","notebook","bottle","mouse","keyboard"];
  return (
    <div >
   <Input handleAdd={handleAdd}/>
    <List list={listArr}/> 
    <Hooks />

    <Card /> 
    
    
    </div>
  );
}

export default App;

// why we use noscript

//where does react start //starting point in react

//can we use any other tag as container , other than div and empty tag

//events other than on and once 
//try triggering events during response and request
