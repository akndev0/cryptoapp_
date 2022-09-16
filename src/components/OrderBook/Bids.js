import React from 'react'
import { useSelector } from 'react-redux'


function Bids() {

  const bids = useSelector((state) => state.orderbook.bids)
 
  
  const renderBidsOrders=(orders)=> {
    return (
      <div >
        {orders.map((order, index) => (
          <div className="flex justify-between" key={index}>
            
              <p className="text-green-500 text-sm">{parseFloat(order[0]).toFixed(2)}</p>
          

           
              <p className="text-gray-400 text-sm">{parseFloat(order[1]).toFixed(6)}</p>
        



          </div>
        ))}
      </div>
      
    
    )

  }
  
  const limitOrders=(orders, amount)=> {
    return [...orders.slice(0, amount)]
  }
  
  return (
    <div className=" text-right px-1 md:px-2 scrollbar-hide ">
      {renderBidsOrders(limitOrders(bids,13))}
    </div>
  )
}

export default Bids
