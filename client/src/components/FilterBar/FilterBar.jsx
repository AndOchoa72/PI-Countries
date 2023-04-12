import { React } from "react";
import { useDispatch } from 'react-redux';
import { FILT_CONT_ALL, FILT_CONT_AFRI,
   FILT_CONT_ANTA, FILT_CONT_ASIA, FILT_CONT_EURO,
   FILT_CONT_NAME, FILT_CONT_OCEA, FILT_CONT_SAME,
   setFilterContinent } from "../../redux/actions";
import store from "../../redux/store";
import FilterByContinent from "../AppFlow/FilterByContinent";

const FilterBar = () => {

  const dispatch = useDispatch(store);

  const chgFilterContinentHdlr = (event) => {
    const _filtContinent = event.target.value;
//    FilterByContinent(_filtContinent);
    dispatch(setFilterContinent (_filtContinent));
  }
  
  return (
  <>

    {/* Filter by Continent */}
    <select
      name='selConti'
      onChange={chgFilterContinentHdlr} >
      <option value={FILT_CONT_ALL}>{FILT_CONT_ALL}</option>
      <option value={FILT_CONT_AFRI}>{FILT_CONT_AFRI}</option>
      <option value={FILT_CONT_ANTA}>{FILT_CONT_ANTA}</option>
      <option value={FILT_CONT_ASIA}>{FILT_CONT_ASIA}</option>
      <option value={FILT_CONT_EURO}>{FILT_CONT_EURO}</option>
      <option value={FILT_CONT_NAME}>{FILT_CONT_NAME}</option>
      <option value={FILT_CONT_OCEA}>{FILT_CONT_OCEA}</option>
      <option value={FILT_CONT_SAME}>{FILT_CONT_SAME}</option>
    </select>

    {/* Filter by Activity Name */}
    <select name='selActi'>
      <option value='asc'>Ascending</option>
      <option value='desc'>Descending</option>
    </select>

  </>
  )};

  export default FilterBar;