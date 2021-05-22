import React from 'react'
import {useGlobalContext} from '../context';

const Searchbar=()=>{
    const {setSearchTerm}= useGlobalContext();
    return (
        <div>
            <h2>Searchbar Component</h2>
        </div>
    )
}

export default Searchbar;