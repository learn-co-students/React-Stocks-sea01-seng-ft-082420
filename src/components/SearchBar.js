import React from 'react';

const SearchBar = ({props, setFilterType, displaySortedStock, isChecked}) => {

  // const[checked, setChecked] = useState(null)
  
  // console.log({isChecked})
  return (
    
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="alphabetically" checked={isChecked == 'alphabetically'} onChange={(e) => displaySortedStock(e.target.value)}/>
        Alphabetically &nbsp;
      </label>
      <label>
        <input type="radio" value="price" checked={isChecked == 'price'} onChange={(e) => displaySortedStock(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select  onChange={(e) => setFilterType(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
