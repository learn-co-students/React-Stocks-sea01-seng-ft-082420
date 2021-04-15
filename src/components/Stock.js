import React from 'react'

// const handleClick = (e) =>{
//   // console.log(e.target.innerHTML)
//   addPortfolioStocks(e.target.innerHTML)

// }
const Stock = ({stock, addPortfolioStocks}) => (

  
  <div>

    <div  onClick={() => addPortfolioStocks(stock)} className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            stock.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            stock.ticker + ":" + stock.price
          }</p>
      </div>
    </div>


  </div>

);

export default Stock
