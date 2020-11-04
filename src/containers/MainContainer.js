import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state={
    stocks: [],
    portfolioId: [],
    sort: 'none',
    filter: null,
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(data => {
      this.setState({
        stocks: data
      })
    })
 
  }

  addToPortfolio =(id) => {
    if(!this.state.portfolioId.find(eachId => eachId === id)){
      this.setState({
        portfolioId: [... this.state.portfolioId, id]
      })
    }
  }

  removeFromPortfolio =(id) => {
    this.setState({
      portfolioId: this.state.portfolioId.filter(s => s !== id)
    })
  }

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value
    })
  }

  handleFilterStocks = () => {
    if(this.state.filter){
      return this.state.stocks.filter(s => s.type === this.state.filter)
    }else{
      return this.state.stocks
    }
  }

  selectSort = sort => {
    this.setState({
      sort
    })
  }

  


  render() {
    let portfolioStocks = this.state.portfolioId.map (id => this.state.stocks.find(stock => stock.id === id))
    return (
      <div>
        <SearchBar handleFilterChange={this.handleFilterChange} selectSort={this.selectSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.handleFilterStocks()}  addToPortfolio={this.addToPortfolio}  sort={this.state.sort}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolioStocks} removeFromPortfolio={this.removeFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
