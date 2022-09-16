import React from 'react';
import TradingView from "../Chart/TradingView"
import OrderForms from "../Forms/OrderForms"
import Header from "../Header/Header"
import AggTrade from "../OrderBook/AggTrade"
import OrderBook from "../OrderBook/OrderBook"
import Orders from "../Orders/Orders"

function MainPart() {
  return (
    <div className="w-full overflow-y-scroll scrollbar-hide pb-5">
      <div className='lg:mt-5'>
         <Header  />
      </div>
     
     <div className="flex flex-col flex-grow " > 
      <div className="flex flex-row gap-1   mt-1 font-mono  md:mx-2">


        <div className="lg:inline lg:w-8/12  bg-white lg:flex-auto hidden my-auto flex-grow " >
           <TradingView />
        </div>
        <div className="bg-gray-900 w-1/2 lg:w-2/12  rounded-lg md:mx-2 " >
          <OrderBook />
        </div>

        <div className=" lg:inline hidden lg:w-2/12  bg-gray-900 rounded-lg "  >
          <AggTrade />
        </div>
        <div className="inline lg:hidden   w-1/2  bg-gray-900 lg:w-5/6 rounded-lg md:mx-2 flex-grow  ">
             <OrderForms/>
         </div>
      </div>

      <div className="flex flex-row gap-4    mt-1 mx-2 font-mono lg:mx-2  ">
         <div className=" lg:w-4/6 w-full order-last lg:order-none bg-gray-900 rounded-lg px-2 ">
              <Orders/>
         </div>
          <div className="hidden lg:inline lg:w-2/6  bg-gray-900 rounded-lg  mr-1 ">
             <OrderForms/>
         </div>
      </div> 
      </div>     
     

  
    </div>
  )
}

export default MainPart
