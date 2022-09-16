import React from 'react'
import { useState } from 'react';
import OpenOrders from './OpenOrders';
import OrderHistory from './OrderHistory';
import TradeHistory from './TradeHistory';
function Orders() {

  const [activeTab, setActiveTab] = useState(1)
  const headerClickHandeler = (id) => {

    setActiveTab(id)
  }

  return (
    <div className="flex flex-col ">
      <div className="flex gap-4 mx-5 my-5 text-sm ">


        <div onClick={() => headerClickHandeler(1)}>
          <h2 className={activeTab === 1 ? "text-blue-500" : "text-gray-500"}  >Open Orders</h2>
        </div>
        <div onClick={() => headerClickHandeler(2)}>
          <h2 className={activeTab === 2 ? "text-blue-500" : "text-gray-500"}  >Order History</h2>
        </div>
        <div onClick={() => headerClickHandeler(3)}>
          <h2 className={activeTab === 3 ? "text-blue-500" : "text-gray-500"} >Trade History</h2>
        </div>
      </div>

      <div className="flex-grow bg-red-400 ">
        {activeTab === 1 ? <OpenOrders /> : ""}
        {activeTab === 2 ? <OrderHistory /> : ""}
        {activeTab === 3 ? <TradeHistory className="h-52"></TradeHistory> : ""}
      </div>
    </div >
  )
}

export default Orders
