import React from 'react'

function LimitsForm() {
    return (
      <div className="flex md:flex-row flex-col
        text-gray-300 text-xs md:my-5 md:mx-5">
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
                   <input className="rounded-md md:text-lg text-xs text-right  bg-gray-800 w-full p-2" type="number" />
                </div>
               
              </div>
              <div className="my-2">
                <p className="">Amount</p>
                <div className="mt-2">
                   <input className="rounded-md  md:text-lg text-xs  text-right  bg-gray-800 w-full p-2" type="number" />
                </div>
              </div>
              <div className="my-2">
                
                <input type="range" className="w-full mt-4" />
              </div>
              <div className="my-2">
              <button className="bg-green-500 w-full text-white  rounded-lg md:text-lg text-xs  
                 my-2 py-2" >Buy/Long</button>
               
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
                   <input className="rounded-md  text-right md:text-lg text-xs  bg-gray-800 w-full p-2" type="number" />
                </div>
               
              </div>
              <div className="my-2">
                <p className="">Amount</p>
                <div className="mt-2">
                   <input className="rounded-md text-right md:text-lg text-xs   bg-gray-800 w-full p-2" type="number" />
                </div>
              </div>
              <div className="my-2">
               
                <input type="range" className="w-full  mt-4" />
              </div>
              <div className="my-2">
                <button className="bg-red-500 w-full text-white  rounded-lg md:text-lg text-xs  
                 my-2 py-2" >Sell/Short</button>
                
              </div>
              </form>
            </div>
          </div>
  
        </div>
      </div>
    )
  }
  
  export default LimitsForm
  