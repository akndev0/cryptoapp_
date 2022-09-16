import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import React from 'react'
function Asks() {

  const asks = useSelector((state) => state.orderbook.asks)

  useEffect(() => { }, [])
  
  const renderAsksOrders=(orders)=> {
    return (
      <>
        {orders.map((order, index) => (
          <div className="flex justify-between " key={index}>
           
              <p className="text-red-500 text-sm">{parseFloat(order[0]).toFixed(2)}</p>
          

            
              <p className="text-gray-400 text-sm">{parseFloat(order[1]).toFixed(6)}</p>
           



          </div>
        ))}
      </>
      
    )
  }
  const limitOrders=(orders, amount)=> {
    return [...orders.slice(0, amount)]
  }

  return (
    <div className="flex flex-col-reverse  text-right  px-1 md:px-2  scrollbar-hide ">
         


      {renderAsksOrders(limitOrders(asks,13))}
    </div>
  )
}

export default Asks
