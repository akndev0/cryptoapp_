import React from 'react'
import { HomeIcon, CogIcon, CurrencyDollarIcon, BriefcaseIcon, CashIcon } from '@heroicons/react/solid'


function Menu() {

  

  return (

    
      <div className=" bg-gray-900 lg:my-5 lg:mx-2  lg:left-0 bottom-0 lg:rounded-lg  text-white  text-center " >
        <div className="flex flex-grow lg:flex-col lg:gap-5 lg:px-1  justify-evenly py-2  lg:py-4  text-gray-400">
          <div >
            <HomeIcon className="h-8 w-6 mx-auto " />
            <p className="invisible lg:visible text-xs text-center ">Markets</p>
          </div>
          <div >
            <CurrencyDollarIcon className="h-8 w-6 mx-auto " />
            <p className="invisible lg:visible text-xs text-center ">Buy Crypto</p>
          </div>
          <div >
            <CashIcon className="h-8 w-6 mx-auto " />
            <p className="invisible lg:visible text-sm text-center ">Trade</p>
          </div>
          <div >
            <BriefcaseIcon className="h-8 w-6 mx-auto " />
            <p className="invisible lg:visible text-xs text-center ">Wallet</p>
          </div>
          <div >
            <CogIcon className="h-8 w-6 mx-auto" />
            <p className="invisible lg:visible text-sm text-center ">Settings</p>
          </div>
         

        </div>
       

      </div>
      
     

  )
}

export default Menu
