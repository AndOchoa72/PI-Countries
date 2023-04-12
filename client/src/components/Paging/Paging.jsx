import style from './Paging.module.css';
import React from "react";

export default function Paging 
  ({ countriesPerPage, allCountries, paging }) {
  
  const pageNr = [];

  for ( let i = 0 ;
      i < Math.ceil(( allCountries ) / countriesPerPage );
      i++ ) {
    pageNr.push(i+1);
  }

  return(
    <nav>
      <ul className={style.paging}>
        {pageNr &&
        pageNr.map(number => {
          return <li className={style.number} key={number}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={() => paging(number)}>
              {number}
            </a>
          </li>
        })}
      </ul>
    </nav>
  )
}