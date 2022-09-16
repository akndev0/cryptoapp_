import React from 'react'
import { useSelector } from 'react-redux'
function Price() {

  const price = useSelector((state) => state.orderbook.price)
  const open = useSelector((state) => state.orderbook.high)
  

  const calcPriceChange=()=> {
    const perc = (price / open) - 1;
    const className = perc >= 0 ? 'text-green-500' : 'text-red-500';
    const prefix = perc >= 0 ? '+' : '';
    
    return <span className={className}>{prefix}{(perc * 100).toFixed(2)}&#37;</span>;
  }
  
  
  return (
    <div className="flex 
    justify-between text-right lg:text-xl text-sm px-2 border-b-1 border-t-1 border-gray-500" >
     <div className="">
       <p className="text-gray-100">{price}</p>
     </div>

     <div className="">
       <p className="text-gray-400">{calcPriceChange()}</p>
     </div>
   </div>
      
    
  )
}

export default Price
