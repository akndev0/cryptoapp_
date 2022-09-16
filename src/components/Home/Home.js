import React from 'react'
import Menu from "../Menu/Menu"
import MainPart from "./MainPart"

function Home() {
  return (
    <div className="flex flex-col-reverse lg:flex-row 
    
    lg:flex-grow bg-gray-800  justify-between h-screen" >
      
      <Menu/>
     
      <MainPart/> 

      
    </div>
  )
}

export default Home
