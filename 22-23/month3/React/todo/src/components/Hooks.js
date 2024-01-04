import React,{useState, useEffect,useRef,useReducer}from 'react'
import ThemeComponent from './ThemeComponent';
export const ThemeContext = React.createContext();


const Hooks = () => {

    const [value , setValue] = useState(0);
    const inputRef = useRef(null);
    const outputRef = useRef(null);
    

    const reducer=(state,action)=>{
        switch(action.type){
            case "increment":
                return state + 1;
            case "decrement":
                return state - 1;
        }

    }

    const [state,dispatch] = useReducer(reducer,0);

    useEffect(()=>{
        document.title = `${value}`
    },[value])

    let clickHandler =()=>{
        setValue(value + 1);
    }
    let handleFormClick=(e)=>{
        e.preventDefault()
        outputRef.current.textContent = inputRef.current.value
    }

  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme(){
    setDarkTheme(prevDarkTheme=>!prevDarkTheme)
    console.log(darkTheme)
    console.log("clicked")
  }

  return (
    <div>
        <h4>Hooks</h4>
        <p>Counter {value}</p>
        <button onClick={clickHandler}>INC(function component)</button>

        <form>
            <lable>
                Name:
                <input
                type="text"
                ref={inputRef}
                />
            </lable>
            <div ref={outputRef}>

            </div>
        <button onClick={handleFormClick}>Print</button>
        </form>
        
    </div>

    //---useReducer--

    // <>
    // <button onClick={()=> dispatch({type:'increment'})}>
    //     +
    // </button>   
    // {state}
    // <button onClick={()=> dispatch({type:'decrement'})}>
    //     -
    // </button>
    // </>
    // <>
    // <ThemeContext.Provider value={darkTheme}>
    //     <button onClick={()=>toggleTheme()}>Toggle</button>
    //     <ThemeComponent />
    // </ThemeContext.Provider> 

    // </>
    
  )
}

export default Hooks