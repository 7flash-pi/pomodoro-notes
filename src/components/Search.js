import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useGlobalContext } from '../context/context';

const Search = () => {
  const { searchResult }= useGlobalContext();
    const [search,setSearch]=useState('');

    useEffect(() => {
      if(search){
        searchResult(search);
        }
    } ,[search])
  return (
    <div className='search'>
        <BsSearch className='searchicon'/>
        <input type="text" placeholder="search"  value={search} onChange={e => setSearch(e.target.value) }/>
      
    </div>
  )
}

export default Search
