import React, { Component } from 'react';
import Stock from '../components/Stock'

const StockContainer = props => {
  let stocks = props.stocks

  const sortedStocks =() => {
    if(props.sort === 'none'){
      return props.stocks
    }

    if(props.sort === 'Alphabetically'){
      return props.stocks.sort((a, b) => a.name > b.name ? 1 : -1)
    }
    
    if (props.sort === 'Price'){
      return props.stocks.sort((a, b) => a.price > b.price ? 1 : -1)
    }
  }

    return (
      <div>
        <h2>Stocks</h2>
        {sortedStocks().map(stock => <Stock key={stock.id} stock={stock} action={props.addToPortfolio} />)    }
      </div>
    )

}

export default StockContainer;
