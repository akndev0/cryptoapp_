import { useSelector } from 'react-redux'
import React from 'react'
function AggTrade() {

  const priceHistory = useSelector((state) => state.orderbook.priceHistory)
 

const renderTradeHistory=(priceHistory2)=> {
  return (
    <>

      {priceHistory2 ? priceHistory2.map((priceHistoryItem, index) => (
        <div className="flex justify-between text-sm  " key={index}>
          
            <p className={ index!==0 ? (priceHistoryItem[0]-priceHistory2[index-1][0]>=0 ? "text-green-500":"text-red-500") :"text-gray-500" } >{priceHistoryItem[0]}</p>
          
            <p className="text-gray-400">{priceHistoryItem[1]}</p>
       

           
        </div>)) :""
      }
    </>
    
  )
}


  return (
    <div className="px-2 py-4 text-lg   " >
      
      <div className="mb-2 ">
        <p className="text-white text-sm ">Trade Book</p>
     </div>

      <div className='overflow-y-scroll scrollbar-hide' >
          {renderTradeHistory(priceHistory)}
      
      </div>


    </div>
  )
}

export default AggTrade
