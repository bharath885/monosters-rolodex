import React from 'react';
import  './search-box.styles.css';

export const SearchBox =({placeholderName,searchHandleChnage})=>(

     
<input className="search" type='search' placeholder={placeholderName} onChange={searchHandleChnage} />

    
)

