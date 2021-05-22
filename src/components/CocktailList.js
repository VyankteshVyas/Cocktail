import React from 'react'
import Loading from './Loading';
import Cocktail from './Cocktail';
import {useGlobalContext} from '../context';


const CocktailList=()=>{
    const {cocktails,loading}=useGlobalContext();
    if(loading){
        return <Loading/>
    }
    return (
        <div>
            <h2>CocktailList Component</h2>
        </div>
    )
}

export default CocktailList;