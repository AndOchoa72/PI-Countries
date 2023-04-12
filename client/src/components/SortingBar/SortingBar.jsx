import { React } from "react";

const SortingBar = () => {

  return (
  <>

    <select // todo: Alphabetical / Population
    >
      <option value='alfa'>By Name</option>
      <option value='popu'>Population</option>
    </select>

    <select // todo: Ascending / Descending
    >
      <option value='asc'>Ascending</option>
      <option value='desc'>Descending</option>
    </select>

  </>
  )};

  export default SortingBar;