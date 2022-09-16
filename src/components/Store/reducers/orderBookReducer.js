import * as Data from '../constats/Data'

const DEFAULT = {
  hasErrored: false,
  isLoading: false,
  hasFetched: false,
  price: '60173.83',
  open: '60000',
  volume: '1000000',
  close:'6000',
  quantity:'70000',
  low:'58000',
  high:'50000',
  quote:'10000',
  asks: Data.asks,
  bids: Data.bids,
  priceHistory:Data.priceHistory,
  KlineOpen:'',
  KlineClose:'',
  KlineHigh:'',
  KlineLow:'',
  KlineVol:'',
  Kline:Data.Kline,
  KlineData:Data.Kline,
  KlineDate:''
}

export default  function orderBookReducer(state = DEFAULT, action) {
  switch (action.type) {
    case 'ORDERBOOK_HAS_ERRORED':
      return {
        ...state,
        hasErrored: action.hasErrored
      }

    case 'ORDERBOOK_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      }

    case 'ORDERBOOK_HAS_FETCHED':
      return {
        ...state,
        hasFetched: action.hasFetched
      }

    case 'ORDERBOOK_WS_UPDATE':
      switch (action.data.type) {
            

        case 'ticker':
         
          return {
            ...state,
            tickerprice: parseFloat(action.data.response.price).toFixed(2),
        
            volume: parseFloat(action.data.response.volume_24h).toFixed(2)
          }
          case 'aggTrade':
          
            return {
              ...state,
           
            price: parseFloat(action.data.response.p).toFixed(2),
            priceHistory: [[state.price,state.quantity],...state.priceHistory].slice(0,30),
            quantity: parseFloat(action.data.response.q).toFixed(6)
            }
            case 'depthUpdate':
           
              return {
                ...state,
                asks: action.data.response.a,
                bids: action.data.response.b
              }
             

            case '24hrMiniTicker':
       
              return {
                ...state,
                close:parseFloat(action.data.response.c),
                open: parseFloat(action.data.response.o),
                high:parseFloat(action.data.response.h),
                low:parseFloat(action.data.response.l),
                volume:parseFloat(action.data.response.v).toFixed(2),
                quote:parseFloat(action.data.response.q).toFixed(2)
              }

              case 'kline':
           
                return {
                  ...state,
                  KlineDate:action.data.response.k.t,
                  KlineOpen: [action.data.response.k.o,...state.KlineOpen],
                  KlineClose: [action.data.response.k.c,...state.KlineClose],
                  KlineHigh:[action.data.response.k.h,...state.KlineHigh],
                  KlineLow:[action.data.response.k.l,...state.KlineLow],
                  KlineVol:[action.data.response.k.v,...state.KlineVol],
                  Kline:[action.data.response.k,...state.Kline]
                }
             
          

        default:
          return state
      }
     

    default:
      return state
  }
}
