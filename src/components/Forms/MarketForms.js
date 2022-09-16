import React from 'react'

function MarketForms() {
    return (
      <div className="flex text-gray-300 text-sm my-5 mx-5">
        <div className="flex-1  rounded-lg  ">
          <div className="flex flex-col my-2 mx-2 ">
            <div className="flex justify-between text-xs">
              <p>Avbl</p>
              <p>---USDT</p>
            </div>
            <div className="my-4">
              <form className="">
              <div className="my-2">
                <p className="">Price</p>
                <div className="mt-2">
                   <input disabled className="rounded-md  text-right text-lg bg-gray-500 w-full p-2 " placeholder="Market"
                    type="text" />
                </div>
               
              </div>
              <div className="my-2">
                <p className="">Amount</p>
                <div className="mt-2">
                   <input className="rounded-md text-lg text-right  bg-gray-800 w-full p-2"   type="number" />
                </div>
              </div>
              <div className="my-2">
                
                <input type="range" className="w-full mt-4" />
              </div>
              <div className="my-2">
                <button className="bg-green-500 w-full text-white rounded-lg text-lg
                 my-2 py-2
                " >Buy/Long</button>
              </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex-1">
        <div className="flex flex-col my-2 mx-2 ">
            <div className="flex justify-between text-xs">
              <p>Avbl</p>
              <p>---BTC</p>
            </div>
            <div className="my-4">
              <form className="">
              <div className="my-2">
                <p className="">Price</p>
                <div className="mt-2">
                   <input disabled  className="rounded-md text-lg  text-right  bg-gray-500 w-full p-2" placeholder="Market" type="number" />
                </div>
               
              </div>
              <div className="my-2">
                <p className="">Amount</p>
                <div className="mt-2">
                   <input className="rounded-md text-right text-lg  bg-gray-800 w-full p-2" type="number" />
                </div>
              </div>
              <div className="my-2">
               
                <input type="range" className="w-full  mt-4" />
              </div>
              <div className="my-2">
                <button className="bg-red-500 w-full text-lg text-white rounded-lg 
                 my-2 py-2
                " >Sell/Short</button>
              </div>
              </form>
            </div>
          </div>
  
        </div>
      </div>
      
    )
  }
  
  export default MarketForms
  