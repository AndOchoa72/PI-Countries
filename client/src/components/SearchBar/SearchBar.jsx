import { React, useState } from "react";
import { useDispatch } from 'react-redux';
import { FILT_CONT_ALL, FILT_CONT_AFRI,
   FILT_CONT_ANTA, FILT_CONT_ASIA, FILT_CONT_EURO,
   FILT_CONT_NAME, FILT_CONT_OCEA, FILT_CONT_SAME,
   setSearchText, setFilterContinent
   } from "../../redux/actions";
import store from "../../redux/store";
import FilterByContinent from "../AppFlow/FilterByContinent";

const SearchBar = () => {

  const dispatch = useDispatch(store);
  
  const [localSrchTxt, setLocalSrchTxt] = useState('');

  const chgHndlrSrch = (event) => {
    setLocalSrchTxt(event.target.value);
  };

  const btnSearchClick = () => {
    dispatch(setSearchText(localSrchTxt));
  };

  const searchClearClick = () => {
    setLocalSrchTxt('');
  };

  const chgFilterContinentHdlr = (event) => {
    const _filtContinent = event.target.value;
//    FilterByContinent(_filtContinent);
    dispatch(setFilterContinent (_filtContinent));
  }
  
  return (
  <div>
    <button 
      onClick={searchClearClick}
      >Clear</button>
    <input 
      type="text"
      name='LocalSrchTxt'
      placeholder='Search by Name...'
      onChange={chgHndlrSrch}
      value={localSrchTxt}
      />
    <button
      onClick={btnSearchClick}
      >Search</button>
    <span style={{display: 'inline-block', width: '60px'}}></span>

    <select onChange={chgFilterContinentHdlr}> {/* Filter by Continent */}
      <option value={FILT_CONT_ALL}>{FILT_CONT_ALL}</option>
      <option value={FILT_CONT_AFRI}>{FILT_CONT_AFRI}</option>
      <option value={FILT_CONT_ANTA}>{FILT_CONT_ANTA}</option>
      <option value={FILT_CONT_ASIA}>{FILT_CONT_ASIA}</option>
      <option value={FILT_CONT_EURO}>{FILT_CONT_EURO}</option>
      <option value={FILT_CONT_NAME}>{FILT_CONT_NAME}</option>
      <option value={FILT_CONT_OCEA}>{FILT_CONT_OCEA}</option>
      <option value={FILT_CONT_SAME}>{FILT_CONT_SAME}</option>
    </select>

    <select // todo Filter by Activity Name
    >
      <option value='asc'>Ascending</option>
      <option value='desc'>Descending</option>
    </select>

    <select // todo Order Alphabetical
    >
      <option value='alfa'>Alphabetic</option>
      <option value='popu'>Population</option>
    </select>

    <select // todo Order Population
    >
      <option value='asc'>Ascending</option>
      <option value='desc'>Descending</option>
    </select>

  </div>
  )};

  export default SearchBar;