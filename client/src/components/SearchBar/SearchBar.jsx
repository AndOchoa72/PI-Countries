import { React, useState } from "react";
import { useDispatch } from 'react-redux';
import { setSearchText } from "../../redux/actions";
import store from "../../redux/store";

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
    dispatch(setSearchText(''));
  };
  
  return (
  <>
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
  </>
  )};

  export default SearchBar;