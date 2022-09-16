import React from 'react'
import { useState } from 'react';
import LimitForms from './LimitForms'
import MarketForms from './MarketForms';


function OrderForms() {

  const [activeTab, setActiveTab] = useState(1)
  const headerClickHandeler = (id) => {
    
    setActiveTab(id)
  }



  return (
    <div className="flex flex-col  bg-gray-900  rounded-lg text-xs  ">
      <div className="flex gap-4 mx-5 my-5">

      
       <div onClick={()=>headerClickHandeler(1)}>
          <h2 className={activeTab ===1 ? "text-blue-500":"text-gray-500"}  >Limit</h2>
       </div>
       <div onClick={()=>headerClickHandeler(2)}>
          <h2 className={activeTab ===2 ? "text-blue-500":"text-gray-500"}  >Market</h2>
       </div>
       <div  onClick={()=>headerClickHandeler(3)}>
          <h2 className={activeTab ===3 ? "text-blue-500":"text-gray-500"} >Stop-Limit</h2>
       </div>
       </div>

        <div>
          {activeTab ===1 ? <LimitForms/>:""}
          {activeTab ===2 ? <MarketForms/>:""}
          {activeTab ===3 ? <div className="h-full"></div> :""}
        </div>
    </div >
  )
}

export default OrderForms
