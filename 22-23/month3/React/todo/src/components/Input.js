import React ,{useState} from 'react'

const Input = ({handleAdd}) => {

    const [item,setItem] = useState("")

    const handleChange = (e)=>{
        setItem(e.target.value);
    }

    const handleClick = (e) =>{
        console.log(item);
        handleAdd(item)

    }
  return (
    <div>
        <input type="text"  onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
    </div>
    
  )
}

export default Input