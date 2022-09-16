import React from 'react'
import { AdvancedChart } from "react-tradingview-embed";

function TradingView() {
  return (
    <>
      <AdvancedChart   widgetProps={{"theme": "dark","symbol": "BINANCE:BTCUSD"}} />
    </>
  )
}

export default TradingView
