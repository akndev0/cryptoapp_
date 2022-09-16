import React from 'react'
import { useEffect } from 'react'
import Asks from './Asks'
import Bids from './Bids'
import Price from './Price'
import { useDispatch } from 'react-redux'
import { connectToSocket } from '../Store/actions/orderBookActions'

function OrderBook() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(connectToSocket())
  })




  return (
    <div className="py-4 md:px-2">

      <div className="flex justify-between mb-2 px-2 text-center  ">
        <div>
          <p className="text-white text-ellipsis overflow-hidden text-sm">Price</p>
          <p className="text-white text-ellipsis overflow-hidden text-sm">(USDT)</p>
        </div>
        <div>
          <p className="text-white text-ellipsis overflow-hidden  text-sm">Size</p>

          <p className="text-white text-ellipsis overflow-hidden  text-sm">(BTC)</p>
        </div>
       

      </div>
      <div className='flex flex-col  my-5'>
      <div >
         <Asks />
      </div>
      <div >
      <Price />
      </div>
      <div >
      <Bids />
      </div>
      </div>
    </div>
  )
}

export default OrderBook

