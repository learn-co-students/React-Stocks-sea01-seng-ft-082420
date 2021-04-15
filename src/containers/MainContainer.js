import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      stocks:[],
      filteredStocks: [],
      portfolioStocks: [],
      isChecked: null
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({stocks: stocks, filteredStocks: stocks}))
  }

  addPortfolioStocks = (stock) =>{
    if(!this.state.portfolioStocks.includes(stock)){
      this.setState({
        portfolioStocks:[...this.state.portfolioStocks,stock]})
    }
  
  }

  removePortfolioStocks = (stock) =>{
    this.setState({portfolioStocks: this.state.portfolioStocks.filter(portfolioStock => portfolioStock.id !== stock.id)})
  }

  setFilterType = (e) =>{
    e.preventDefault();
    let displayStocks = [...this.state.stocks.filter(stock => stock.type === e.target.value)]
    if(this.state.isChecked !== null){
      this.displaySortedStock(this.state.isChecked, displayStocks)
    } else {
      this.setState({filteredStocks:displayStocks})
    }    
  }

  displaySortedStock = (type, displayStocks=this.state.filteredStocks) =>{
    if(type === 'alphabetically') {
      this.setState({isChecked: 'alphabetically'});
      this.setState({filteredStocks:[...displayStocks.sort((a, b) => (a.name > b.name) ? 1 : -1)]})
    } else if(type === 'price') {
      this.setState({isChecked: 'price'});
      this.setState({filteredStocks:[...displayStocks.sort((a, b) => (a.price > b.price) ? 1 : -1)]})
    }
  }

  render() {
    return (
      <div>
        <SearchBar setFilterType={this.setFilterType} displaySortedStock={this.displaySortedStock} isChecked={this.state.isChecked}/>
          <div className="row">
            <div className="col-8">
              <StockContainer stocks={this.state.filteredStocks} addPortfolioStocks={this.addPortfolioStocks}/>
            </div>
            <div className="col-4">
              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} removePortfolioStocks={this.removePortfolioStocks}/>
            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
