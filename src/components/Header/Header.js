import React from 'react'
import { CurrencyDollarIcon } from "@heroicons/react/solid"
import { useSelector } from 'react-redux'

function Header() {


  const price = useSelector((state) => state.orderbook.price)
 
  const open = useSelector((state) => state.orderbook.open)
  const high = useSelector((state) => state.orderbook.high)
  const low = useSelector((state) => state.orderbook.low)
  const volume = useSelector((state) => state.orderbook.volume)
  const quote = useSelector((state) => state.orderbook.quote)
 
  const calcPriceChange=()=> {
    const perc = (price / open) - 1;
    const className = perc >= 0 ? 'text-green-500' : 'text-red-500';
    const prefix = perc >= 0 ? '+' : '';
    
    return <span className={className}>{prefix}{(perc * 100).toFixed(2)}&#37;</span>;
  }
  const calcPriceDifference=()=> {
    const difference = (price - open).toFixed(2) ;
    
    
    return difference ;
  }
  
  return (
    <div className="flex flex-row bg-gray-900 lg:gap-4 gap-1 lg:px-2 px-0 
    lg:rounded-lg lg:mt-1 mt-0 text-white font-mono py-2 md:mx-2 ">
      
       
         <div className="self-center mx-1">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400"/> 
         </div>

         <div className=" self-center">
           <p className=" xl:text-xl text-sm font-bold">BTCUSDT</p>
         </div>
         <div className="self-center   text-center ">
           <p className=" xl:text-2xl text-lg font-bold">{price}</p>
         </div>
          <div className="   text-center flex flex-col hidden xl:inline-flex ">
           <p className="text-gray-400 text-sm ">Mark</p>
           <p className=" text-md  ">{price}</p>
         </div> 
          <div className=" text-center flex flex-col hidden xl:inline-flex">
           <p className="text-gray-400 text-sm l">Index</p>
           <p className=" text-md  ">{price}</p>
         </div> 
         
         <div className=" flex flex-col lg:text-center text-right self-center flex-grow lg:flex-none  ">
           <p className="text-gray-400 text-sm  text-center hidden xl:inline">24h Change</p>
           <p className="text-red-400 xl:text-lg text-sm mx-3 ">{calcPriceDifference()} {calcPriceChange()}</p>
         </div>

         <div className="  flex flex-col text-center hidden xl:inline-flex ">
           <p className="text-gray-400  text-center text-sm ">24h High</p>
           <p className="text-lg   ">{high}</p>
         </div>
         <div className="  flex flex-col text-center ">
           <p className="text-gray-400 text-sm hidden xl:inline-flex ">24h Low</p>
           <p className="text-lg  hidden xl:inline-flex ">{low}</p>
         </div>
         <div className=" flex flex-col text-center hidden xl:inline-flex">
           <p className="text-gray-400 text-sm ">24h Volume(BTC)</p>
           <p className="text-lg  ">{volume}</p>
         </div>
         <div className="  flex flex-col text-center hidden xl:inline-flex">
           <p className="text-gray-400 text-sm  ">24h Volume(USDT)</p>
           <p className=" text-lg ">{quote}</p>
         </div>
      
    </div>
  )
}

export default Header
