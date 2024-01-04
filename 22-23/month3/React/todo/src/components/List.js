import React  from 'react'

const List = (props) => {
  return (
    <>
     <b>Function component</b>
    <ul>
    {
      props.list ? props.list.map((item)=><li>{item}</li>) : null
    }
   </ul>
    </>
   
  )
}

export default List