import { React } from "react";
import SearchBar from '../SearchBar/SearchBar.jsx';
import FilterBar from '../FilterBar/FilterBar.jsx';
import SortingBar from '../SortingBar/SortingBar.jsx';

const MegaBar = () => {

  return (
  <div>

    <SearchBar />

    <span style={{display: 'inline-block', width: '60px'}}></span>

    <FilterBar />

    <span style={{display: 'inline-block', width: '20px'}}></span>

    <SortingBar />

  </div>
  )};

  export default MegaBar;