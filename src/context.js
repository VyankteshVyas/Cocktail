import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext();




const AppProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [searchTerm,setSearchTerm] = useState('a');
    const [cocktails,setCockTails] = useState([]);

    async function fetchDrinks(){
        setLoading(true);
        try{
            const response=await fetch(`${url}${searchTerm}`);
            const data=await response.json();
            const {drinks}=data;
            if(drinks){
                const newCocktails = drinks.map((item) => {
                    const {
                      idDrink,
                      strDrink,
                      strDrinkThumb,
                      strAlcoholic,
                      strGlass,
                    } = item
          
                    return {
                      id: idDrink,
                      name: strDrink,
                      image: strDrinkThumb,
                      info: strAlcoholic,
                      glass: strGlass,
                    }
                  })
                  setCockTails(newCocktails)
          
            }else{
                setCockTails([]);
            }
            console.log(data);
            setLoading(false);
        }catch(err){
            console.log(err);
            setLoading(false);
        }
    }

    useEffect(function (){
        fetchDrinks();
    },[searchTerm])

    return ( 
        <AppContext.Provider
        value={{
            loading,
            cocktails,
            setSearchTerm
        }}>
            {children}
        </AppContext.Provider>
     );
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
 
export {AppContext,AppProvider};